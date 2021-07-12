import React from 'react';
import { useTranslation } from 'react-i18next';
import { StNoResTitle, StNoResWrapper, StNoResText } from './styled';

const SearchNoRes = () => {
    const { t } = useTranslation();
    return (
        <StNoResWrapper>
            <StNoResTitle>{t('no_result')}</StNoResTitle>
            <StNoResText>{t('try_new')}</StNoResText>
        </StNoResWrapper>
    );
};

export default SearchNoRes;
