import React from 'react';
import { TCheckers } from 'src/Store/game/types';
import SingleSell from './SingleSell';
import { StChessPlate } from './styled';

// const Chessplate = () => {
//     const items = [];
//     for (let i = 63; i > -1; i--) {
//         items.push(i);
//     }
//     return (
//         <StChessPlate>
//             {items.map((item) => <SingleSell
//                                     id={item.position}
//                                     key={item.position}
//                                     isChecked={item.isChecked}
//                                     color={item.color}/>
//                                 )}  
//         </StChessPlate>
//     );
// };
const Chessplate: React.FC<TCheckers> = ({ checker }) => {
    console.log(checker);
    const onHandleClick = (e:React.MouseEvent) => {
        console.log(e);
    };
    return (
        <StChessPlate>
            {checker.map((item: TCheckers) => <SingleSell
                id={item.position}
                key={item.position} isChecked={item.isChecked} color={item.color} onClick={onHandleClick}/>)}
        </StChessPlate>
    );
};

export default Chessplate;
