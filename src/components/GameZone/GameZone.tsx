import React from 'react';

import Chessplate from '../ChessPlate';
import TicTacToePlate from '../TicTacToePlate';
import { useTheme } from '../Hook/useTheme';

import { StGameZone } from './styled';

const GameZone = () => {
    const { colors, theme } = useTheme();
    return (
        <StGameZone colors={colors} theme={theme}>
            your turn
            <Chessplate/>
            {/* <TicTacToePlate /> */}
        </StGameZone>
    );
};

export default GameZone;
