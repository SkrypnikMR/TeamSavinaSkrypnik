import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { NavLink, Redirect } from 'react-router-dom';

import { logInputs } from '../../constants/componentsСonsts';
import { APP_ROUTES } from '../../constants/reactRoutes';
import Form from '../UI/Form';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useTheme } from '../Hook/useTheme';

import { StLoginDiv } from './styled';

const Login = ({ sendLoginRequest, setLoginValue, fields, setValue }) => {
  const { t } = useTranslation();

  if (fields.success) {
    setValue({ name: 'success', value: false });
    return <Redirect to={APP_ROUTES.mainPage} />;
  }
  const { colors, theme } = useTheme();

  return (
    <StLoginDiv colors={colors} theme={theme}>
      <img src="../../../public/assets/images/game-development.png"/>
      <Form>
        <p>{t('authorization')}</p>
        {logInputs.map((input) => (
          <Input
            width="80%"
            id={input.id}
            height="100px"
            key={input.id}
            name={input.id}
            inputHeight="50px"
            borderRadius="5px"
            label={t(input.label)}
            value={fields[input.id]}
            onChange={setLoginValue}
            placeholder={t(input.placeholder)}
          />
        ))}
        <Button
          height="50px"
          content="login_btn"
          id="login"
          onClick={sendLoginRequest}
          focusColor="black"
        />
        <span>
          {t('login_span_text')}
          <NavLink to={APP_ROUTES.registration}>{t('login_link_text')}</NavLink>
        </span>
      </Form>
    </StLoginDiv>
  ); 
};

Login.propTypes = {
  sendLoginRequest: PropTypes.func.isRequired,
  setLoginValue: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
};

export default Login;
