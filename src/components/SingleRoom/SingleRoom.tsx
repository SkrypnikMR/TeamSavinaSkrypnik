import React from 'react'
import Button from '../UI/Button'
import {StSingleRoom} from './styled'

const SingleRoom=()=>{
    return(
        <StSingleRoom>
            Who create
            <Button content="Join" width={"70px"}></Button>
        </StSingleRoom>
    )
}

export default SingleRoom