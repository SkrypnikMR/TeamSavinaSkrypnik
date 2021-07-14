export type TUrl = string;
type TRegBody = { login: string, password: string, confirm: string };
type TLoginBody = { login: string, password: string, confirm: string };
export type TBody = TLoginBody | TRegBody;
