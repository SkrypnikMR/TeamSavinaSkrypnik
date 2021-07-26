import styled from 'styled-components';

export const StStatisticCardWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(6,1fr);
    grid-gap: 0px;
    align-items: center;
    justify-items: center;
    width: 100%;
    border-radius: 10px;
    border: 1px solid white;
    height: 300px;
    font-size: 15px;
`;

export const StStatisticCardTitle = styled.h3`
    font-size: 25px;
    margin-left: 10px;
`;

export const StStatisticCardOponnent = styled.p`
    font-size: 18px;
`;

export const StStatisticCardDate = styled.p`
    font-size: 13px;
`;

export const StStatisticCardResult = styled.p`
    font-size: 18px;
`;

export const StStatisticCardParticipant = styled.span`
    font-size: 20px;
`;
