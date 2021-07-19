export type TUrl = string;
type TRegBody = { login: string, password: string};
type TLoginBody = { login: string, password: string };
export type TBody = TRegBody | TLoginBody;
