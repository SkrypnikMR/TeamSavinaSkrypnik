import React from 'react';

import { useTheme } from '../Hook/useTheme';

import { StFooter } from './styled';

const Footer = () => {
    const { colors, theme } = useTheme();

    return (
        <StFooter colors={colors} theme={theme}>
            create for &nbsp; 
            <a href="https://deveducation.com/" target="_blank" rel="noreferrer">
                dev
            {'{Education}'} 
</a> 
        </StFooter>
    );
};

export default Footer;
