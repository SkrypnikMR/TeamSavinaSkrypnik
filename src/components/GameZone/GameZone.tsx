import React from 'react';
import Chessplate from '../ChessPlate';
import { StGameZone } from './styled';
import Turn from '../Turn';

const GameZone = () => {
    return (
        <StGameZone>
              <Turn/>
            <Chessplate/>
        </StGameZone>
    );
};

export default GameZone;
