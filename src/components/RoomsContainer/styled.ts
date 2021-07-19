import styled from 'styled-components';
import { ROOMS_CONTAINER_BG } from '../UI/baseLayout';

export const StRoomsContainer = styled.div`
    background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
    /* background: ${ROOMS_CONTAINER_BG}; */
    width: 30%;
    margin: 10px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`;
