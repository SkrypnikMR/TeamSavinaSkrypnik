import React from 'react';
import { useTranslation } from 'react-i18next';
import Chessplate from '../ChessPlate';
import { StGameZone } from './styled';

const GameZone = () => {
    const { t } = useTranslation();
    return (
        <StGameZone>
            {t('your_turn')}
            <Chessplate/>
        </StGameZone>
    );
};

export default GameZone;
