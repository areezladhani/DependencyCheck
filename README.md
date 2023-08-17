# Dependency Scanner

This scanner compares the dependencies and devDependencies listed in a `package.json` file against a registry of known issues associated with specific versions. If any of the listed versions match the known issues, a markdown report is automatically generated, detailing the identified issues. Additionally, the report highlights significant changes in dependencies by providing a concise summary of the version changes. 

NOTE: Currently, the scanner covers Chainlink and OpenZeppelin dependencies, with plans to include more in the near future.

## Prerequisites

- Node.js
- `semver` npm package

## Setup

1. Place the scanner directory in the same level as your `package.json` file.
2. Install the required npm packages:

```bash
npm install semver
```

## How to use

1. Run the scanner:

```bash
node DependencyCheck/scan_project.js
```

- If any vulnerable dependencies are found, a markdown report will be generated in the scanner directory named dependency_report.md.

## How It Works

- The scanner reads the `package.json` file to get the list of dependencies and devDependencies.
- It then checks each dependency against the known vulnerabilities in `vulnerabilities.json`.
- If a vulnerable dependency is found, it's added to the report.
- The report provides details about the vulnerability, including a description, patched versions, and a link to more details.
- Additionally, significant changes in dependencies are listed along with a brief summary of the changes in versions.

## Examples from Previous Audits

Here are some examples from previous audits where the scanner was used:

- [Audit 1 ](https://github.com/areezladhani/DependencyCheck/blob/main/reports/LybraFinance.md)

## Contribution

Contributions to improve the scanner are welcome! please open an issue or contact areezladhani21@gmail.com.
