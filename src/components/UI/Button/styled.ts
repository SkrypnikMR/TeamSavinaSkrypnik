import styled from 'styled-components';
import { IStyledButton } from './types';
import {
  bgColorDefault,
  colorDefault,
  focusColorDefault,
  disabledColor,
  bgColorDisabledDefault,
  disabledBorder,
  bgColorDefaultFon,
  bgMessage,
} from '../baseLayout';

export const StButton = styled.button < IStyledButton > `
  ${({ margin = '0 0 7px 0' }) => margin && `margin: ${margin}`};
  font-family: 'Play', sans-serif;
  padding: ${({ padding = '5px' }) => padding};
  width: ${({ width = '170px' }) => width};
  height: ${({ height = '35px' }) => height};
  ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
  color: ${({ color = colorDefault }) => color};
  background-color: ${({ bgColor = bgColorDefault }) => bgColor};
  border-radius: ${({ borderRadius = '7px' }) => borderRadius}; 
  border: ${({ border = 'none' }) => border};
  outline: ${({ outline = 'none' }) => outline};
  ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
  font-size: ${({ fontSize = '16px' }) => fontSize};
  position: ${({ position = 'static' }) => position};
  right: ${( right = '0px' ) => right};
  &:hover {
    background: ${({ bgColor = bgMessage }) => bgColor};
    color: ${({ colors, theme }) => colors[theme].buttonText};
    border: ${({ border = 'none' }) => border};
    }
  &:focus {
    color: ${({ focusColor = focusColorDefault }) => focusColor};
    }
  &:disabled{ 
    border: ${({ border = disabledBorder }) => border};
    background-color: ${({ bgColorDisabled = bgColorDisabledDefault }) => bgColorDisabled};
    color: ${({ focusColor = disabledColor }) => focusColor};
    }
`;
