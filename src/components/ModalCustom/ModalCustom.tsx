import React from 'react';
import Portal from '../Portal';
import Button from '../UI/Button';
import { StModalCreateRoom, StModalContent, StModalContentItems, StModalHeader } from './styled';
import { lightGray } from '../UI/baseLayout';

const ModalCustom = ({ header, content, handlecloseModal }) => {
    return (
        <Portal>
            <StModalCreateRoom>
                <StModalContent>
                    <Button 
                        content="X"
                        onClick={handlecloseModal}
                        id="CloseButton"
                        name="CloseButton"
                        value="Close"
                        type="button"
                        title="Close"
                        height="40px"
                        width="40px"
                        bgColor={lightGray}
                        position="absolute"
                        right="10px"
                    />
                    <StModalContentItems>
                        <StModalHeader>
                            {header}
                        </StModalHeader>
                        <div>
                            {content}
                        </div>
                    </StModalContentItems>
                </StModalContent>
            </StModalCreateRoom>
        </Portal>
    );
};

export default ModalCustom;
