import React from 'react';
import { useTranslation } from 'react-i18next';
import { TWinner } from './types';
import { StWinnerWrapper } from './styled';

function Winner({ winner, userLogin }: TWinner) {
    const { t } = useTranslation();
    return (
        <StWinnerWrapper>
            {winner === userLogin ? t('winner') : t('loser')}
        </StWinnerWrapper>
    );
}

export default Winner;
