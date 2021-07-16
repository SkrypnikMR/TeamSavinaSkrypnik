import React from 'react';
import { useTranslation } from 'react-i18next';
import { StFooter } from './styled';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <StFooter>
            {t('create_for')}
{' '}
&nbsp; 
<a href="https://deveducation.com/" target="_blank" rel="noreferrer">
                dev
            {'{Education}'} 
</a> 
        </StFooter>
    );
};

export default Footer;
