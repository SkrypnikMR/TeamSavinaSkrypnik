import styled from 'styled-components';
import { bgColorDefaultFon, textColorBlack } from '/src/components/UI/baseLayout';


export const StChatControlPanel = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    color: ${({ color = textColorBlack }) => color};
    font-size: 24px;
    font-family: 'Play', sans-serif;
    border-right: 1px solid black;
    background-color: ${({ color = bgColorDefaultFon }) => color};
`;
