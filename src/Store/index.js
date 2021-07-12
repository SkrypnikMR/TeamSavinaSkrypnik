import { combineReducers } from 'redux';
import { reducer as registrationReducer } from './registration/reducer';
import { reducer as loginReducer } from './login/reducer';
import { reducer as userReducer } from './user/reducer';
import { reducer as modalReducer } from './modals/reducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
  user: userReducer,
  modals: modalReducer,
});


export default rootReducer;
