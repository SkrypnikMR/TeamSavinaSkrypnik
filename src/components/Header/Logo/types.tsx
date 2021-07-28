import React from 'react';

import { ITheme } from 'src/components/App/types';

export interface IDiv extends ITheme{
    display: string;
    flexDirection: string;
    justifycontent: string;
    alignItems: string;
    width: string;
    fontFamily: string;
    color: string;
    fontSize: string;
    height: string;
    marginTop: string;
    cursor: string;
}
