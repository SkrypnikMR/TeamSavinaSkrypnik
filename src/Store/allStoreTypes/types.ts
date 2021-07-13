import { TInitialState as TRegistration } from '../registration/types/allTypes';
import { IState as TLogin } from '../login/types/allTypes';

export type TStore = {
    registration: TRegistration,
    login: TLogin
}
