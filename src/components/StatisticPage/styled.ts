import styled from 'styled-components';

import { darkGrey, midGrey, white } from '../UI/baseLayout';

export const StStatisticPage = styled.div`
  min-height: 100vh;
  background: ${darkGrey};
  display: flex;
  flex-direction: column;
  .timeless{
      background: ${midGrey};
      height: 84vh;
      margin: 10px;
      color: ${white};
      font-size: 25px;
      text-align: center;
  }
`;
