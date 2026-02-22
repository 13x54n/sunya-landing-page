import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import chalk from "chalk";

async function scanContractsDir(dir) {
  const contracts = [];
  
  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const stats = await stat(fullPath);
      
      if (stats.isDirectory()) {
        await walk(fullPath);  // recurse
      } else if (fullPath.endsWith('.sol')) {
        contracts.push(fullPath);
      }
    }
  }
  
  await walk(dir);
  return contracts;
}

async function runCommand(command, args, options = {}) {
  // ... same as before
}

export async function runScan(configPath) {
  const config = JSON.parse(await readFile(configPath, "utf8"));
  const contracts = await scanContractsDir(config.contractsDir);
  
  console.log(chalk.cyan(`Found ${contracts.length} Solidity files in ${config.contractsDir}`));
  
  const results = [];

  for (const tool of config.tools) {
    console.log(chalk.cyan(`Running ${tool.name} on ${contracts.length} files...`));
    
    // For each tool, either:
    // 1. Pass entire directory (slither, most tools do this automatically)
    const toolArgs = [...(tool.args || [])];
    
    if (tool.directoryMode !== false) {
      // Most tools accept directory path directly
      toolArgs.push(config.contractsDir);
    } else {
      // Or run once per file (less common, slower)
      for (const contract of contracts) {
        const fileArgs = [...toolArgs, contract];
        // run per-file command...
      }
    }
    
    const { code, stdout, stderr } = await runCommand(
      tool.command, toolArgs, { cwd: process.cwd() }
    );
    
    const parser = parsers[tool.parser];
    const parsed = parser({ stdout, stderr, code });
    
    results.push({
      tool: tool.name,
      contractsScanned: contracts.length,
      findings: parsed
    });
  }

  await outputResults(results, config.output);
}
