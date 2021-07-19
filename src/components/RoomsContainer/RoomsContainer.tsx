import React from 'react';
import SingleRoom from '../SingleRoom';
import { TInitialGame, TRoom } from '../../store/game/types';
import { useTheme } from '../Hook/useTheme';
import { StRoomsContainer } from './styled';

const RoomsContainer = ({ rooms, userLogin }: TInitialGame) => {
    const { colors, theme } = useTheme();
    return (
        <StRoomsContainer colors={colors} theme={theme}>
            {rooms.map((room : TRoom) => {
                return (
                    <SingleRoom
                        key={room.id}
                        id={room.id}
                        creatorLogin={room.creatorLogin}
                        userLogin={userLogin}
                        gameType={room.gameType}
                    />
                );
            })}
        </StRoomsContainer>
    );
};

export default RoomsContainer;
