import React from 'react';
import { useTranslation } from 'react-i18next';
import { TStatisticCard } from './types';
import { StStatisticCardWrapper } from './styled';

const StatisticCard = ({ draw, winnerLogin, gameType }: TStatisticCard) => {
    const { t } = useTranslation();
    const result = draw ? t('draw_in_game') : `${t('winner_in_game')}: ${winnerLogin}`;
    return (
        <StStatisticCardWrapper>
            <h3>
                {t('game_type')}    
                {': '}
                {t(gameType)}
            </h3>
            <p>{result}</p>
        </StStatisticCardWrapper>
    );
};

export default StatisticCard;
