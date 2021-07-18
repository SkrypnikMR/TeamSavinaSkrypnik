export type TRegistartionPayload = {
    name: string;
    value: string | boolean;
}
export type TInitialState = {
     login: string;
    password: string;
    confirm: string;
    success: boolean;
    isLoading: boolean;
    error: boolean;
}
