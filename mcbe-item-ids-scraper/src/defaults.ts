import { join } from "path";
import { getPathStringTimestamp } from "./util";

export function defaultOutputPath(): string {
    const timestamp = getPathStringTimestamp();
    return join(__dirname, '..', 'output', `mcbe-item-ids-${timestamp}.json`);
}

export function defaultSaveHtmlPath(): string {
    const timestamp = getPathStringTimestamp();
    return join(__dirname, '..', 'assets', `${timestamp}.html`);
}