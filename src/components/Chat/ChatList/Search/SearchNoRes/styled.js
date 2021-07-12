import styled from 'styled-components';
import { colorDefault } from '/src/components/UI/baseLayout';

export const StNoResWrapper = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
`;
export const StNoResTitle = styled.p`
  color: ${({ color = colorDefault }) => color};
  font-family: 'Play', sans-serif;
`;
export const StNoResText = styled.span`
  color: ${({ color = colorDefault }) => color};
  font-family: 'Play', sans-serif;
`;
