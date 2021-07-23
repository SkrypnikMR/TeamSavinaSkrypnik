export type TRoom = {
    creatorLogin: string;
    gameType: string;
    id: string;
}
export type TInitialGame = {
    rooms: TRoom[] | [];
    userLogin: string;
} 
export type TChecker = {
    desk: TCheckers;
}
export type TCheckers = {
    position: number;
    isChecked: boolean | null;
    color: string | null;
}
export type TCurrentChecker = {
    currentChecker: TCheckers;
}