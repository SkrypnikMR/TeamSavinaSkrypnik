import styled from 'styled-components';
import { colorDefault } from '/src/components/UI/baseLayout';

export const StChatListItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
        input{
        flex-direction: end;
        justify-content: end;

}`;
export const StPhoto = styled.div`
    img{
        width: 40px;
        height: 40px;
    }
`;
export const StUsersView = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding-top: 5px;
    font-size: 20px;
    align-items: center;
    color: ${({ color = colorDefault }) => color};
        ul {
        padding-left: 1rem;
        list-style-type: none;
        }
`;
