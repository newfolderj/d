// SPDX-License-Identifier: BSD-3-Clause
// Copyright © 2023 TXA PTE. LTD.
pragma solidity ^0.8.19;

interface IRollup {
    function requestSettlement(address token, address trader) external returns (uint256);
}
