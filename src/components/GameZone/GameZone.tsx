import React from 'react'
import Chessplate from '../ChessPlate'
import { StGameZone } from './styled'

const GameZone=()=>{
    return(
        <StGameZone>
            your turn
            <Chessplate/>
        </StGameZone>
    )
}

export default GameZone