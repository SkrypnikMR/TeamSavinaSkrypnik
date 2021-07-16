import styled from 'styled-components';

import { IDiv } from './types';

export const StFooter = styled.div < IDiv > `
    color: white;
    padding: 0 10px 10px;
    text-align: end;
    a{
        text-decoration: none;
        color: white;
        cursor: pointer;
        :hover{
            color: ${({ colors, theme }) => colors[theme].buttonText};
        }
    }
`;
