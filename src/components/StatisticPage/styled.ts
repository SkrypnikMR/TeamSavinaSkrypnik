import styled from 'styled-components';

import { darkGrey, midGrey, white } from '../UI/baseLayout';

export const StStatisticPage = styled.div`
  min-height: 100vh;
  background: ${darkGrey};
  display: flex;
  flex-direction: column;
`;
export const StStatisticContent = styled.div`
  background: ${midGrey};
  height: 80vh;
  margin: 10px;
  color: ${white};
  display: grid;
  grid-template-columns: repeat(5,1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  overflow-x : hidden;
  overflow-y: auto;
`;
