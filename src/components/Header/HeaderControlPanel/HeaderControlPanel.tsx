import React, { useState } from 'react';
import { RouterProps } from 'react-router';
import { useTranslation } from 'react-i18next';
import ModalCustom from '../../ModalCustom';
import ModalLogout from '../../ModalLogout';
import { APP_ROUTES } from '../../../constants/reactRoutes';
import { HEADER_CONTROL_BTNS } from '../../../constants/componentsСonsts';
import { useTheme } from '../../Hook/useTheme';
import Button from '../../UI/Button';
import { colorDefault, LOGOUTICON } from '../../UI/baseLayout';

import { StControl } from './styled';

const HeaderControlPanel = ({ history, actualRoomId }: RouterProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { i18n, t } = useTranslation();
    const handleModalClick = () => setIsOpen((prev) => !prev);
    const { changeTheme } = useTheme();
    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('lang', e.target.value);
    };
    const handleThemeClick = () => {
        changeTheme();
    };
    const handleLogOutClick = () => {
        if (actualRoomId) return handleModalClick(); 
        history.push(APP_ROUTES.login);
        localStorage.clear();
    };
    const getFunctionForButtons = (el:any) => {
        switch (el.id) {
            case 'theme_btn': return handleThemeClick;
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
            <img src={LOGOUTICON} onClick={handleLogOutClick}/>
            {isOpen && (
                        <ModalCustom
                            header={t('go_out')}
                            content={<ModalLogout handlecloseModal={handleModalClick} />}
                            handlecloseModal={handleModalClick}
                        />
)}
        </StControl>
    );
};

export default HeaderControlPanel;
