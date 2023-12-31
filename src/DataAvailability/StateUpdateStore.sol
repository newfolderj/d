// SPDX-License-Identifier: BSD-3-Clause
// Copyright © 2023 TXA PTE. LTD.
pragma solidity ^0.8.19;

import "../StateUpdateLibrary.sol";

/**
 * Meant to be deployed on a very-high throughput chain like a Polygon Supernet.
 * Used by the Participating Interface to publish data.
 */
contract StateUpdateStore {
    uint256 public lastSequenceId = 0;
    mapping(uint256 => uint256) public lastChainSequenceId;
    address immutable participatingInterface;

    constructor(address _participatingInterface) {
        participatingInterface = _participatingInterface;
    }

    /**
     * Called by the participating interface to record state updates in calldata.
     *
     * This function provides highest throughput of data per transaction by limiting gas usage per state update.
     * However, it performs no validation on the data. Everything must be validated by SDPs and reported
     * within the fraud period.
     */
    function recordStateUpdates(StateUpdateLibrary.StateUpdate[] calldata stateUpdates) external view {
        require(msg.sender == participatingInterface, "recordStateUpdates: Sender not participating interface");
    }

    /**
     * Validates that the recovered address from the signature of the StateUpdate
     * matches the address of the participatingInterface.
     */
    function validateSignatures(StateUpdateLibrary.SignedStateUpdate[] calldata stateUpdates) internal view returns (bool) {
        for (uint256 i = 0; i < stateUpdates.length; i++) {
            StateUpdateLibrary.SignedStateUpdate memory signedStateUpdate = stateUpdates[i];
            StateUpdateLibrary.StateUpdate memory stateUpdate = signedStateUpdate.stateUpdate;
            StateUpdateLibrary.Signature memory sig = signedStateUpdate.sig;

            bytes32 stateUpdateHash = keccak256(abi.encode(stateUpdate));
            bytes32 messageHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", stateUpdateHash));

            address recoveredAddress = ecrecover(messageHash, sig.v, sig.r, sig.s);

            if (recoveredAddress != participatingInterface) {
                return false;
            }
        }
        return true;
    }

    /**
     * Validates that each `stateUpdate` is sorted by its `sequenceId`
     */
    function validateSequence(StateUpdateLibrary.SignedStateUpdate[] calldata stateUpdates) internal pure returns(bool) {
        for (uint256 i = 0; i < stateUpdates.length - 1; i++) {
            uint256 currentSequenceId = stateUpdates[i].stateUpdate.sequenceId;
            uint256 nextSequenceId = stateUpdates[i + 1].stateUpdate.sequenceId;

            if (currentSequenceId > nextSequenceId) {
                return false;
            }
        }
        return true;
    }


    function reportStateUpdates(StateUpdateLibrary.SignedStateUpdate[] calldata stateUpdates, bytes32 root) external {
        // First StateUpdate must be next ID after last recorded sequence ID
        require(stateUpdates[0].stateUpdate.sequenceId == lastSequenceId + 1, "reportStateUpdates: First reported state update has incorrect sequence ID");

        // Iterate through reported state updates
        for(uint256 i = 0; i < stateUpdates.length; i++) {
            StateUpdateLibrary.SignedStateUpdate memory signedStateUpdate = stateUpdates[i];
            StateUpdateLibrary.StateUpdate memory stateUpdate = signedStateUpdate.stateUpdate;
            StateUpdateLibrary.Signature memory sig = signedStateUpdate.sig;

            // Validate signature
            bytes32 stateUpdateHash = keccak256(abi.encode(stateUpdate));
            bytes32 messageHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", stateUpdateHash));
            address recoveredAddress = ecrecover(messageHash, sig.v, sig.r, sig.s);
            require(recoveredAddress == participatingInterface, "Recovered address does not match participating interface address");

            // Validate that sequence IDs are ordered
            if(i < stateUpdates.length - 1) {
                require(stateUpdates[i+1].stateUpdate.sequenceId > stateUpdate.sequenceId, "reportStateUpdates: State updates are not ordered by sequence ID");
            }
            

            // Switch based on typeIdentifier
            if(stateUpdate.typeIdentifier == StateUpdateLibrary.TYPE_ID_DepositAcknowledgement) {
                StateUpdateLibrary.DepositAcknowledgement memory depositAcknowledgement = abi.decode(stateUpdate.structData, (StateUpdateLibrary.DepositAcknowledgement));
                validateDepositAcknowledgement(depositAcknowledgement);
                lastChainSequenceId[depositAcknowledgement.deposit.chainId]++;
            } else if (stateUpdate.typeIdentifier == StateUpdateLibrary.TYPE_ID_SettlementAcknowledgement) {
                StateUpdateLibrary.SettlementAcknowledgement memory settlementAcknowledgement = abi.decode(stateUpdate.structData, (StateUpdateLibrary.SettlementAcknowledgement));
                validateSettlementAcknowledgement(settlementAcknowledgement);
                lastChainSequenceId[settlementAcknowledgement.settlementRequest.chainId]++;
            } else if (stateUpdate.typeIdentifier == StateUpdateLibrary.TYPE_ID_Trade) {
                StateUpdateLibrary.Trade memory trade = abi.decode(stateUpdate.structData, (StateUpdateLibrary.Trade));
                validateTrade(trade);
            }
        }

        // Update last processed sequence ID
        lastSequenceId = stateUpdates[stateUpdates.length - 1].stateUpdate.sequenceId;
    }

    function validateDepositAcknowledgement(StateUpdateLibrary.DepositAcknowledgement memory depositAcknowledgement) internal view {
        require(depositAcknowledgement.deposit.chainSequenceId == lastChainSequenceId[depositAcknowledgement.deposit.chainId] + 1, "validateDepositAcknowledgement: DepositAcknowledgement is not ordered by chain sequence ID");
    }

    function validateSettlementAcknowledgement(StateUpdateLibrary.SettlementAcknowledgement memory settlementAcknowledgement) internal view {
        require(settlementAcknowledgement.settlementRequest.chainSequenceId == lastChainSequenceId[settlementAcknowledgement.settlementRequest.chainId] + 1, "validateSettlementAcknowledgement: SettlementAcknowledgement is not ordered by chain sequence ID");
    }

    function validateTrade(StateUpdateLibrary.Trade memory trade) internal pure {
        require(trade.params.orderA.price == trade.params.orderB.price, "validateTrade: Price in orders doesn't match");
    }
}
