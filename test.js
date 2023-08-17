const semver = require("semver");

const testVersion = "^0.6.1";

const versions = [
  "0.2.1",
  "0.2.2",
  "0.3.0",
  "0.3.1",
  "0.4.0",
  "0.4.1",
  "0.4.2",
  "0.5.0",
  "0.5.1",
  "0.6.0",
  "0.6.1",
  // Add other versions if needed
];

for (let version of versions) {
  if (semver.satisfies(version, testVersion)) {
    console.log(`Version ${version} matches ${testVersion}`);
  }
}
