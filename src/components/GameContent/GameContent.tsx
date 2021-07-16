import React from 'react';
import { useTranslation } from 'react-i18next';
import { StGameContent } from './styled';
import GameZone from '../GameZone';

const GameContent = () => {
    const { t } = useTranslation();
    return (
        <StGameContent>
            {t('checkers')}
            <GameZone/>
        </StGameContent>
    );
};

export default GameContent;
