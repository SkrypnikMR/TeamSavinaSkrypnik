import { combineReducers } from 'redux';
import { reducer as registrationReducer } from './registration/reducer';
import { reducer as loginReducer } from './login/reducer';
import { reducer as gameReducer } from './game/reducer';
import { reducer as statisticReducer } from './statistic/reducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
  game: gameReducer,
  statistic: statisticReducer,
});

export default rootReducer;
