import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../UI/Button';
import { StModalButtonBox } from '../ModalCreateRoom/styled';
import { StModalDelete } from './styled';

const ModalDelete = ({ handlecloseModal, exitGame }) => {
    const handleOkClick = () => {
        exitGame();
        handlecloseModal();
    };
    const { t } = useTranslation();
    return (
        <StModalDelete>
            <p>{t('are_you_sure')}</p>
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
        </StModalDelete>
    );
};

export default ModalDelete;
