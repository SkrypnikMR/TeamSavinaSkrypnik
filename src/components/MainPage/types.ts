import { colors } from '../UI/baseLayout';

export type TMainPage = {
    getSockJSConnection: () => void;
    disconnect: () => void;
}

export type TStyledMainPage = {
    colors: typeof colors;
    theme: 'dark' | 'light';
}
