import styled from 'styled-components';
import { white, turquous } from '../UI/baseLayout';
import { TStyledConatiner } from './types';

export const StRoomsContainer = styled.div < TStyledConatiner > `
    background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
    width: 28%;
    margin: 10px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    overflow-y: scroll;
    overflow-x: hidden;

  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
    height: 40px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${turquous};
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-track {
    margin: 3px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: ${white};
  }
`;
