# Dependency Scan Report

**Scan Date**: 8/17/2023

**Total Dependencies Checked**: 5

**Known Issues In Current Dependencies**: 2

## All Dependencies

<details>
<summary>All Dependencies</summary>

| Dependency                       | Version |
| -------------------------------- | ------- |
| @chainlink/contracts             | ^0.6.1  |
| @nomicfoundation/hardhat-toolbox | ^2.0.2  |
| @openzeppelin/contracts          | ^4.9.1  |
| hardhat-gas-reporter             | ^1.0.9  |
| hardhat                          | ^2.14.0 |

</details>

## Known Issues In Dependencies:

<details>
<summary>Known Issues In Dependencies</summary>

| Dependency              | Version | Description                                                                   | Patched Versions | Link                                                         |
| ----------------------- | ------- | ----------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------ |
| @openzeppelin/contracts | ^4.9.1  | ERC2771Context with custom forwarder may lead to zero-valued \_msgSender      | 4.9.3            | [Details](https://github.com/advisories/GHSA-g4vp-m682-qqmp) |
| @openzeppelin/contracts | ^4.9.1  | MerkleProof multiproofs may allow proving arbitrary leaves for specific trees | 4.9.2            | [Details](https://github.com/advisories/GHSA-wprv-93r4-jj2p) |

</details>

## Significant Changes In Dependencies:

<details>
<summary>Significant Changes In Dependencies</summary>

| Dependency           | Version | Description                                    | Patched Versions | Link                                                                                                          |
| -------------------- | ------- | ---------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| @chainlink/contracts | ^0.6.1  | New in 0.6.1: 4 changes (1 added, 3 modified). | undefined        | [Details](https://github.com/smartcontractkit/chainlink/blob/develop/contracts/CHANGELOG.md#061---2023-02-06) |

</details>
