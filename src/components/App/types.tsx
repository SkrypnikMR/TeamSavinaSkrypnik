import { colors } from '../UI/baseLayout';

export interface ITheme {
    theme: 'dark' | 'light';
    colors: typeof colors;
    lang: 'ru' | 'en';
}

export interface IDiv extends ITheme {
    minHeight: string;
    background: string;
    backgroundSize: string;
    direction: string;
    lang: string;
    theme: 'dark' | 'light';
    colors: typeof colors;
}
