import * as selectors from '../selectors';

describe('login selectors', () => {
    let state;
    beforeEach(() => {
        state = {
            login: {
                emailLog: '',
                passwordLog: '',
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
});
