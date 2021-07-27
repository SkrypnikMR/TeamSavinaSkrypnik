import React from 'react';
import configureStore from 'redux-mock-store';
import StatisticPage from '../StatisticPage';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';

jest.mock('../../../index', () => ({ store: {} }));

const mockStore = configureStore();
const store = mockStore({
  game: {
        rooms: [],
        fullStatistic: [],
  },
});

describe('StatisticPage', () => {
    const props = {
        fullStatistic: [],
        userLogin: 'userLogin',
        getFullStat: jest.fn(),
    };
    it('Should match snapshot', () => {
        const component = shallowSmart(<StatisticPage {...props} />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StSingleRoom', () => {
        const component = mountSmart(<StatisticPage {...props}/>, store);
        expect(component.find('styled__StStatisticPage')).toHaveLength(1);
    });
    it('should render Header', () => {
        const component = mountSmart(<StatisticPage {...props}/>, store);
        expect(component.find('Header')).toHaveLength(1);
    });
    it('should render Footer', () => {
        const component = mountSmart(<StatisticPage {...props}/>, store);
        expect(component.find('Footer')).toHaveLength(1);
    });
    it('should render StatisticCard', () => {
        props.fullStatistic = [
            {
                uuidGame: '21312321321321',
                draw: false,
                winnerLogin: 'userLogin',
                gameType: 'Chekers',
                userLogin: 'userLogin',
                creatorLogin: 'userLogin',
                guestLogin: 'Bot',
                startTime: 123213213213213,
                finishTime: 12312312321321,
            },
        ];
        const component = mountSmart(<StatisticPage {...props}/>, store);
        expect(component.find('StatisticCard')).toHaveLength(1);
    });
});
