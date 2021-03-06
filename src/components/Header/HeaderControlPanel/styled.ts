import styled from 'styled-components';

import { IDiv } from './types';

export const StControl = styled.div < IDiv > `
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        width: 70%;
        p{
                color:white;
        }
        img{
                width: 20px;
                margin-right: 20px;
                margin-left: 5px;
                cursor: pointer;
        }
`;
