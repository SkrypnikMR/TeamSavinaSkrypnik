import React from 'react';
import { useTranslation } from 'react-i18next';
import { TWinner } from './types';
import { StWinnerWrapper } from './styled';

function Winner({ winner, userLogin }: TWinner) {
    const { t } = useTranslation();
    return (
        <StWinnerWrapper>
            {winner === userLogin ? <img src="https://i.gifer.com/origin/23/23ca294b4b575ccd53ce8cca4da057ab_w200.gif">{t('winner')}</img> : t('loser')}
            {/* <img src="https://i.gifer.com/origin/23/23ca294b4b575ccd53ce8cca4da057ab_w200.gif"></img> */}
        </StWinnerWrapper>
    );
}

export default Winner;
