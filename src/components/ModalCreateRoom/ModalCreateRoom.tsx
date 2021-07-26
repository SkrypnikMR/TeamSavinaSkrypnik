import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../UI/Button';
import { GAME_TYPE } from '../../constants/componentsСonsts';

import { StModalButtonBox } from './styled';
import Select from '../UI/Select';

const ModalCreateRoom = ({ handlecloseModal, createRoom }) => {
    console.log(createRoom);
    const [state, setState] = useState({ gameType: GAME_TYPE.tic_tac_toe });
    const { t } = useTranslation();
    const handleModalClick = () => {
        createRoom(state.gameType);
        handlecloseModal();
    };
    const handleOnchange = (e) => setState({ ...state, gameType: e.target.value });
    return (
                    <div>
                        <Select
                            onChange={handleOnchange}
                            value={state.gameType}
                            options={[GAME_TYPE.tic_tac_toe, GAME_TYPE.checkers]}
                        />
                        <StModalButtonBox>
                            <Button 
                                content="OK"
                                focusColor="black"
                                onClick={handleModalClick}
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
                    </div>
    );
};

export default ModalCreateRoom;
