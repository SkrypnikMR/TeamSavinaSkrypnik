import * as selectors from '../selectors';

describe('login selectors', () => {
    let state : any;
    beforeEach(() => {
        state = {
            login: {
                login: '',
                password: '',
            },
            game: {
                rooms: [],
                userLogin: '',
            },
        };
    });
    describe('selectors.gameStore', () => {
        it('toBe defined', () => {
            expect(selectors.gameStore).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.gameStore).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.gameStore(state)).toEqual(state.game);
        });
    });
    describe('selectors.getRooms', () => {
        it('toBe defined', () => {
            expect(selectors.getRooms).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.getRooms).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.getRooms(state)).toEqual(state.game.rooms);
        });
    });
    describe('selectors.getUserLogin', () => {
        it('toBe defined', () => {
            expect(selectors.getUserLogin).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.getUserLogin).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.getUserLogin(state)).toEqual(state.game.userLogin);
        });
    });
});
