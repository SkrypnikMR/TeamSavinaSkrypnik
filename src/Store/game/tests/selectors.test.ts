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
                userLogin: 'kek',
                actualRoom: {
                    id: '123721378213',
                    gameType: 'Chekers',
                    creatorLogin: 'Ya',
                    guestLogin: 'YOU',
                },
                stepOrder: 'YOU',
                winner: '',
                stepHistory: [],
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
    describe('selectors.getActualRoom ', () => {
        it('toBe defined', () => {
            expect(selectors.getActualRoom).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.getActualRoom).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.getActualRoom(state)).toEqual(state.game.actualRoom);
        });
    });
    describe('selectors.getActualRoomGameType', () => {
        it('toBe defined', () => {
            expect(selectors.getActualRoomGameType).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.getActualRoomGameType).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.getActualRoomGameType(state)).toEqual(state.game.actualRoom.gameType);
        });
    });
    describe('selectors.getStepOrder', () => {
        it('toBe defined', () => {
            expect(selectors.getStepOrderSelector).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.getStepOrderSelector).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.getStepOrderSelector(state)).toEqual(state.game.stepOrder);
        });
    });
    describe('selectors.getWinner', () => {
        it('toBe defined', () => {
            expect(selectors.getWinner).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.getWinner).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.getWinner(state)).toEqual(state.game.winner);
        });
    });
    describe('selectors.getTicStatus', () => {
        it('toBe defined', () => {
            expect(selectors.getTicStatus).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.getTicStatus).toBe('function');
        });
        it('should return expectedObj', () => {
            const expectedObj = { someField: 'field' };
            state.game.stepHistory = [expectedObj];
            expect(selectors.getTicStatus(state, 0)).toEqual(expectedObj);
        });
    });
});
