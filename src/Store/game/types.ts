
export type TRoom = {
    creatorLogin: string;
    gameType: string;
    id: string;
}
export type TInitialGame = {
    rooms: TRoom[] | [];
    userLogin: string;
} 
