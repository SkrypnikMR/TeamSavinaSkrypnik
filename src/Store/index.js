import { combineReducers } from 'redux';
import { reducer as chatReducer } from './chat/reducer';
import { reducer as registrationReducer } from './registration/reducer';
import { reducer as loginReducer } from './login/reducer';
import { reducer as userReducer } from './user/reducer';
import { reducer as modalReducer } from './modals/reducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  registration: registrationReducer,
  login: loginReducer,
  user: userReducer,
  modals: modalReducer,
});


export default rootReducer;
