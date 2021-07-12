import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useTranslation } from 'react-i18next';
import { APP_ROUTES } from '../../constants/reactRoutes';
import Registration from '../Registration';
import Login from '../Login';
import ModalComponent from '../UI/Modal';
import Component from '../UI/Modal/ModalTestComponent.jsx';
import Header from '../Header';
import { StAppDiv } from './styled';
import ModalInviteUsers from '../UI/Modals/ModalInviteUsers';
import ModalCreateRoom from '../UI/Modals/ModalCreateRoom';

const App = () => {
  const { i18n } = useTranslation();
  return (
    <StAppDiv lang={i18n.language}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={APP_ROUTES.login} exact component={Login} />
          <Route path={APP_ROUTES.registration} exact component={Registration} />
        </Switch>
      </BrowserRouter>
      <ModalComponent
        Component={Component}
        headerTextKey="notification_settings"
      />
      <ModalCreateRoom />
      <ModalInviteUsers />
      <NotificationContainer />
    </StAppDiv >
  );
};

export default App;
