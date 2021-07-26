import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../UI/Button';
import { GAME_TYPE } from '../../constants/componentsСonsts';
import { StModalButtonBox } from './styled';
import Select from '../UI/Select';
import { TModalCreateRoom } from './types';

const ModalCreateRoom = ({
    createRoom,
    handlecloseModal }: TModalCreateRoom) => {
    const [state, setState] = useState({ gameType: GAME_TYPE.tic_tac_toe });
    const { t } = useTranslation();
    const handleModalClick = () => {
        createRoom(state.gameType);
        handlecloseModal();
    };
    const handleOnchange = (e: any) => setState({ ...state, gameType: e.target.value });
    return (
            <>
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
            </>
    );
};

export default ModalCreateRoom;
