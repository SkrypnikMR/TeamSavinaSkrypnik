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
    NotificationManager.error(parsedBody, i18next.t('game_error'), 3000);
  },
  subGame: (message) => {
    const parsedBody = JSON.parse(message.body);
    if (parsedBody.step) {
      const stepHistory = JSON.parse(localStorage.getItem('stepHistory'));
      if (stepHistory && stepHistory.length < 1) {
        stepHistory.push({ ...parsedBody, stepCount: 0 });
        localStorage.setItem('stepHistory', JSON.stringify(stepHistory));
        store.dispatch(setStepHistory(stepHistory));
        return 1;
      }
      if (stepHistory && stepHistory.length >= 1) {
        const lastCount = stepHistory[stepHistory.length - 1].stepCount;
        const newHistory = [...stepHistory, { ...parsedBody, stepCount: lastCount + 1 }];
        localStorage.setItem('stepHistory', JSON.stringify(newHistory));
        store.dispatch(setStepHistory(newHistory));
      }
    }
    if (parsedBody.winner) {
      store.dispatch(setWinner(parsedBody.winner));
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


  /*   else {
      store.dispatch(setActualRoom(parsedBody));
      store.dispatch(getStepOrder({ uuid: parsedBody.id, gameType: parsedBody.gameType }));
      store.dispatch(setWinner(''));
      localStorage.setItem('actualRoom', message.body);
      localStorage.setItem('stepHistory', JSON.stringify([]));
      return 1;
    }
    if (message.body.charAt(0) === '[') {
      return 2;
    }
      if (message.body === 'Bot') {
        store.dispatch(askBotStep());
      }
      store.dispatch(setStepOrder(message.body));
  }, */
