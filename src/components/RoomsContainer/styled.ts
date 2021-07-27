import styled from 'styled-components';
import { white, turquous } from '../UI/baseLayout';

export const StRoomsContainer = styled.div`
    background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
    width: 28%;
    margin: 10px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    border-radius: 4px;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
    height: 40px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${turquous};
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    background: ${turquous} radial-gradient(circle at 50% 0, rgba(${turquous},.65), rgba(${turquous},.35));
    box-shadow:
    inset rgba(0,0,0,.6) 0 -3px 8px,
    inset rgba(252,255,255,.7) 0 3px 8px,
    rgba(0,0,0,.8) 0 3px 8px -3px;
  }

  &::-webkit-scrollbar-track {
    margin: 3px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: ${white};
  }
`;
