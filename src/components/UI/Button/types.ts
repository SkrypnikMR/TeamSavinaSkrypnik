import React from 'react';

export interface IStyledButton{
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    cursor?: string;
    bgColor: string;
    borderRadius?: string;
    border?: string;
    outline?: string;
    transition?: string;
    fontSize?: string;
    focusColor?: string;
    bgColorDisabled?: string;
    type: 'submit' | 'reset' | 'button' | undefined;
    isDisabled?: boolean;
    fontWeight?: string;
    bgColorHover?: string;
    position?: string;
    right?:string;
}
export interface IButton {
    id?: string;
    name?: string;
    onClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
    value?: string;
    type?: 'submit' | 'reset' | 'button';
    title?: string;
    borderRadius?: string;
    isDisabled?: boolean;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    bgColor?: string;
    bgColorHover?: string;
    height?: string;
    width?: string;
    padding?: string;
    margin?: string;
    content?: string;
    transition?: string;
    focusColor?: string;
    bgColorDisabled?: string;
    position?: string;
    right?:string;
}
