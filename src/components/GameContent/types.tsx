import { ITheme } from '../App/types';

export interface IDiv extends ITheme{
    background: string;
    margin: string;
    width: string;
    padding: string;
}

export type TGameContent = {
    winner? : string;
    cleanOldGame: () => void;
}
