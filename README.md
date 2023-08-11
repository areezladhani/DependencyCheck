# Node.js Vulnerability Scanner

## Description

The Node.js Vulnerability Scanner scans the project's dependencies as defined in the `package-lock.json` file and compares the installed versions with a list of vulnerable versions stored in a `vulnerabilities.json` file. If a match is found, it generates a report that includes the module's name, its current version, the vulnerable versions, the patched versions, and a link to more information about the vulnerability.

## Usage

1. **Install Dependencies**

   To use this tool, make sure you have Node.js installed on your machine. If not, you can download and install it from the official [Node.js website](https://nodejs.org/en/download/). After installing Node.js, install the `semver` package by running:

   ```
   npm install semver
   ```

2. **Prepare the Vulnerabilities File**

   The `vulnerabilities.json` file contains an array of known vulnerabilities. Each vulnerability includes the package name, vulnerable versions, patched versions, and a URL with more information. Make sure to keep this file up-to-date with the latest vulnerabilities.

3. **Run the Vulnerability Scanner**

   You can run the vulnerability scanner by executing the `scan_project.js` file with Node.js. From the terminal, navigate to the directory containing the `scan_project.js` file and run:

   ```
   node scan_project.js
   ```

   This will generate a report in the terminal and a `scan_report.txt` file that contains the same information.

   If any vulnerabilities are found, they will be listed along with their details. If no vulnerabilities are found, the report will display "No vulnerabilities found".

## Files

- `scan_project.js`: This is the main file that contains the scanning logic.

- `vulnerabilities.json`: This is the file that contains the list of known vulnerabilities for different modules.

- `package-lock.json`: This is your project's dependency file that lists the modules and their versions used in your project. Make sure this file is up-to-date by running `npm install` in your project root.

## Contributing

Contributions are welcome! Feel free to submit a pull request.
