import { Command } from "commander";

import packageJson from "../package.json";
import { defaultOutputPath } from "./defaults";

export type Options = {
    output: string;
    saveHtml?: boolean;
};

export function parseOptions(): Options {
    const program = new Command();

    program
        .name(packageJson.name)
        .description(packageJson.description)
        .version(packageJson.version)
        .option('-o, --output <path>', 'Specify the output file path', defaultOutputPath())
        .option('--save-html', 'Save the fetched HTML to assets/<timestamp>.html (for hisitory/debuggin)', false);

    program.parse();

    const options = program.opts<Options>();

    return options;
}