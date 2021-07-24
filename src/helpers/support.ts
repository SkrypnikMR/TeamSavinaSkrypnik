import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { store } from '../index';
import { 
  gameEvent,
  doBotStepTic,
} from '../store/game/actions';

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
    if (parsedBody === 'Not your turn Bot') return 1;
    NotificationManager.error(parsedBody, i18next.t('game_error'), 3000);
  },
  subGame: message => store.dispatch(gameEvent(message.body)),
  subBot: message => store.dispatch(doBotStepTic(message.body)), 
};
