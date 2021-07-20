import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { regInputs } from 'src/constants/componentsСonsts';
import { APP_ROUTES } from '../../constants/reactRoutes';
import Form from '../UI/Form';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useTheme } from '../Hook/useTheme';

import { StRegDiv } from './styled';

const Registration = ({ sendRegistrationRequest, setRegistrationValue, fields }) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    const { success } = fields;
    if (success) return <Redirect to={APP_ROUTES.login} />;
    const handleOnChange = (data) => {
        const { error } = fields;
        if (error) setRegistrationValue({ name: 'error', value: null });
        setRegistrationValue(data);
    };

    return (
        <StRegDiv colors={colors} theme={theme}>
            <img src="../../../public/assets/images/game-development.png"/>
            <Form>
                <p>{t('registration')}</p>
                {regInputs.map((input) => (
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
                        onChange={handleOnChange}
                        placeholder={t(input.placeholder)}
                    />
                ))}
                <Button
                    height="50px"
                    content="reg_btn"
                    id="registration"
                    onClick={sendRegistrationRequest}
                    focusColor="black"
                    name=""
                    value=""
                    type="button"
                    title=""
                />
                <span>
                    {t('reg_span_text')}
                    <NavLink to={APP_ROUTES.login}>{t('reg_link_text')}</NavLink>
                </span>
            </Form>
        </StRegDiv>
    );
};

Registration.propTypes = {
    sendRegistrationRequest: PropTypes.func.isRequired,
    setRegistrationValue: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
};

export default Registration;
