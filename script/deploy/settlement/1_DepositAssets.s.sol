// SPDX-License-Identifier: BSD-3-Clause
// Copyright © 2023 TXA PTE. LTD.
pragma solidity ^0.8.19;

import "../BaseDeploy.sol";
import "../../../src/Manager/AssetChain/AssetChainManager.sol";
import "../../../src/Staking/Staking.sol";
import "../../../src/CrossChain/LayerZero/ProcessingChainLz.sol";

contract DepositAssets is BaseDeploy {
    using stdJson for string;

    function run() external {
        onlyOnAssetChain();
        string memory json = vm.readFile(assetChainContractsPath);
        AssetChainManager manager = AssetChainManager(abi.decode(json.parseRaw(".manager"), (address)));
        Portal portal = Portal(manager.portal());
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
        IERC20 protocolToken = IERC20(vm.envAddress("PROTOCOL_TOKEN_ADDR"));
        protocolToken.approve(address(portal), 0.001 ether);
        portal.depositToken(address(protocolToken), 0.001 ether);
        vm.stopBroadcast();
    }
}