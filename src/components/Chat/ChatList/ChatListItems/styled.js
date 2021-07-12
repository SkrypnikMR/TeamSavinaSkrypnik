import styled from 'styled-components';
import { bgColorDefault, colorDefault } from '/src/components/UI/baseLayout';

export const StChatListItems = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    color: ${({ color = colorDefault }) => color};
    cursor: pointer;
        ul {
          padding-left: 1rem;
          list-style-type: none;
        }
        :hover{
            color: ${({ color = bgColorDefault }) => color};
            span{
                color: ${({ color = colorDefault }) => color};
            }
        }
`;
export const StPhoto = styled.div`
    margin: 5px 10px;
    img{
        width: 50px;
        height: 50px;
    }
`;
export const StRoom = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
        p{
            width:80%;
        }
        span{
            width: 30px;
            height: 30px;
            display:flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            border-radius: 50%;
            background-color: ${({ bgColor = bgColorDefault }) => bgColor};
        }
`;
