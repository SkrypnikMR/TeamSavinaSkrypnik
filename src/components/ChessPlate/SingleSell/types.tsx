export interface IDiv {
    width: string;
    height: string;
    background: string;
    cursor: string;
}

export type TSingleSell = {
    id: number;
    status: { checker: any, blackSquare: any };
    askPosibleStep: (arg: string) => void;
    position: boolean | null;
}
