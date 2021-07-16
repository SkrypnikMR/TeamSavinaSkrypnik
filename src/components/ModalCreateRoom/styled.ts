import styled from 'styled-components';

import { lightGray } from '../UI/baseLayout';

export const StModalCreateRoom = styled.div`
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0,0,0, 0.8);

  &-content {
    background-color: ${lightGray};
    margin: 84px auto;
    padding: 20px;
    width: 30%;
    align-items: center;
    position: relative;
  }

  &-content__content {
    display: flex;
    flex-direction: column;
  }

  &-close {
    position: absolute;
    background-color: ${lightGray};
    right: 10px;
    position: absolute;
    border: 0;
    width: 40px;
    height: 40px;
    top: 0;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  &-header {
    margin: 10px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }

  &-select{
    margin: 10px;
    padding: 10px;
    border: none;
  }

  &-buttons{
    margin: 10px;
    display: flex;
    justify-content: space-between;
  }
  
}
`;
