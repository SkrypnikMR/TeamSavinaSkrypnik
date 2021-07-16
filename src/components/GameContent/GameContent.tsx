import React from 'react';

import GameZone from '../GameZone';
import { useTheme } from '../Hook/useTheme';

import { StGameContent } from './styled';

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
