import styled from 'styled-components';

import { IDiv } from './types';
import { midGrey, bgColorDefault } from '../UI/baseLayout';

export const StAddRoom = styled.div < IDiv > `
    background: ${midGrey};
    padding: 2px;
    font-size: 30px;
    font-weight: bold;
    width: 30px;
    height: 30px;
    color: ${bgColorDefault};
    border-radius: 50%;
    line-height: 33px;
    text-align: center;
    margin: 0 10px 30px;
    cursor: pointer;
    position: absolute;
    right: 73%;
    top: 90%;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.6);
    :hover {
        -webkit-transform: scale(1.5);
        -ms-transform: scale(1.5);
        transform: scale(1.5);
        transition-duration: 0.3s;
    }
`;
