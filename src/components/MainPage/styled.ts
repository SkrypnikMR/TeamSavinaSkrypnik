import styled from 'styled-components';
import { TStyledMainPage } from './types';

export const StMainPage = styled.div < TStyledMainPage > `
    background: ${({ colors, theme }) => colors[theme].background};
`;
