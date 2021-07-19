import React from 'react';
import { StGameContent } from './styled';
import GameZone from '../GameZone/';
import { useTheme } from '../Hook/useTheme';

const GameContent = () => {
    const { colors, theme } = useTheme();
    return (
        <StGameContent colors={colors} theme={theme}>
            Checkers
            <GameZone/>
        </StGameContent>
    );
};

export default GameContent;
