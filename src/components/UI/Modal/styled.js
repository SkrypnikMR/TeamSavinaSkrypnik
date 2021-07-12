import styled from 'styled-components';
import { colorDefault } from '../baseLayout';

export const StModalHeader = styled.div`
    width: 100%;
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    color: ${({ color = colorDefault }) => color};
    font-size: 36px;
        button{
            margin-left: auto;
        }
`;
export const StTextHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: ${({ color = colorDefault }) => color};
    font-size: 36px;
`;
export const Component = {
    margin: 'auto',
    overflow: 'visible',
    transition: 'transform 0.2s ease 0s, opacity 0.2s ease 0s',
    transform: 'scale(0.9)',
    opacity: '1',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    minHeight: '40vh',
    maxHeight: '80vh',
    width: '40%',
    justifyContent: 'center',
    fontFamily: 'Play, sans-serif',
    display: 'flex',
    overflowY: 'hidden',
};
export const customStyles = {
   overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    content: {
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        margin: 'auto',
        transition: 'transform 0.2s ease 0s, opacity 0.2s ease 0s',
        transform: 'scale(0.9)',
        opacity: '1',
        flexFlow: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        minHeight: '40vh',
        maxHeight: '80vh',
        width: '40%',
        fontFamily: 'Play, sans-serif',
        display: 'flex',
        overflowY: 'hidden',
    },
  };
