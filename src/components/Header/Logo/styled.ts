import styled from 'styled-components';

import { IDiv } from './types';

export const StLogo = styled.div < IDiv > `
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width:30%;
    font-family: 'Play', sans-serif;
    color:white;
        h1{
            font-size: 30px;
        }
        img{
            height: 45px;
            margin-top: 15px;
        }
    cursor: pointer;
`;

export const StDiv = styled.div``;
