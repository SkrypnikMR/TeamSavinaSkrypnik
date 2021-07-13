import React from 'react'
import SingleSell from './SingleSell'
import { StChessPlate } from './styled'

const Chessplate=()=>{
    const items=[]
    for(let i=1; i<65; i++){
        items.push(i)
    }
    return(
        <StChessPlate>
            {items.map(item =>
                <SingleSell key={item}/>
            )}
        </StChessPlate>
    )
}

export default Chessplate