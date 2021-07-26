import React, { useEffect } from 'react';

import Header from '../Header';
import MainContent from '../MainContent';
import Footer from '../Footer';
import { useTheme } from '../Hook/useTheme';
import { StMainPage } from './styled';

const MainPage = ({ getSockJSConnection, disconnect }: any) => {
    const { colors, theme } = useTheme();
    useEffect(() => {
        getSockJSConnection();
        return () => disconnect();
    },
             []);
    return (
        <StMainPage colors={colors} theme={theme}>
            <Header />
            <MainContent />
            <Footer/>
        </StMainPage>
        
    );
};

export default MainPage;
