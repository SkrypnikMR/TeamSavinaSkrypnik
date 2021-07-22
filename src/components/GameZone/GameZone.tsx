import React from 'react';
import Chessplate from '../ChessPlate';
import TicTacToePlate from '../TicTacToePlate';
import { useTheme } from '../Hook/useTheme';
import { StGameZone } from './styled';
import { TGZ } from './types';
import Turn from '../Turn';

const GameZone = ({ gameType }: TGZ) => {
    const { colors, theme } = useTheme();
    switch (gameType) {
        case 'Checkers': return (
<StGameZone colors={colors} theme={theme}>
<Turn/>
<Chessplate />
</StGameZone>
);
        case 'Tic-tac-toe': return (
<StGameZone colors={colors} theme={theme}>
<Turn/>
<TicTacToePlate />
</StGameZone>
);
        default: return <StGameZone colors={colors} theme={theme}>Тут будет компонент приветствия</StGameZone>;
    }
};

export default GameZone;
