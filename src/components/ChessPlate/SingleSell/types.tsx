export interface IDiv {
    width: string;
    height: string;
    background: string;
    cursor: string;
    id: number;
}

export type TSingleSell = {
    id: number;
    status: { checker: any, blackSquare: any };
    getPosibleStep: (arg: string) => void;
    doCheckerStep: (arg: number) => void;
    position: boolean | null;
}
