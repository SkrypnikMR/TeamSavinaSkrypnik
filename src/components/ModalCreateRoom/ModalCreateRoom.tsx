import React from 'react';

import Portal from '../Portal';
import Button from '../UI/Button';

import { StModalCreateRoom } from './styled';

const ModalCreateRoom = ({ handlecloseModal }) => {
    return (
        <Portal>
            <StModalCreateRoom>
            <div className="modal">
                <div className="modal-content">
                    <button className="modal-close" onClick={handlecloseModal}>X</button>
                    <div className="modal-content__content">
                        <div className="modal-header">
                            Create new game
                        </div>
                        <select className="modal-select">
                            <option>Tic tac toe</option>
                            <option>Chesses</option>
                        </select>
                        <div className="modal-buttons">
                            <Button content="OK" focusColor="black"/>
                            <Button content="Cancel" focusColor="black"/>
                        </div>
                    </div>
                </div>
            </div>
            </StModalCreateRoom>
        </Portal>
    );
};

export default ModalCreateRoom;
