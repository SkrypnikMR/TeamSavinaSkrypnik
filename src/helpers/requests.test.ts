import 'regenerator-runtime';
import { getRequest, postRequest } from './requests';

describe('requests', () => {
    describe('getRequest', () => {
        const url = 'http://localhost:8080/testUrl';
        const answer = { status: 200, ok: true, text: jest.fn().mockReturnValue('someText') };
        beforeEach(() => {
            global.fetch = jest.fn().mockResolvedValue(answer);
        });
        afterEach(() => {
            delete global.fetch;
        });
        it('should be defined', async () => {
            expect(getRequest).toBeDefined();
        });
        it('should be function', async () => {
            expect(typeof getRequest).toBe('function');
        });
        it('should return answer', async () => {
            expect(await getRequest(url)).toEqual(answer);
        });
    });
    describe('postRequest', () => {
        const url = 'http://localhost:8080/testUrl';
        const answer = { status: 200, ok: true, text: jest.fn().mockReturnValue('someText') };
        beforeEach(() => {
            global.fetch = jest.fn().mockResolvedValue(answer);
        });
        afterEach(() => {
            delete global.fetch;
        });
        it('should be defined', async () => {
            expect(postRequest).toBeDefined();
        });
        it('should be function', async () => {
            expect(typeof postRequest).toBe('function');
        });
        it('should return answer', async () => {
            const body = { login: 'someLogin', password: 'somePassword' };
            expect(await postRequest(url, body)).toEqual(answer);
        });
    });
});
