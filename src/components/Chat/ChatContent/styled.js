import styled from 'styled-components';
import { colorDefault } from '/src/components/UI/baseLayout';

export const StChatContant = styled.div`
    display: flex;
    width: 80%;
    height: 90vh;
    color: ${({ color = colorDefault }) => color};
    font-size: 24px;
    margin-left: 0;
    margin-right: auto;
    font-family: 'Play', sans-serif;
    flex-direction: column;
`;
export const StNoRoom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: -webkit-fill-available;
    width: 100%;
    font-size: 24px;
    font-family: 'Play', sans-serif;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    flex-direction: column;
`;
