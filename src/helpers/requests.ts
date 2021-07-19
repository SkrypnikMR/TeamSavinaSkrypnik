import { routes } from '../constants/routes';
import { TUrl, TBody } from './types/requestTypes';

const { baseUrl } = routes;

export const getRequest = async (url: TUrl) => {
  const options = { method: 'GET' };
  const answer = await fetch(`${baseUrl}${url}`, options);
  return answer;
};

export const postRequest = async (url : TUrl, body : TBody) : Promise<Response> => {
      const options = {
              method: 'POST',
              body: JSON.stringify(body),
              headers: { 'Content-Type': 'application/json' },
      };
  const answer = await fetch(`${baseUrl}${url}`, options);
  return answer;
};
