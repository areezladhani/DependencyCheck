# Dependency Scan Report

**Scan Date**: 8/13/2023

**Total Dependencies Checked**: 5

**Vulnerabilities Found**: 2

## All Dependencies:

| Dependency | Version |
|------------|---------|
| @chainlink/contracts | ^0.6.1 |
| @nomicfoundation/hardhat-toolbox | ^2.0.2 |
| @openzeppelin/contracts | ^4.9.1 |
| hardhat-gas-reporter | ^1.0.9 |
| hardhat | ^2.14.0 |


## Vulnerable Dependencies:

| Dependency | Version | Impact | Patched Versions | Link |
|------------|---------|-------------|------------------|------|
| @openzeppelin/contracts | ^4.9.1 | ERC2771Context with custom forwarder may lead to zero-valued _msgSender | 4.9.3 | [Details](https://github.com/advisories/GHSA-g4vp-m682-qqmp) |
| @openzeppelin/contracts | ^4.9.1 | MerkleProof multiproofs may allow proving arbitrary leaves for specific trees | 4.9.2 | [Details](https://github.com/advisories/GHSA-wprv-93r4-jj2p) |
