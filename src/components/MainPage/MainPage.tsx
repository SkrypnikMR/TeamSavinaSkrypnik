import React, { useEffect } from 'react';
import Header from '../Header';
import { StMainPage } from './styled';
import MainContent from '../MainContent';
import Footer from '../Footer';

const MainPage = ({ getSockJSConnection }: any) => {
    useEffect(() => getSockJSConnection(), []); 
    return (
        <StMainPage>
            <Header />
            <MainContent />
            <Footer/>
        </StMainPage>
        
    );
};

export default MainPage;
