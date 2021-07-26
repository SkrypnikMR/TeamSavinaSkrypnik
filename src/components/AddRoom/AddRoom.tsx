import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalCreateRoom from '../ModalCreateRoom/ModalCreateRoom';
import ModalCustom from '../ModalCustom';

import { StAddRoom } from './styled';

const AddRoom = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen((prev) => !prev);
    const { t } = useTranslation();
    return (
        <div>
            <StAddRoom onClick={handleClick}>
                +
            </StAddRoom>
            {isOpen && <ModalCustom header={t('create_new_game')} content={<ModalCreateRoom handlecloseModal={handleClick}/>} handlecloseModal={handleClick}/>}
        </div>

    );
};

export default AddRoom;
