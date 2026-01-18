import { itemIds } from '../src/index';

describe('mcbe-item-ids', () => {
    test('itemIds should be an object', () => {
        expect(typeof itemIds).toBe('object');
        expect(itemIds).not.toBeNull();
    });

    test('itemIds should not be empty', () => {
        const keys = Object.keys(itemIds);
        expect(keys.length).toBeGreaterThan(0);
    });

    test('all item IDs should be numbers', () => {
        const values = Object.values(itemIds);
        values.forEach((value) => {
            expect(typeof value).toBe('number');
        });
    });

    test('all item names should be strings', () => {
        const keys = Object.keys(itemIds);
        keys.forEach((key) => {
            expect(typeof key).toBe('string');
            expect(key.length).toBeGreaterThan(0);
        });
    });

    test('none of the item name have minecraft: prefix', () => {
        const keys = Object.keys(itemIds);
        keys.forEach((key) => {
            expect(key.startsWith('minecraft:')).toBe(false);
        });
    });

    describe('README examples', () => {
        test('can get numeric ID for a specific item', () => {
            const appleId = itemIds.apple;
            expect(typeof appleId).toBe('number');
        });

        test('can check if a specific item exists', () => {
            const hasApple = 'apple' in itemIds;
            expect(hasApple).toBe(true);
        });

        test('can get all item names', () => {
            const allItemNames = Object.keys(itemIds);
            expect(Array.isArray(allItemNames)).toBe(true);
            expect(allItemNames.length).toBeGreaterThan(0);
        });

        test('can filter items by prefix', () => {
            const acaciaItems = Object.keys(itemIds).filter(name => name.startsWith('acacia_'));
            expect(Array.isArray(acaciaItems)).toBe(true);
            expect(acaciaItems.length).toBeGreaterThan(0);
            acaciaItems.forEach(item => {
                expect(item.startsWith('acacia_')).toBe(true);
            });
        });

        test('can get total count of items', () => {
            const totalItems = Object.keys(itemIds).length;
            expect(typeof totalItems).toBe('number');
            expect(totalItems).toBeGreaterThan(0);
        });
    });
});
