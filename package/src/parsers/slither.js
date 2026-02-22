export function parseSlither({ stdout }) {
    // TODO: replace this with real parsing of Slither's output / JSON
    // For now, very naive example:
    const findings = [];
  
    const lines = stdout.split("\n");
    for (const line of lines) {
      if (line.includes("WARNING")) {
        findings.push({
          severity: "medium",
          title: line.trim(),
          location: null,
          type: "slither-warning"
        });
      }
      if (line.includes("INFO")) {
        findings.push({
          severity: "low",
          title: line.trim(),
          location: null,
          type: "slither-info"
        });
      }
    }
  
    return findings;
  }
  