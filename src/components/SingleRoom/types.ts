import React from 'react';

export type TSingleRoom = {
    creatorLogin: string;
    gameType: string;
    userLogin: string;
    id: string;
    playWithBot: (arg: string) => void,
    joinRoom: (arg: string) => void
}

export type TDistResult = {
    content: string;
    onClickFunc: (e: React.MouseEvent<Element, MouseEvent>) => void
}
