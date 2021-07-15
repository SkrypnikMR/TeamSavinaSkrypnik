import { combineReducers } from 'redux';
import { reducer as registrationReducer } from './registration/reducer';
import { reducer as loginReducer } from './login/reducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
});


export default rootReducer;
