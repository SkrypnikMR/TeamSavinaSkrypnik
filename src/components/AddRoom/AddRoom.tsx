import React, { useState } from 'react';

import ModalCreateRoom from '../ModalCreateRoom';

import { StAddRoom } from './styled';

const AddRoom = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(prev => !prev);

    return (
        <div>
            <StAddRoom onClick={handleClick}>
                +
            </StAddRoom>
            {isOpen && <ModalCreateRoom handlecloseModal={handleClick}/>}
        </div>

    );
};

export default AddRoom;
