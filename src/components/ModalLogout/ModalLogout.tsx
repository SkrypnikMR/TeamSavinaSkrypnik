import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../UI/Button';
import { APP_ROUTES } from '../../constants/reactRoutes';
import { StModalButtonBox } from '../ModalCreateRoom/styled';
import { StModalLogout } from './styled';

const ModalLogout = ({ handlecloseModal, history, exitGame }) => {
    const handleOkClick = () => {
        exitGame();
        history.push(APP_ROUTES.login);
        localStorage.clear();
        handlecloseModal();
    };
    const { t } = useTranslation();
    return (
        <StModalLogout>
            <p>{t('if_logout')}</p>
            <StModalButtonBox>
                <Button 
                    content="OK"
                    focusColor="black"
                    onClick={handleOkClick}
                    id="okButton"
                    name="okButton"
                    value="OK"
                    type="button"
                    title="OK"
                />
                <Button
                    content={t('cancel')}
                    focusColor="black"
                    onClick={handlecloseModal}
                    id="CancelButton"
                    name="CancelButton"
                    value="Cancel"
                    type="button"
                    title="Cancel"
                />
            </StModalButtonBox>
        </StModalLogout>
    );
};

export default ModalLogout;
