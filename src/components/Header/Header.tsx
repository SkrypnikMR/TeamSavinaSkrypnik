import React from 'react';

import Logo from './Logo';
import HeaderControlPanel from './HeaderControlPanel';
import { useTheme } from '../Hook/useTheme';

import { StHeader } from './styled';

const Header = () => {
    const { colors, theme } = useTheme();
    return (
        <StHeader colors={colors} theme={theme}>
            <Logo />
            <HeaderControlPanel />
        </StHeader >
    );
};

export default Header;
