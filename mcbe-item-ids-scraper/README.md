# mcbe-item-ids-scraper

A TypeScript CLI tool to scrape and extract Minecraft Bedrock Edition item IDs from the official Microsoft documentation.

## Project Structure

```
mcbe-item-ids-scraper/
├── src/
│   ├── index.ts          # Main entry point
│   ├── cli.ts            # CLI configuration and options
│   ├── fetching.ts       # HTML fetching logic
│   ├── parsing.ts        # HTML parsing and item ID extraction
│   ├── defaults.ts       # Default configuration values
│   └── util.ts           # Utility functions
├── assets/               # Saved HTML files (when using --save-html)
├── output/               # Generated JSON output files
├── dist/                 # Compiled JavaScript (after build)
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Installation

```bash
npm install
```

## Build

```bash
npm run build
```

## Usage

### Development Mode

Run the scraper using ts-node:

```bash
npm run dev
```

### Production Mode

After building, run the compiled JavaScript:

```bash
npm start
```

Or run directly:

```bash
node dist/index.js
```

### Command Line Options

#### Specify Output Path

Use the `-o` or `--output` flag to specify a custom output file path:

```bash
npm run dev -- --output ./data/items.json
```

```bash
node dist/index.js -o custom-output.json
```

#### Display Help

Show available options:

```bash
npm run dev -- --help
```

```bash
node dist/index.js --help
```

#### Display Version

Show the current version:

```bash
npm run dev -- --version
```

```bash
node dist/index.js -V
```

## Default Behavior

If no output path is specified, the scraped data will be saved to:

```
output/mcbe-item-ids.json
```

## Output Format

The tool generates a JSON file with item names as keys and their IDs as values:

```json
{
  "minecraft:stone": 1,
  "minecraft:grass": 2,
  "minecraft:dirt": 3
}
```

## Output Example

For the latest output example, see [output/latest.json](./output/latest.json).

## Repository

[https://github.com/JohnScience/mcbe-item-ids-scraper](https://github.com/JohnScience/mcbe-item-ids-scraper)

## License

ISC
