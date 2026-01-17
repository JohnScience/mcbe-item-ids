import { writeFile, mkdir } from "fs/promises";
import { dirname } from "path";

import { fetchHtml } from "./fetching";
import { parseItemIds } from "./parsing";
import * as cli from "./cli";
import { defaultSaveHtmlPath } from "./defaults";

async function main() {
    const o: cli.Options = cli.parseOptions();

    console.log('Application started');
    const html: string = await fetchHtml();
    console.log('Fetched HTML length:', html.length);

    // Save HTML if requested
    if (o.saveHtml) {
        const htmlPath = defaultSaveHtmlPath();
        const assetsDir = dirname(htmlPath);
        await mkdir(assetsDir, { recursive: true });
        await writeFile(htmlPath, html, 'utf-8');
        console.log(`HTML saved to: ${htmlPath}`);
    }

    console.log('Processing HTML...\n');
    const itemIds = parseItemIds(html);
    console.log(`Parsed ${itemIds.size} item IDs.`);

    // Ensure output directory exists
    const outputDir = dirname(o.output);
    await mkdir(outputDir, { recursive: true });

    await writeFile(o.output, JSON.stringify(Object.fromEntries(itemIds), null, 2), 'utf-8');
    console.log(`Output saved to: ${o.output}`);
}

main().catch((error) => {
    console.error('Error in main:', error);
    process.exit(1);
});
