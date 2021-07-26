export type TInitialStatistic = {
    fullStatistic: []
}

type TStepDtoListItem = {
    id: string;
    login: string;
    step: string;
    time: number;
}
export type TStatGame = {
    creatorLogin: string;
    draw: boolean;
    finishTime: number;
    guestLogin: string;
    startTime: number;
    stepDtoList: TStepDtoListItem[];
    uuidGame: string;
    winnerLogin: string;
    gameType: string;
}

export type TFullStat = TStatGame[] | []
