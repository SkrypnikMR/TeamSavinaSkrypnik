import React from 'react';
import { useTranslation } from 'react-i18next';

import Chessplate from '../ChessPlate';
import TicTacToePlate from '../TicTacToePlate';
import { useTheme } from '../Hook/useTheme';

import { StGameZone } from './styled';

const GameZone = () => {
    const { colors, theme } = useTheme();
    const { t } = useTranslation();
    return (
        <StGameZone colors={colors} theme={theme}>
            {t('your_turn')}
            <Chessplate/>
            {/* <TicTacToePlate /> */}
        </StGameZone>
    );
};

export default GameZone;
