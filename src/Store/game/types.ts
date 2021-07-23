import { setStepHistory } from './actions';

export type TRoom = {
    creatorLogin: string;
    gameType: string;
    id: string;
}
export type TActualRoom = {
    gameType: string;
    creatorLogin: string;
    guestLogin: string;
    startTime: number; 
    id: string;
    stepDoList: []
}

export type TStepOrder = {
    uuid: string;
    gameType: string;
}

export type TStepInStepHistory = {
    login: string;
    step: string;
    time: Date;
    id: string;
}

export type TInitialGame = {
    rooms: TRoom[] | [];
    userLogin: string;
    actualRoom: TActualRoom;
    stepOrder: string;
    stepHistory: TStepInStepHistory[] | [];
    winner: string;
}
