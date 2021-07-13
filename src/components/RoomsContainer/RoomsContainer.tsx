import React from 'react';
import {StRoomsContainer} from './styled';
import SingleRoom from '../SingleRoom'
import AddRoom from '../AddRoom';

const RoomsContainer = () =>{
    return(
        <StRoomsContainer >
            <SingleRoom />
            <SingleRoom />
            <SingleRoom />
            <AddRoom />
        </StRoomsContainer>
    )
}

export default RoomsContainer