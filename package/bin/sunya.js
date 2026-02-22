#!/usr/bin/env node

import { Command } from "commander";
import { runScan } from "../src/runScan.js";

const program = new Command();

program
  .name("sunya")
  .description("Bash-powered static analysis for EVM smart contracts")
  .version("0.1.0");

program
  .command("scan")
  .description("Run static analysis on smart contracts")
  .option("-c, --config <path>", "Path to config file", "sunya.config.json")
  .action(async (opts) => {
    try {
      await runScan(opts.config);
    } catch (err) {
      console.error("Scan failed:", err.message);
      process.exitCode = 1;
    }
  });

program.parse(process.argv);
