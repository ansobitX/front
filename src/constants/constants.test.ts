import {
    PG_TITLE_PREFIX,
    pgRoutes,
    STORAGE_DEFAULT_LIMIT,
} from './';

describe('Constants', () => {
    const expectedRoutesForLoggedInUser = [
        ['page.header.navbar.cloud', '/cloud', 'cloud'],
        ['page.header.navbar.wallets', '/accounts', 'wallets'],
        ['page.header.navbar.trade', '/trading/', 'trade'],
        ['page.header.navbar.history', '/history', 'history'],
        ['page.header.navbar.openOrders', '/orders', 'orders'],
        ['page.header.navbar.settings', '/settings', 'profile'],
    ];

    const expectedRoutesForNotLoggedInUser = [
        ['page.header.navbar.signIn', '/signin', 'signin'],
        ['page.header.signUp', '/signup', 'signup'],
        ['page.header.navbar.trade', '/trading/', 'trade'],
    ];

    it('Rendering correct title prefix', () => {
        expect(PG_TITLE_PREFIX).toBe('OpenDAX');
    });

    it('Rendering correct storage default limit', () => {
        expect(STORAGE_DEFAULT_LIMIT).toBe(50);
    });

    it('Rendering correct correct routes if user is not logged in', () => {
        expect(pgRoutes(false)).toEqual(expectedRoutesForNotLoggedInUser);
    });

    it('Rendering correct correct routes if user is not logged in', () => {
        expect(pgRoutes(true)).toEqual(expectedRoutesForLoggedInUser);
    });
});
