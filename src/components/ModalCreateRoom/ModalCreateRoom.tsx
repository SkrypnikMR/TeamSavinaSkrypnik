import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Portal from '../Portal';
import Button from '../UI/Button';
import { GAME_TYPE } from '../../constants/componentsСonsts';
import { lightGray } from '../UI/baseLayout';

import { StModalCreateRoom, StModalContent, StModalContentItems, StModalHeader, StModalButtonBox } from './styled';
import Select from '../UI/Select/Select';

const ModalCreateRoom = ({ handlecloseModal, createRoom }) => {
    const [state, setState] = useState({ gameType: GAME_TYPE.tic_tac_toe });
    const { t } = useTranslation();
    const handleModalClick = () => {
        createRoom(state.gameType);
        handlecloseModal();
    };
    const handleOnchange = (e) => setState({ ...state, gameType: e.target.value });
    return (
        <Portal>
            <StModalCreateRoom>
                <StModalContent>
                    <Button 
                        content="X"
                        onClick={handlecloseModal}
                        id="CloseButton"
                        name="CloseButton"
                        value="Close"
                        type="button"
                        title="Close"
                        height="40px"
                        width="40px"
                        bgColor={lightGray}
                        position="absolute"
                        right="10px"
                    />
                    <StModalContentItems>
                        <StModalHeader>
                            {t('create_new_game')}
                        </StModalHeader>
                        {/* <select onChange={handleOnchange} value={state.gameType}>
                            <option value={GAME_TYPE.tic_tac_toe}>{t('tic_tac_toe')}</option>
                            <option value={GAME_TYPE.checkers}>{t('Checkers')}</option>
                        </select> */}
                        <Select onChange={handleOnchange} value={state.gameType} options={[GAME_TYPE.tic_tac_toe, GAME_TYPE.checkers]}/>
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
                    </StModalContentItems>
                </StModalContent>
            </StModalCreateRoom>
        </Portal>
    );
};

export default ModalCreateRoom;
