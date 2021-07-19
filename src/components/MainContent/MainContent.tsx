import React from 'react';

import RoomsContainer from '../RoomsContainer';
import GameContent from '../GameContent';

import { StMainContent } from './styled';

const MainContent = () => {
    return (
        <StMainContent>
            <RoomsContainer/>
            <GameContent />
        </StMainContent>
    );
};

export default MainContent;
