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

export type TInitialGame = {
    rooms: TRoom[] | [];
    userLogin: string;
    actualRoom: TActualRoom;
}
