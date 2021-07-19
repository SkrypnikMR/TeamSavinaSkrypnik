import { colors } from '../UI/baseLayout';

export interface ITheme {
    theme: 'dark' | 'light';
    colors: typeof colors;
}

export interface IDiv extends ITheme {
    minHeight: string;
    background: string;
    backgroundSize: string;
    direction: string;
}
