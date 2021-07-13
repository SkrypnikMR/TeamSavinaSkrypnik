import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { HEADER_CONTROL_BTNS } from 'src/constants/componentsСonsts';
import { APP_ROUTES } from 'src/constants/reactRoutes';
import { StControl } from './styled';
import Button from '../../UI/Button';
import { ROUTS_WITHOUT_MY_ACCOUNT } from '../../../constants/ui';
import { support } from '../../../helpers/support';
import { colorDefault } from '../../UI/baseLayout';

const HeaderControlPanel = ({
    themeMode,
    setValue,
    history,
    location,
    logOut,
    userNotifSettings,
    onlineUsersCount }) => {
    const { i18n } = useTranslation();
    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('lang', e.target.value);
    };
    const handleThemeClick = ({ target }) => {
        support.setSessionStorageItem('themeMode', target.value);
        setValue({ name: 'themeMode', value: target.value });
    };
    const handleLogOutClick = () => {
        logOut();
        history.push(APP_ROUTES.login);
    };
    const handleNotifClick = (e) => {
        setValue({ name: 'settings', value: { notifications: Boolean(e.target.value) } });
        support.setSessionStorageItem('settings', { notifications: Boolean(e.target.value) });
    };
    const handleMyAccountClick = () => history.push(APP_ROUTES.account);
    const getFunctionForButtons = (el) => {
        switch (el.id) {
            case 'theme_btn': return handleThemeClick;
            case 'logOut': return handleLogOutClick;
            case 'account': return handleMyAccountClick;
            case 'notif_btn': return handleNotifClick;
            default: return handleChangeLanguage;
        }
    };
    return (
        <StControl >
            <p>
                {location.pathname === '/chat'
                    ? `${i18n.t('online')}: ${onlineUsersCount === 0 ? 0 : onlineUsersCount - 1}`
                    : null}
            </p>
            {' '}
            {HEADER_CONTROL_BTNS.map((el) => {
                if (el.value === themeMode) return null;
                if (el.id === 'notif_btn' && Boolean(el.value) === userNotifSettings) return null;
                if ((el.rout === '/account' && ROUTS_WITHOUT_MY_ACCOUNT.includes(location.pathname))
                    || el.rout === location.pathname) return null;
                return (
                    <Button
                        id={el.id}
                        content={el.content}
                        key={el.id}
                        color={colorDefault}
                        fontSize='26px'
                        width='40px'
                        borderRadius="0px"
                        value={el.value}
                        bgColor="transparent"
                        onClick={getFunctionForButtons(el)}
                    />
                );
                                    

            })}
            <img src="../../../../public/assets/images/log-out.png"/>
        </StControl>
    );
};

HeaderControlPanel.propTypes = {
    setValue: PropTypes.func,
    themeMode: PropTypes.string,
    history: PropTypes.object,
    location: PropTypes.object,
    logOut: PropTypes.func,
    userNotifSettings: PropTypes.bool,
    onlineUsersCount: PropTypes.number,
};

export default HeaderControlPanel;
