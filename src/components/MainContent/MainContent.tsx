import React from 'react';
import RoomsContainer from '../RoomsContainer';
import { StMainContent } from './styled';
import GameContent from '../GameContent';

const MainContent = () => {
    return (
        <StMainContent>
            <RoomsContainer/>
            <GameContent />
        </StMainContent>
    );
};

export default MainContent;
