import React from 'react';
import SingleRoom from '../SingleRoom';
import AddRoom from '../AddRoom';
import { useTheme } from '../Hook/useTheme';

import { StRoomsContainer } from './styled';

const RoomsContainer = () => {
    const { colors, theme } = useTheme();
    return (
        <StRoomsContainer colors={colors} theme={theme}>
            <SingleRoom />
            <SingleRoom />
            <SingleRoom />
            <AddRoom />
        </StRoomsContainer>
    );
};

export default RoomsContainer;
