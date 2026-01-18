# mcbe-item-ids-packgen

A TypeScript CLI tool to generate a package exporting item ids for Minecraft Bedrock Edition.

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

Run the pack generator using ts-node:

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

## Project Structure

```
mcbe-item-ids-packgen/
├── src/
│   └── index.ts          # Main entry point
├── dist/                 # Compiled JavaScript (after build)
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```
