import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../UI/Button';

import { StModalButtonBox } from '../ModalCreateRoom/styled';
import { StModalLogout } from './styled';

const ModalLogout = (handlecloseModal) => {
    const { t } = useTranslation();
    return (
        <StModalLogout>
            <p>{t('if_logout')}</p>
            <StModalButtonBox>
                <Button 
                    content="OK"
                    focusColor="black"
                    onClick={handlecloseModal}
                    id="okButton"
                    name="okButton"
                    value="OK"
                    type="button"
                    title="OK"
                    bgColorShadow="0 14px 28px rgba(0, 0, 0, 0.6), 0 10px 10px rgba(0, 0, 0, 0.22)"
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
                    bgColorShadow="0 14px 28px rgba(0, 0, 0, 0.6), 0 10px 10px rgba(0, 0, 0, 0.22)"
                />
            </StModalButtonBox>
        </StModalLogout>
    );
};

export default ModalLogout;
