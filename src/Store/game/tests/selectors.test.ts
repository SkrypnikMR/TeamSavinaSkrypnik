import * as selectors from '../selectors';

jest.mock('i18next', () => ({
    t: jest.fn().mockImplementation((arg) => {
        if (arg === 'winner') return 'winner';
        if (arg === 'draw') return 'DRAW';
        if (arg === 'loser') return 'loser';
}) }));

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
                pissibleSteps: [],
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
        it('should return winner === login', () => {
            state.game.userLogin = 'Maxim';
            state.game.winner = 'Maxim';
            expect(selectors.getWinner(state)).toBe('winner');
        });
        it('should return DRAW', () => {
            state.game.userLogin = 'Maxim';
            state.game.winner = 'draw';
            expect(selectors.getWinner(state)).toBe('DRAW');
        });
        it('should return loser', () => {
            state.game.userLogin = 'Maxim';
            state.game.winner = 'neMaxim';
            expect(selectors.getWinner(state)).toBe('loser');
        });
        it('should return "" ', () => {
            state.game.userLogin = 'Maxim';
            state.game.winner = '';
            expect(selectors.getWinner(state)).toBe('');
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
    describe('selectors.getActualRoomId ', () => {
        it('toBe defined', () => {
            expect(selectors.getActualRoomId).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.getActualRoomId).toBe('function');
        });
        it('should return expectedID', () => {
            const expectedId = '123721378213';
            expect(selectors.getActualRoomId(state)).toEqual(expectedId);
        });
    });
    describe('selectors.getPossibleSteps  ', () => {
        it('toBe defined', () => {
            expect(selectors.getPossibleSteps).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.getPossibleSteps).toBe('function');
        });
        it('should return expectedID', () => {
            expect(selectors.getPossibleSteps(state)).toEqual(state.game.possibleSteps);
        });
    });
    describe('selectors.getPossibleStepPosition', () => {
        it('toBe defined', () => {
            expect(selectors.getPossibleStepPosition).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.getPossibleStepPosition).toBe('function');
        });
        it('should return null', () => {
            state.game.possibleSteps = [{ stepIndex: 2 }];
            const id = 1;
            expect(selectors.getPossibleStepPosition(state, id)).toEqual(null);
        });
        it('should return true', () => {
            state.game.possibleSteps = [{ stepIndex: 1 }];
            const id = 1;
            expect(selectors.getPossibleStepPosition(state, id)).toEqual(true);
        });
    });
});
