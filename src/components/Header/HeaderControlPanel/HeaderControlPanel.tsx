import React from 'react';
import { useTranslation } from 'react-i18next';
import { HEADER_CONTROL_BTNS } from 'src/constants/componentsСonsts';
import { APP_ROUTES } from 'src/constants/reactRoutes';
import { StControl } from './styled';
import Button from '../../UI/Button';
import { support } from '../../../helpers/support';
import { colorDefault } from '../../UI/baseLayout';

const HeaderControlPanel = ({
    history,
    location }) => {
    const { i18n } = useTranslation();
    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('lang', e.target.value);
    };
    const handleThemeClick = ({ target }) => {
        support.setSessionStorageItem('themeMode', target.value);
    };
    const handleLogOutClick = () => {
        history.push(APP_ROUTES.login);
    };
    const handleNotifClick = (e) => {
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
            {' '}
            {HEADER_CONTROL_BTNS.map((el) => {
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


export default HeaderControlPanel;
