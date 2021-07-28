import styled from 'styled-components';

import { IDiv } from './types';

export const StAppDiv = styled.div < IDiv > `
  min-height: 100vh;
  background: ${({ colors, theme }) => colors[theme].background};
  background-size: cover;
`;
