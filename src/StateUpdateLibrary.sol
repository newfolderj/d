// SPDX-License-Identifier: BSD-3-Clause
// Copyright © 2023 TXA PTE. LTD.
pragma solidity ^0.8.19;

import "./util/Id.sol";

library StateUpdateLibrary {
    /// @notice Represents a balance on a participating interface.
    /// Updated each time a Deposit, Trade, or Settlement occurs.
    /// Once reported on the processing chain as a Settlement, it can be used to generate obligations that are then
    /// relayed to the asset chain, allowing the trader to withdraw funds.
    struct Balance {
        address trader;
        address asset;
        Id chainId;
        uint256 amount;
    }

    /// @notice Generated and stored on an asset chain each time a trader deposits into a Portal contract.
    struct Deposit {
        address trader;
        address asset;
        address participatingInterface;
        uint256 amount;
        Id chainSequenceId;
        Id chainId;
    }

    /// @notice Generated and stored on an asset chain each time a trader requets settlement of an asset using the
    /// Portal contract.
    struct SettlementRequest {
        address trader;
        address asset;
        address participatingInterface;
        Id chainSequenceId;
        Id chainId;
    }

    uint8 public constant TYPE_ID_DepositAcknowledgement = 0x00;
    uint8 public constant TYPE_ID_Trade = 0x01;
    uint8 public constant TYPE_ID_Settlement = 0x02;
    uint8 public constant TYPE_ID_FeeUpdate = 0x03;
    uint8 public constant TYPE_ID_DepositRejection = 0x04;

    struct Signature {
        uint8 v;
        bytes32 r;
        bytes32 s;
    }

    /// @notice Represents an entry in the ledger of the participating interface.
    /// @param typeIdentifier One of the constants defined above. Informs how to decode the `structData`
    /// @param sequenceId Unique, incremental identifier assigned to this update by the participating interface.
    /// @param participatingInterface Address of the participating interface.
    /// @param structData Struct containing information about how the state of the ledger changed.
    struct StateUpdate {
        uint8 typeIdentifier;
        Id sequenceId;
        address participatingInterface;
        bytes structData;
    }

    /// @notice A StateUpdate that was signed by the participating interface
    struct SignedStateUpdate {
        StateUpdate stateUpdate;
        uint8 v;
        bytes32 r;
        bytes32 s;
    }

    /**
     * The structData field in StateUpdate deserializes to one of the following structs:
     * 1. DepositAcknowledgement
     * 2. Trade
     * 3. SettlementAcknowledgement
     * 4. FeeUpdate
     * 5. DelegationAcknowledgement
     */

    /// @notice Generated by the participating interface when it includes an on-chain deposit in its ledger.
    struct DepositAcknowledgement {
        Deposit deposit;
        Id balanceBeforeId;
        Balance balanceBefore;
        Balance balanceAfter;
        Id depositRootBeforeId;
        bytes32 depositRootBefore;
        bytes32 depositRootAfter;
    }

    /// @notice Generated by the participating interface when it processes a trader's settlement request.
    struct Settlement {
        SettlementRequest settlementRequest;
        Id balanceBeforeId;
        Balance balanceBefore;
        Balance balanceAfter;
    }

    /// @notice Generated by the participating interface when it activates new trading fees.
    struct FeeUpdate {
        uint256 feeSequenceId;
        uint256 newMakerFee;
        uint256 newTakerFee;
        // State Update ID which has the FeeUpdate with feeSquenceId - 1
        uint256 lastFeeUpdate;
    }

    /// @notice Generated by the participating interface when it rejects a deposit that was generated on-chain.
    struct DepositRejection {
        Deposit deposit;
        Id depositRootBeforeId;
        bytes32 depositRootBefore;
        bytes32 depositRootAfter;
    }

    /// @notice Generated by the participating interface when it executes a trade between two traders.
    struct Trade {
        Id feeUpdateId; // Sequence ID of FeeUpdate canonical to this trade
        TradeParams params;
        Id makerBaseBalanceBeforeId;
        Balance makerBaseBalanceBefore;
        Id makerCounterBalanceBeforeId;
        Balance makerCounterBalanceBefore;
        Id takerBaseBalanceBeforeId;
        Balance takerBaseBalanceBefore;
        Id takerCounterBalanceBeforeId;
        Balance takerCounterBalanceBefore;
        uint256 makerBaseBalanceAfter;
        uint256 makerCounterBalanceAfter;
        uint256 takerBaseBalanceAfter;
        uint256 takerCounterBalanceAfter;
        Balance makerFee;
        Balance takerFee;
    }

    struct TradeParams {
        address participatingInterface;
        SignedOrder orderA;
        SignedOrder orderB;
        Product product;
        uint256 size;
        uint256 price;
        // If true, the maker is the buyer. If false, the maker is the seller. Vice versa for the taker.
        bool makerIsBuyer;
        address maker;
        address taker;
    }

    struct Product {
        address baseAsset;
        uint8 baseAssetPrecision;
        uint256 baseAssetChainId;
        address counterAsset;
        uint8 counterAssetPrecision;
        uint256 counterAssetChainId;
    }

    struct SignedOrder {
        Order order;
        uint8 v;
        bytes32 r;
        bytes32 s;
    }

    struct Order {
        Product product;
        bool side;
        uint256 size;
        uint256 price;
    }

    struct LimitOrder {
        OrderType orderType;
        Side side;
        uint256 size;
        uint256 total;
        FillType fillType;
        uint256 price;
        Signature sig;
    }

    enum Side {
        ORDER_SIDE_BUY,
        ORDER_SIDE_SELL
    }

    enum OrderType {
        ORDER_TYPE_CONTINGENT,
        ORDER_TYPE_LMT,
        ORDER_TYPE_MKT,
        ORDER_TYPE_MULTI_CONTINGENT,
        ORDER_TYPE_NONE,
        ORDER_TYPE_OCO,
        ORDER_TYPE_OTO,
        ORDER_TYPE_OTOCO,
        ORDER_TYPE_STOP,
        ORDER_TYPE_STOP_LMT,
        ORDER_TYPE_TRAILING_STOP,
        ORDER_TYPE_TRAILING_STOP_LMT
    }

    enum FillType {
        ORDER_FILL_TYPE_AON,
        ORDER_FILL_TYPE_FOK,
        ORDER_FILL_TYPE_NORM
    }

    // Below functions are helpers for generating Go bindings that the validator can use to encode structs
    function packSettlementRequest(SettlementRequest memory settlementRequest) public view returns (bool) {
        return true;
    }

    function packSettlement(Settlement memory settlement) public view returns (bool) {
        return true;
    }

    function packStateUpdate(StateUpdate memory su) public view returns (bool) {
        return true;
    }

    function packSignedStateUpdate(SignedStateUpdate memory ssu) public view returns (bool) {
        return true;
    }
}
