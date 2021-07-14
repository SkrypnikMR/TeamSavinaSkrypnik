import React from 'react';
import Header from '../Header';
import { StMainPage } from './styled';
import MainContent from '../MainContent';
import Footer from '../Footer';

const MainPage = () => {
    return(
        <StMainPage>
            <Header />
            <MainContent />
            <Footer/>
        </StMainPage>
        
    )
}

export default MainPage;