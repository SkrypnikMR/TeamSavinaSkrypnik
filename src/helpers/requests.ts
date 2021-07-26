import { routes } from '../constants/routes';
import { TUrl, TBody, THeaders } from './types/requestTypes';

const { baseUrl } = routes;

export const getRequest = async (url: TUrl) => {
  const options = { method: 'GET' };
  const answer = await fetch(`${baseUrl}${url}`, options);
  return answer;
};

export const postRequest = async (url : TUrl, body : TBody, headers : THeaders) : Promise<Response> => {
      const options = {
              method: 'POST',
              body: JSON.stringify(body),
              headers: { 'Content-Type': 'application/json' },
      };
  if (headers) options.headers = Object.assign(options.headers, headers);
  const answer = await fetch(`${baseUrl}${url}`, options);
  return answer;
};
