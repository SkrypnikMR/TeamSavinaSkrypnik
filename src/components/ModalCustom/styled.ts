import styled from 'styled-components';

import { lightGray } from '../UI/baseLayout';

export const StModalCreateRoom = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0,0,0, 0.8);
  border-radius: 3px;
`;

export const StModalContent = styled.div`
    background-color: ${lightGray};
    margin: 84px auto;
    padding: 20px;
    width: 30%;
    align-items: center;
    position: relative;
    border-radius: 3px;
`;

export const StModalContentItems = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StModalHeader = styled.div`
  margin: 10px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
