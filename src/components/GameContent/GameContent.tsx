import React from 'react'
import {StGameContent} from './styled'
import GameZone from '../GameZone'

const GameContent=()=>{
    return(
        <StGameContent>
            Checkers
            <GameZone/>
        </StGameContent>
    )
}

export default GameContent