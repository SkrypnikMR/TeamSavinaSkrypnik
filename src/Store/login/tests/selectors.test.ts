import * as selectors from '../selectors';

describe('login selectors', () => {
    let state : any;
    beforeEach(() => {
        state = {
            login: {
                login: '',
                password: '',
            },
        };
    });
    describe('selectors.loginStore', () => {
        it('toBe defined', () => {
            expect(selectors.loginStore).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.loginStore).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.loginStore(state)).toEqual(state.login);
        });
    });
    describe('selectors.logValues', () => {
        it('toBe defined', () => {
            expect(selectors.logValues).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.logValues).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.logValues(state)).toEqual({ login: '', password: '' });
        });
    });
});
