import React from 'react';
import { TCheckers } from 'src/Store/game/types';
import SingleSell from './SingleSell';
import { StChessPlate } from './styled';

const Chessplate: React.FC<TCheckers> = ({ checker }) => {
    console.log(checker);
    const onHandleClick = (e:React.MouseEvent) => {
        console.log(e);
    };
    return (
        <StChessPlate>
            {items.map(item => <SingleSell id={item} key={item} />,
            )}
        </StChessPlate>
    );
};

export default Chessplate;
