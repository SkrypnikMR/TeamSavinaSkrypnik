import { ITheme } from '../App/types';

export interface IDiv extends ITheme{
    background: string;
    color: string;
    margin: string;
    textAlign: string;
    padding: string;
    maxHeight: string;
}

export type TGZ = {
    gameType: string;
}
