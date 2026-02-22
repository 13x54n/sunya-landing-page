# Sunya

> **Sunya** is an npm package that executes Bash commands to perform static analysis of smart contract vulnerabilities, primarily targeting EVM-based smart contracts.

Sunya scans your entire `contracts/` directory recursively and runs your favorite analysis tools (Slither, Mythril, etc.) with a single command. No file lists, no complex setup.

## ✨ Features

- **Directory-first scanning** - Analyzes entire `contracts/` folder recursively
- **Multi-tool support** - Run Slither, Mythril, Manticore, or any CLI tool
- **Config-driven** - Define tools and settings in `sunya.config.json`
- **Structured output** - Pretty console tables + JSON reports
- **Zero dependencies** - Uses your existing system tools

## 📦 Installation

```bash
npm install -g sunya
# or
npx sunya scan
```

## 🚀 Quick Start

1. **Create config** in your project root:

```json
// sunya.config.json
{
  "contractsDir": "./contracts",
  "tools": [
    {
      "name": "slither",
      "command": "slither",
      "args": [],
      "parser": "slither"
    },
    {
      "name": "mythril",
      "command": "myth",
      "args": ["analyze"],
      "parser": "mythril"
    }
  ],
  "output": {
    "format": "table"
  }
}
```

2. **Run scan**:

```bash
npx sunya scan
```

**Output:**
```
Found 12 Solidity files in ./contracts
Running slither on 12 files...
Running mythril on 12 files...

Tool: slither
  [medium] State variable visibility (contracts/MyToken.sol:42)
  [low] Naming convention (contracts/Factory.sol:17)

Tool: mythril
  No issues found.
```

## 📁 Project Structure

```
your-project/
├── contracts/              ← Auto-scanned recursively
├── sunya.config.json       ← Your tool config
├── package.json
└── node_modules/.bin/sunya ← Runs from here
```

## ⚙️ Configuration

### `sunya.config.json`

```json
{
  "contractsDir": "./contracts",           // Directory to scan
  "tools": [                               // Array of analysis tools
    {
      "name": "slither",                   // Display name
      "command": "slither",                // Executable
      "args": [],                          // Base args (files auto-appended)
      "parser": "slither"                  // Output parser
    }
  ],
  "output": {
    "format": "table|json",                // Output style
    "file": "sunya-report.json"            // JSON output file
  }
}
```

**Supported parsers:** `slither`, `mythril`

## 🛠 Development

```bash
git clone https://github.com/yourusername/sunya.git
cd sunya
npm install
npm link  # Use locally
sunya scan --config test/fixtures/config.json
```

### Scripts

```bash
npm run test     # Run tests
npm run build    # Build (if needed)
npm publish      # Publish to npm
```

## 🔌 Available Parsers

| Tool | Parser | Output Format |
|------|--------|---------------|
| Slither | `slither` | Console warnings |
| Mythril | `mythril` | JSON issues |
| [Add yours] | `custom` | [TBD] |

## 🎯 Example Workflow

```bash
# Fresh Foundry project
forge init my-token
cd my-token

# Install analysis tools (if needed)
npm install -g slither-analyzer
pip install mythril

# Create config
echo '{"contractsDir": "./src", "tools": [{"name": "slither", "command": "slither", "parser": "slither"}]}' > sunya.config.json

# Scan everything
npx sunya scan
```

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/foo-bar`)
3. Add your tool/parser in `src/parsers/`
4. Test with `npm run test`
5. Commit and PR!

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

MIT © Ming Open Web Headquarters

***

**Built with ❤️ for EVM security researchers**  
<!-- [GitHub](https://github.com/13x54n/sunya-landing-page) | [npm](https://www.npmjs.com/package/sunya) -->