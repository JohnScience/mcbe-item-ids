import * as cheerio from "cheerio";

export function parseItemIds(html: string): Map<string, number> {
    const $ = cheerio.load(html);
    const itemIds = new Map<string, number>();

    const tables = $('table');
    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const body = $(table).find('tbody');
        const rows = body.find('tr');

        for (const row of rows) {
            const name = $(row).find('td').first().text().trim();
            const id = $(row).find('td').eq(1).text().trim();
            itemIds.set(name, Number(id));
        }
    }

    return itemIds;
}
