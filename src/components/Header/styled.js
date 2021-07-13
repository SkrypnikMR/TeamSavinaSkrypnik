import styled from 'styled-components';
import { TRANSPARENT_BACKGROUND } from '/src/components/UI/baseLayout';

export const StHeader = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    height:10vh;
    background: #404040;
    /* ${({ backgroundColor = TRANSPARENT_BACKGROUND }) => backgroundColor && `background-color: ${backgroundColor}`}; */
    ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
`;
