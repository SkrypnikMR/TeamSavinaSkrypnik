import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { store } from '../index';
import { 
  setActualRoom, 
  getStepOrder, 
  setStepOrder, 
  setStepHistory, 
  setWinner,
  askBotStep,
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
  subGame: (message) => {
    const parsedBody = JSON.parse(message.body);
    if (parsedBody.winner) {
      store.dispatch(setWinner(parsedBody.winner));
      return 1;
    }
    if (parsedBody.field) {
        localStorage.setItem('stepHistory', JSON.stringify(parsedBody.field));
        store.dispatch(setStepHistory(parsedBody.field));
      return 1;
    }
    if (parsedBody.stepDtoList) {
      store.dispatch(setActualRoom(parsedBody));
      store.dispatch(getStepOrder({ uuid: parsedBody.id, gameType: parsedBody.gameType }));
      store.dispatch(setWinner(''));
      localStorage.setItem('actualRoom', message.body);
      localStorage.setItem('stepHistory', JSON.stringify([]));
      return 1;
    }
    if (parsedBody.stepOrderLogin) {
      if (parsedBody.stepOrderLogin === 'Bot')store.dispatch(askBotStep());
      store.dispatch(setStepOrder(parsedBody.stepOrderLogin));
    }
  },
  subBot: (message) => {
    store.dispatch(doBotStepTic(message.body));
  }, 
};
