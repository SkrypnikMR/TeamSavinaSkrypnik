import React from 'react';

import Header from '../Header';
import MainContent from '../MainContent';
import Footer from '../Footer';
import { useTheme } from '../Hook/useTheme';

import { StMainPage } from './styled';

const MainPage = () => {
    const { colors, theme } = useTheme();
    return (
        <StMainPage colors={colors} theme={theme}>
            <Header />
            <MainContent />
            <Footer/>
        </StMainPage>
        
    );
};

export default MainPage;
