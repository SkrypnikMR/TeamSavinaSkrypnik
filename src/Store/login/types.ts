export type TLoginPayload = {
    name: string;
    value: string | boolean;
}
export type TInitialLogin = {
    login: string;
    password: string;
    success: boolean;
    isLoading: boolean;
}
