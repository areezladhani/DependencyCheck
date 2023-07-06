const fs = require("fs");
const semver = require("semver");

function loadVulnerableModules() {
  const data = fs.readFileSync("vulnerabilities.json", "utf8");
  return JSON.parse(data);
}

function checkVulnerableVersions(moduleVersions) {
  const vulnerableModules = loadVulnerableModules();

  const vulnerabilities = [];
  for (const [module, detailsList] of Object.entries(vulnerableModules)) {
    if (module in moduleVersions) {
      const moduleVersion = moduleVersions[module];
      for (const details of detailsList) {
        for (const vulnVersion of details.vulnerable_versions) {
          // now vulnVersion is an array, so we iterate over it again
          for (const version of vulnVersion) {
            if (semver.satisfies(moduleVersion, version)) {
              vulnerabilities.push({
                module: module,
                current_version: moduleVersion,
                vulnerable_versions: version,
                patched_versions: details.patched_versions,
                information_url: details.information_url,
              });
              break;
            }
          }
        }
      }
    }
  }

  return vulnerabilities;
}

function parseDependencyFile(dependencyFilePath) {
  const data = JSON.parse(fs.readFileSync(dependencyFilePath, "utf8"));
  const packages = data["packages"];
  let moduleVersions = {};
  for (const [modulePath, details] of Object.entries(packages)) {
    const modulePathParts = modulePath.split("/");
    if (modulePathParts.length < 2) {
      continue;
    }
    const moduleName = modulePathParts[1];
    if (moduleName && moduleName.startsWith("@")) {
      moduleVersions[moduleName + "/" + modulePathParts[2]] = details.version;
    }
  }
  return moduleVersions;
}

function scanProject() {
  const dependencyFilePath = "../package-lock.json";
  const moduleVersions = parseDependencyFile(dependencyFilePath);
  const vulnerabilities = checkVulnerableVersions(moduleVersions);

  let logData = "";

  if (vulnerabilities.length > 0) {
    logData += "Vulnerabilities found:\n";
    for (const vuln of vulnerabilities) {
      logData += `Module: ${vuln.module}\n`;
      logData += `Current version: ${vuln.current_version}\n`;
      logData += `Vulnerable versions: ${vuln.vulnerable_versions}\n`;
      logData += `Patched versions: ${vuln.patched_versions}\n`;
      logData += `More information: ${vuln.information_url}\n\n`;
    }
  } else {
    logData += "No vulnerabilities found.\n";
  }

  fs.writeFileSync("scan_report.txt", logData);
  console.log(logData);
}

scanProject();
