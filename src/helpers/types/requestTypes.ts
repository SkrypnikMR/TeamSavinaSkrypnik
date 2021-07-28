type TRegBody = { login: string, password: string};
type TLoginBody = { login: string, password: string };
export type TUrl = string;
export type THeaders = { Authorization: string };
export type TBody = TRegBody | TLoginBody;
