import React from 'react';
import { useTranslation } from 'react-i18next';

import Portal from '../Portal';
import Button from '../UI/Button';

import { StModalCreateRoom } from './styled';

const ModalCreateRoom = ({ handlecloseModal }) => {
    const { t } = useTranslation();
    return (
        <Portal>
            <StModalCreateRoom>
            <div className="modal">
                <div className="modal-content">
                    <button className="modal-close" onClick={handlecloseModal}>X</button>
                    <div className="modal-content__content">
                        <div className="modal-header">
                            {t('create_new_game')}
                        </div>
                        <select className="modal-select">
                            <option>{t('tic_tac_toe')}</option>
                            <option>{t('chesses')}</option>
                        </select>
                        <div className="modal-buttons">
                            <Button content="OK" focusColor="black"/>
                            <Button content={t('cancel')} focusColor="black"/>
                        </div>
                    </div>
                </div>
            </div>
            </StModalCreateRoom>
        </Portal>
    );
};

export default ModalCreateRoom;
