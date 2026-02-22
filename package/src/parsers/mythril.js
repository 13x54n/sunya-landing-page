export function parseMythril({ stdout }) {
    try {
      const json = JSON.parse(stdout);
      const issues = json.issues || [];
      return issues.map((issue) => ({
        severity: issue.severity || "unknown",
        title: issue.title || issue.description?.head || "Issue",
        location: issue.locations?.[0]?.sourceMap || null,
        type: "mythril-issue"
      }));
    } catch {
      return [];
    }
  }
  