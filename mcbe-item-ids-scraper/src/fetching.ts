import packageJson from "../package.json";

const ITEM_IDS_URL: string = "https://learn.microsoft.com/en-us/minecraft/creator/reference/content/vanillalistingsreference/items?view=minecraft-bedrock-stable";

export async function fetchHtml(url?: string, headers?: Record<string, string>): Promise<string> {
    url = url || ITEM_IDS_URL;
    headers = headers || {
        "user-agent": `${packageJson.name}/${packageJson.version} (+${packageJson.repository.url})`,
        "accept": "text/html,application/xhtml+xml",
    };
    const response = await fetch(url, {
        headers,
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    return await response.text();
}
