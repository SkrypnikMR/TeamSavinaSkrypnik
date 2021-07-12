import styled from 'styled-components';
import { colorDefault, TRANSPARENT_BACKGROUND, bgColorDefault } from '../UI/baseLayout';

export const StMyAccountHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
`;

export const StFieldText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;  
    font-size: 20px;
    margin: 0;

`;

export const StMyAccountWrapper = styled.div`
    ${({ backgroundColor = TRANSPARENT_BACKGROUND }) => backgroundColor && `background-color: ${backgroundColor}`};
    min-height: 85vh;
    width: 80%;
    margin: 20px auto 0 auto;
    font-family: 'Play', sans-serif;
    border-radius: 10px;
    ${({ color = colorDefault }) => color && `color: ${color}`};
    ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
    @media (max-width: 920px){
        width: 100%;
        border-radius: 0px;
    }
`;

export const StMyAccountTitle = styled.h3`
    font-size: 48px;
    width: 100%;
    text-align: center;
`;

export const StMyAccountIcon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 30%;
    margin: 5px;
    position: fixed;
    right: 10px;
    height: 50px;
    font-size: 40px;
    ${({ color = colorDefault }) => color && `color: ${color}`};
    cursor: pointer;
    ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
    &:hover{
        ${({ hoverColor = bgColorDefault }) => hoverColor && `color: ${hoverColor}`};
    }
`;

export const StMyAccountContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
`;

export const StMyAccountAvatarConteiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    img{
        width: 60%;
        height: 60%;
    }
`;

export const StMyAccountFieldsConteiner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    flex-direction: column;
        p{
            min-width: 105px;
        }
`;

export const StMyAccountSignificance = styled.span`
    margin: 0 10px;
    align-items: center;
    ${({ color = bgColorDefault }) => color && `color: ${color}`};
`;

export const StMyAccountFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
`;
