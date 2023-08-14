const fs = require("fs");
const path = require("path");
const semver = require("semver");

// Paths
const scannerDir = path.dirname(__filename);
const vulnerabilitiesPath = path.join(scannerDir, "vulnerabilities.json");
const packageJsonPath = path.join(scannerDir, "..", "package.json");
const reportPath = path.join(scannerDir, "dependency_report.md");

// Check if package.json exists
if (!fs.existsSync(packageJsonPath)) {
  console.error(
    "package.json not found in the parent directory of the scanner."
  );
  process.exit(1);
}

// Read package.json and vulnerabilities.json
const packageData = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const vulnerabilities = JSON.parse(
  fs.readFileSync(vulnerabilitiesPath, "utf8")
);

// Combine dependencies and devDependencies
const allDependencies = {
  ...packageData.dependencies,
  ...packageData.devDependencies,
};

// Check for vulnerable dependencies
const vulnerableDependencies = [];

for (let dep in allDependencies) {
  if (vulnerabilities[dep]) {
    for (let vuln of vulnerabilities[dep]) {
      for (let range of vuln.vulnerable_versions) {
        if (semver.intersects(allDependencies[dep], range)) {
          vulnerableDependencies.push({
            name: dep,
            version: allDependencies[dep],
            description: vuln.description,
            patched_versions: vuln.patched_versions,
            link: vuln.link,
          });
          break;
        }
      }
    }
  }
}

// Generate markdown report
let report = "# Dependency Scan Report\n\n";

// Summary Section
const currentDate = new Date().toLocaleDateString();
report += `**Scan Date**: ${currentDate}\n\n`;
report += `**Total Dependencies Checked**: ${
  Object.keys(allDependencies).length
}\n\n`;
report += `**Vulnerabilities Found**: ${vulnerableDependencies.length}\n\n`;

// Table Format for All Dependencies
report += "## All Dependencies:\n\n";
report += "| Dependency | Version |\n";
report += "|------------|---------|\n";
for (let dep in allDependencies) {
  report += `| ${dep} | ${allDependencies[dep]} |\n`;
}

// Vulnerable Dependencies with Additional Information
if (vulnerableDependencies.length > 0) {
  report += "\n\n## Vulnerable Dependencies:\n\n";
  report += "| Dependency | Version | Impact | Patched Versions | Link |\n";
  report +=
    "|------------|---------|-------------|------------------|------|\n";
  for (let vulnDep of vulnerableDependencies) {
    report += `| ${vulnDep.name} | ${vulnDep.version} | ${vulnDep.description} | ${vulnDep.patched_versions} | [Details](${vulnDep.link}) |\n`;
  }
} else {
  report += "\n\nThe scanner did not find any known vulnerable dependencies.\n";
}

fs.writeFileSync(reportPath, report);
console.log("Dependency report generated at:", reportPath);
