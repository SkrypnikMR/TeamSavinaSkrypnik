import React from 'react';

export interface IDiv {
    background: string;
    width: string;
    height: string;
    display: string;
    flexWrap: string;
    flexDirection: string;
    color:string;
    margin: string;
}
export type TCheckers = {
    id: number;
    key: number;
    isChecked: boolean | null;
    color: string | null;
    onClick: (e: React.MouseEvent) => void;
}
