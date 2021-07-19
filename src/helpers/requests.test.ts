import 'regenerator-runtime';
import { getRequest, postRequest } from './requests';
import { routes } from '../constants/routes';

const { baseUrl } = routes;

describe('requests', () => {
    describe('getRequest', () => {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const getAnswer = { helloText: 'hi from jsonPlaceHolder' };
        beforeEach(() => {
            global.fetch = jest.fn().mockResolvedValue({ json: jest.fn().mockReturnValue(getAnswer) });
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
        it('should call fetch , and answer json with optional header', async () => {
            const optionalHeader = { Authorization: 'someToken' };
            const options = {
                method: 'GET',
                headers: { Authorization: 'someToken' },
            };
            await getRequest(url, optionalHeader);
            expect(global.fetch).toHaveBeenCalledWith(`${baseUrl}${url}`, options);
        });
        it('should call fetch , and answer json without optional header', async () => {
            await getRequest(url);
            expect(global.fetch).toHaveBeenCalledWith(`${baseUrl}${url}`, { headers: {}, method: 'GET' });
            global.fetch().then(answer => expect(answer.json).toHaveBeenCalled());
        });
        it('should return asnwer', async () => {
            const result = await getRequest(url);
            expect(result).toEqual(getAnswer);
        });
    });
    describe('postRequest', () => {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const postAnswer = { message: 'accept' };
        const testBody = { login: 'Max', password: 'Skrip' };
        beforeEach(() => {
            global.fetch = jest.fn().mockResolvedValue({ json: jest.fn().mockReturnValue(postAnswer) });
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
        it('should call fetch , and answer json with optional header', async () => {
            const optionalHeader = { Authorization: 'someToken' };
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: 'someToken' },
                body: JSON.stringify(testBody),
            };
            await postRequest(url, testBody, optionalHeader);
            expect(global.fetch).toHaveBeenCalledWith(`${baseUrl}${url}`, options);
        });
        it('should call fetch , and answer json without optional header', async () => {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(testBody),
            };
            return postRequest(url, testBody).then(() => {
                expect(global.fetch).toHaveBeenCalledWith(`${baseUrl}${url}`, options);
                global.fetch().then(answer => expect(answer.json).toHaveBeenCalled());
            });
        });
        it('should return asnwer', async () => {
            const result = await postRequest(url);
            expect(result).toEqual(postAnswer);
        });
    });
});
