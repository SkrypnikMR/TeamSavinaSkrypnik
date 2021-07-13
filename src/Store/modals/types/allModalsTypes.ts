import { actionTypes } from '../actionTypes';


export type TStandartModalType = {
    type: string;
    data: any;
    isOpen: boolean;
    modalType?: string;
};

export type TModalState = {
    [key: string]: TStandartModalType,
}

export type TChangeModalVis = {
    type: typeof actionTypes.CHANGE_MODAL_VISIBILITY,
    payload: {
            data: any;
            isOpen: boolean;
            modalType: string;
    }
}
