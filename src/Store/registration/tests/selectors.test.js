import * as selectors from '../selectors';

describe('registration selectors', () => {
    let state;
    beforeEach(() => {
        state = {
            registration: {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
            },
        };
    });
    describe('selectors.registrationStore', () => {
        it('toBe defined', () => {
            expect(selectors.registrationStore).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.registrationStore).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.registrationStore(state)).toEqual(state.registration);
        });
    });
});
