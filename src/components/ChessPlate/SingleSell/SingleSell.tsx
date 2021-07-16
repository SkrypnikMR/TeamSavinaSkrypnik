import React from 'react';

import { StSingleSell } from './styled';

const SingleSell = (props) => {
    const { id } = props;
    const handleClick = (e) => {
        console.log(e.target.id);
    };

    return (
        <StSingleSell id={id + 1} style={{ background: parseInt((id / 8) + id) % 2 === 0 ? 'black' : 'white' }} onClick={handleClick}>{id + 1}</StSingleSell>
    );
};

export default SingleSell;
