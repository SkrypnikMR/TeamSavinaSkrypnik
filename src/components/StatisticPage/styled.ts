import styled from 'styled-components';

import { darkGrey, midGrey, white } from '../UI/baseLayout';

export const StStatisticPage = styled.div`
  min-height: 100vh;
  background: ${darkGrey};
  background: ${({ colors, theme }) => colors[theme].background};

  display: flex;
  flex-direction: column;
`;
export const StStatisticContent = styled.div`
  background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
  border-radius: 3px;
  height: 82vh;
  margin: 10px;
  padding: 10px;
  /* color: ${white}; */
  color: ${({ colors, theme }) => colors[theme].textColor};

  display: grid;
  grid-template-columns: repeat(5,1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
      overflow-y: auto;
      overflow-x: hidden;
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
            ::-webkit-scrollbar-thumb {
              width: 8px;
              background-color: ${({ color = white }) => color};
            }
`;
