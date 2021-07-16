import styled from 'styled-components';

export const StRoomsContainer = styled.div`
    background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
    width: 30%;
    margin: 10px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`;
