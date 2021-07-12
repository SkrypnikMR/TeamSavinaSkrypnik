import styled from 'styled-components';
import { textColorBlack } from '/src/components/UI/baseLayout';

export const StChat = styled.div`
    display: flex;
    width: auto;
    margin: 0;
    justify-content: space-between;
    align-items: space-between;
    color: ${({ color = textColorBlack }) => color};
    font-family: 'Play', sans-serif;
    border-radius: 0px;
    position: relative;
    overflow:  hidden;
    touch-action: none;
    height: 90vh;
    overflow-x: hidden;
    overflow-y: no-scroll;
`;
