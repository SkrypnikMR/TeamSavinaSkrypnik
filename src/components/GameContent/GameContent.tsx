import React from 'react';
import { StGameContent } from './styled';
import GameZone from '../GameZone';
import { useTheme } from '../Hook/useTheme';
import Winner from '../Winner';
import { TGameContent } from './types';

const GameContent = ({ winner, cleanOldGame }: TGameContent) => {
    const { colors, theme } = useTheme();
    if (winner) setTimeout(() => cleanOldGame());
    return (
        <StGameContent colors={colors} theme={theme}>
            {winner ? <Winner winner={winner}/> : <GameZone />}
        </StGameContent>
    );
};

export default GameContent;
