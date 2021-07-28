import styled from 'styled-components';

import { SINGLE_ROOM_BG } from '../UI/baseLayout';

export const StSingleRoom = styled.div`
    background: ${SINGLE_ROOM_BG};
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    display: grid;
    grid-template: 1fr/ 3fr 3fr 1fr;
    align-self: center;
    cursor: pointer;
    :hover {
        -webkit-transform: scale(1.005);
        -ms-transform: scale(1.005);
        transform: scale(1.005);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.6), 0 10px 10px rgba(0, 0, 0, 0.22);
        transition-duration: 0.3s;
    }
    p{
        word-wrap: break-word;
    }
`;
