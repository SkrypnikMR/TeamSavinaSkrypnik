import React from 'react';
import { useTranslation } from 'react-i18next';

// import Chessplate from '../ChessPlate';
import TicTacToePlate from '../TicTacToePlate';
import { useTheme } from '../Hook/useTheme';

import { StGameZone } from './styled';
import Turn from '../Turn';

const GameZone = () => {
    const { colors, theme } = useTheme();
    const { t } = useTranslation();
    return (
        <StGameZone colors={colors} theme={theme}>
            <Turn/>
            {/* <Chessplate/> */}
            <TicTacToePlate />
        </StGameZone>
    );
};

export default GameZone;
