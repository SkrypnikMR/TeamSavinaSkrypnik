import React from 'react';

import { useTranslation } from 'react-i18next';
import { useTheme } from '../Hook/useTheme';

import { StFooter } from './styled';

const Footer = () => {
    const { colors, theme } = useTheme();
    const { t } = useTranslation();
    return (
        <StFooter colors={colors} theme={theme}>
            {t('create_for')}
            &nbsp; 
            <a href="https://deveducation.com/" target="_blank" rel="noreferrer">
                dev
            {'{Education}'} 
            </a> 
        </StFooter>
    );
};

export default Footer;
