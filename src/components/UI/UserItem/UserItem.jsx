import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'src/components/UI/Input';
import { StChatListItems, StPhoto, StUsersView } from './styled';

const UserItem = ({ img, email, id, onChange, isSelected, onlineUsersEmails }) => {
    const [state, setState] = useState({
        error: false,
        src: img,
        defaultImg: '../../../../public/assets/images/user.png',
    });
    const onError = () => setState({ ...state, error: true, src: state.defaultImg });

    return (
        <StUsersView>
            <StChatListItems>
                <div>{onlineUsersEmails.includes(email) ? '🟢' : '🔴'}</div>
                <StPhoto>
                    <img src={img ? state.src : state.defaultImg} onError={onError} />
                </StPhoto>
                <div>
                    {email}
                </div>
            </StChatListItems>
            <Input
                type="checkbox"
                id={id}
                height="30px"
                key="user"
                name={id}
                inputHeight="30px"
                borderRadius="0px"
                width="30px"
                margin="0"
                value={isSelected}
                onChange={onChange}
                bgColor="transparent"
                fontSizeInp="10px"
                borderColor="transparent"
                bgFocusColor="transparent"
                padding="0"
            />
        </StUsersView>
    );
};

UserItem.propTypes = {
    email: PropTypes.string,
    img: PropTypes.any,
    id: PropTypes.number,
    onChange: PropTypes.func,
    isSelected: PropTypes.string,
    onlineUsersEmails: PropTypes.array,
};

export default UserItem;
