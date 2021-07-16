import React from 'react';

import { ITheme } from '../App/types';

export interface IDiv extends ITheme{
    display: string;
    justifyContent: string;
    alignItems: string;
    background: string;
    height: string;
}
