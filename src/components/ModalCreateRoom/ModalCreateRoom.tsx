import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Portal from '../Portal';
import Button from '../UI/Button';

import { StModalCreateRoom } from './styled';

const ModalCreateRoom = ({ handlecloseModal, createRoom }) => {
    const [state, setState] = useState({ gameType: 'Tic-tac-toe' });
    const { t } = useTranslation();
    const handleModalClick = () => {
        createRoom(state.gameType);
        handlecloseModal();
    };
    const handleOnchange = (e) => setState({ ...state, gameType: e.target.value });
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
                        <select className="modal-select" onChange={handleOnchange} value={state.gameType}>
                            <option value="Tic-tac-toe">{t('tic_tac_toe')}</option>
                            <option value="Checkers">{t('Checkers')}</option>
                        </select>
                        <div className="modal-buttons">
                            <Button content="OK" focusColor="black" onClick={handleModalClick} id="okButton" name="okButton" value="OK" type="button" title="OK"/>
                            <Button content={t('cancel')} focusColor="black" onClick={handlecloseModal} id="CancelButton" name="CancelButton" value="Cancel" type="button" title="Cancel"/>
                        </div>
                    </div>
                </div>
            </div>
            </StModalCreateRoom>
        </Portal>
    );
};

export default ModalCreateRoom;
