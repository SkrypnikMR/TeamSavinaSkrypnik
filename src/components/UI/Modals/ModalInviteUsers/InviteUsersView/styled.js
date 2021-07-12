import styled from 'styled-components';
import { bgColorDefault } from '/src/components/UI/baseLayout';

export const StControlPanel = styled.div`
    display: flex;
    justify-content: space-around;
`;
export const StContentModalUsers = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 70vh;
    width: 90%;
    align-self: center;

`;
export const StUsersItem = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 60vh;
    width: 100%;
    overflow: auto;
        ::-webkit-scrollbar {
            width: 4px;
            height: 8px;
        }
            ::-webkit-scrollbar-thumb {
                width: 4px;
                background-color: ${({ color = bgColorDefault }) => color};
            }
`;
