import styled from 'styled-components';

import { midGrey } from '../UI/baseLayout';

export const StSingleRoom = styled.div`
    background: ${midGrey};
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    :hover {
        -webkit-transform: scale(1.005);
        -ms-transform: scale(1.005);
        transform: scale(1.005);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.6), 0 10px 10px rgba(0, 0, 0, 0.22);
        transition-duration: 0.3s;
    }
`;
