import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StLogo } from './styled';

const Logo = ({ history, setValue }) => {
    const handleClick = () => {
        const { pathname } = history.location;
        if (pathname === '/' || pathname === '/registration') return history.push('/');
        setValue({ name: 'init', value: true });
        history.push('/chat');
    };
    const { t } = useTranslation();
    return (
        <StLogo onClick={handleClick}>
            {/* <img src="./public/assets/images/logo.png" />
            <h1>{t('logo')}</h1> */}
            <div>LOGO</div>
        </StLogo>
    );
};

Logo.propTypes = {
    history: PropTypes.object,
    setValue: PropTypes.func,
};

export default Logo;
