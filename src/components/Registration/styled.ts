import styled from 'styled-components';

export const StRegDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ colors, theme }) => colors[theme].backgroundLogReg};
    height: 100vh;
    img{
        height: 40vh;
    }
`;
