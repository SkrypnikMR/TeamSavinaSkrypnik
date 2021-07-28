import styled from 'styled-components';
import { white } from '../UI/baseLayout';

export const StHello = styled.div`
display: flex;
flex-direction: column;
color: ${white};
background: ${({ colors, theme }) => colors[theme].background};
height: 100%;
text-align: center;
border-radius: 3px;
font-size: 25px;

img{
    width: 130px;
}
p{
    vertical-align:middle;
    text-align: center;
    position: absolute;               
    top: 50%; 
    left: 55%;
}
`;
