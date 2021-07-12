import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useTranslation } from 'react-i18next';
import Registration from '../Registration';
import Login from '../Login';
import Chat from '../Chat';
import MyAccount from '../MyAccount';
import ModalComponent from '../UI/Modal';
import Component from '../UI/Modal/ModalTestComponent.jsx';
import Header from '../Header';
import { APP_ROUTES } from '/src/constants/reactRoutes';
import { StAppDiv } from './styled';
import ModalInviteUsers from '../UI/Modals/ModalInviteUsers';
import ModalCreateRoom from '../UI/Modals/ModalCreateRoom';

const App = ({ userTheme, userThemeMode }) => {
  const { i18n } = useTranslation();
  return (
    <StAppDiv url={userThemeMode === 'dark' ? userTheme.dark : userTheme.light} lang={i18n.language}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={APP_ROUTES.login} exact component={Login} />
          <Route path={APP_ROUTES.registration} exact component={Registration} />
          <Route path={APP_ROUTES.chat} exact component={Chat} />
          <Route path={APP_ROUTES.account} exact component={MyAccount} />
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

App.propTypes = {
  userTheme: PropTypes.object,
  userThemeMode: PropTypes.string,
};

export default App;
