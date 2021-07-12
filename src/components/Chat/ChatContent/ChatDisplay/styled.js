import styled from 'styled-components';
import { bgColorDefault } from '/src/components/UI/baseLayout';

export const StChatDisplay = styled.div`
    display: flex;
    height: -webkit-fill-available;
    width: 100%;
    font-size: 24px;
    font-family: 'Play', sans-serif;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    flex-direction: column;
    overflow-y: auto;
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
            ::-webkit-scrollbar-thumb {
              width: 8px;
              background-color: ${({ color = bgColorDefault }) => color};
            }
`;
