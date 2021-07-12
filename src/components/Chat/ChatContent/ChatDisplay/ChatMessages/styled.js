import styled from 'styled-components';
import { bgMessage, textColorBlack, colorDefault } from '/src/components/UI/baseLayout';

export const StMessage = styled.div`
    display: flex;
    height: fit-content;
    width: 60%;
    font-size: 24px;
    font-family: 'Play', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right:20px;
    flex: start;
    align-self: ${({ alignSelf = 'flex-start' }) => alignSelf};
`;

export const StData = styled.data`
    color: ${({ color = textColorBlack }) => color};
    display: flex;
    height: fit-content;
    font-size: 14px;
    font-family: 'Play', sans-serif;
`;

export const StTitle = styled.span`
    display: flex;
    font-size: 20px;
    color: ${({ color = colorDefault }) => color};
    font-family: 'Play', sans-serif;
    justify-content: space-between;
    width: 100%;
    padding-top: 2px;
    padding-right: 2px;
`;
export const StPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    img{
      margin: 0 10px 0 0;
      width: 50px;
      height: 50px;
    }
`;

export const StText = styled.p`
    display: flex;
    height: auto;
    width: 700px;
    align-content: center;
    margin:0;
    font-size: 20px;
    font-family: 'Play', sans-serif;
    flex-direction: column;
    color: ${({ color = textColorBlack }) => color};

    background-color: ${({ color = bgMessage }) => color};
    padding: 0 5px;
    border-radius: 5px;
`;
