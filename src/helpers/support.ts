import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import moment from 'moment';
import { store } from '../index';
import { 
  gameEvent,
  doBotStepTic,
  putPossibleSteps,
} from '../store/game/actions';
import { BOT_CHECKERS, BOT_TIC } from '../constants/simpleConstants';

export const support = {
    setTokenInCookie: (payload: string, age: number = 3600 * 8) => {
    document.cookie = `token=${payload}; path=/; max-age=${age}`;
  },
  getTokenFromCookie: (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  },
  deleteTokenFromCookie: (name: string) => {
    support.setTokenInCookie(name, -1);
  },
  errorCatcher: ({ body }) => {
    const { body: parsedBody } = JSON.parse(body);
    if (parsedBody.includes('Game with')) return;
    switch (parsedBody) {
      case BOT_TIC: return 1;
      case BOT_CHECKERS: return 1;
      case 'Invalid step Bot1': return 1;
      case 'Invalid step Bot2': return 1;
      case 'Invalid step Bot3': return 1;
      case 'Invalid step {}': return 1;
      case 'Permission denied': return 1;
      default: NotificationManager.error(parsedBody, i18next.t('game_error'), 3000);
    }
  },
  subGame: (message) => store.dispatch(gameEvent(message.body)),
  subBot: (message) => store.dispatch(doBotStepTic(message.body)),
  getPrettyDate: (timestamp: number) => moment(timestamp).format('L h:mm:ss'),
  possibleStep: ({ body }) => store.dispatch(putPossibleSteps(JSON.parse(body))),
};
