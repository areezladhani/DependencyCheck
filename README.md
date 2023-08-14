# Dependency Vulnerability Scanner

This scanner checks the dependencies and devDependencies of a `package.json` file against a list of known vulnerabilities. If any vulnerable dependencies are found, a markdown report is generated detailing the vulnerabilities.

## Prerequisites

- Node.js
- `semver` npm package

## Setup

1. Ensure that the `package.json` file of your project is located in the parent directory of the scanner.
2. Install the required npm packages:

```bash
npm install semver
```

## How to use

1. Run the scanner:

```bash
node node path_to_scanner.js
```

- If any vulnerable dependencies are found, a markdown report will be generated in the scanner directory named dependency_report.md.

## How It Works

- The scanner reads the `package.json` file to get the list of dependencies and devDependencies.
- It then checks each dependency against the known vulnerabilities in `vulnerabilities.json`.
- If a vulnerable dependency is found, it's added to the report.
- The report provides details about the vulnerability, including a description, patched versions, and a link to more details.

## Report Structure

The generated report has the following sections:

### Summary:

- Provides a quick overview of the scan, including the scan date, total dependencies checked, and the number of vulnerabilities found.

### All Dependencies:

- Lists all the dependencies and their versions.

### Vulnerable Dependencies:

- Lists only the vulnerable dependencies along with a description of the vulnerability, patched versions, and a link to more details.

## Examples from Previous Audits

Here are some examples from previous audits where the scanner was used:

- [Lybra Finance - Code4rena](https://github.com/areezladhani/DependencyCheck/blob/main/reports/LybraFinance.md)

## Contribution

Contributions to improve the scanner are welcome!
