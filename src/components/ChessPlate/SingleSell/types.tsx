export interface IDiv {
    width?: string;
    height?: string;
    background?: string;
    cursor?: string;
    id?: number;
    onClick: (e:any) => void;
}
type checker = {
    blackChecker: boolean | null;
}
export type TSingleSell = {
    id: number;
    status: { checker: boolean | null | checker, blackSquare: boolean };
    getPosibleStep: (arg: string) => void;
    doCheckerStep: (arg: number) => void;
    position: boolean | null;
}
