export function getPathStringTimestamp(): string {
    const now = new Date();
    return now.toISOString().replace(/[:.]/g, '-').replace('T', '-').split('Z')[0];
}
