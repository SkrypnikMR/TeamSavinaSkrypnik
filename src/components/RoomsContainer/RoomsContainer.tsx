import React from 'react';
import { StRoomsContainer } from './styled';
import SingleRoom from '../SingleRoom';
import { TInitialGame, TRoom } from '../../store/game/types';

const RoomsContainer = ({ rooms, userLogin }: TInitialGame) => {
    return (
        <StRoomsContainer >
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
