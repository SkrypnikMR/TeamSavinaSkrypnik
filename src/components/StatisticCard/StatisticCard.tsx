import React from 'react';
import { useTranslation } from 'react-i18next';
import { TStatisticCard } from './types';
import {
    StStatisticCardWrapper,
    StStatisticCardTitle,
    StStatisticCardOponnent,
    StStatisticCardDate,
    StStatisticCardResult,
    StStatisticCardParticipant,
} from './styled';
import { support } from '../../helpers/support';

const StatisticCard = ({
    draw,
    gameType,
    startTime,
    userLogin,
    finishTime,
    guestLogin,
    winnerLogin,
    creatorLogin,
   }: TStatisticCard) => {
    const { t } = useTranslation();
    const result = draw ? t('draw_in_game') : `${t('winner_in_game')}: ${winnerLogin}`;
    const oponnent = userLogin === creatorLogin ? guestLogin : creatorLogin;
    const prettyStartDate = support.getPrettyDate(startTime);
    const prettyFinishDate = support.getPrettyDate(finishTime);
    return (
        <StStatisticCardWrapper>
            <StStatisticCardTitle>
                {t('game_type')}    
                {': '}
                {t(gameType)}
            </StStatisticCardTitle>
            <StStatisticCardOponnent>
                {t('oponnent')}
                {': '}
               <StStatisticCardParticipant>{oponnent}</StStatisticCardParticipant>
            </StStatisticCardOponnent>
            <StStatisticCardDate>
                {t('game_start')}
                {': '}
                {prettyStartDate}
            </StStatisticCardDate>
            <StStatisticCardDate>
                {t('game_finish')}
                {': '}
                {prettyFinishDate}
            </StStatisticCardDate>
            <StStatisticCardResult>
                <StStatisticCardParticipant>
                    {result}
                </StStatisticCardParticipant>
            </StStatisticCardResult>
        </StStatisticCardWrapper>
    );
};

export default StatisticCard;
