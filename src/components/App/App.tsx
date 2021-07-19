import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useTranslation } from 'react-i18next';

import { APP_ROUTES } from '../../constants/reactRoutes';
import Registration from '../Registration/Registration';
import Login from '../Login';
import MainPage from '../MainPage';
import StatisticPage from '../StatisticPage';
import { useTheme } from '../Hook/useTheme';

import { StAppDiv } from './styled';

const App = () => {
  const { i18n } = useTranslation();
  const { colors, theme } = useTheme();
  return (
    <StAppDiv lang={i18n.language} colors={colors} theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path={APP_ROUTES.login} exact component={Login} />
          <Route path={APP_ROUTES.registration} exact component={Registration} />
          <Route path={APP_ROUTES.mainPage} exact component={MainPage} />
          <Route path={APP_ROUTES.statistics} exact component={StatisticPage} />
        </Switch>
      </BrowserRouter>
      <NotificationContainer />
    </StAppDiv >
  );
};

export default App;
