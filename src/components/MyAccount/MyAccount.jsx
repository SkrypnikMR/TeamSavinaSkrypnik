import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { MY_ACCOUNT_EDIT } from '../../constants/componentsСonsts';
import Button from '../UI/Button';
import Input from '../UI/Input';
import {
    StFieldText,
    StMyAccountWrapper,
    StMyAccountTitle,
    StMyAccountHeader,
    StMyAccountIcon,
    StMyAccountContent,
    StMyAccountAvatarConteiner,
    StMyAccountFieldsConteiner,
    StMyAccountSignificance,
    StMyAccountFooter,
}
    from './styled';


const MyAccount = ({ userInfo, changeUser, changeUserData, setNewUserData }) => {
    const [isEdit, setIsEdit] = useState({ edit: false });
    const { t } = useTranslation();
    const handleEditClick = () => {
        setIsEdit({ ...isEdit, edit: true });
    };
    const handleApplyClick = () => {
        setNewUserData();
        setIsEdit({ ...isEdit, edit: false });
    };
    const handleOnChange = (data) => {
        changeUserData(data);
    };
    return (
        <StMyAccountWrapper>
            <StMyAccountHeader>
                <StMyAccountTitle>{t('my_account')}</StMyAccountTitle>
                <StMyAccountIcon onClick={handleEditClick}>🖉</StMyAccountIcon>
            </StMyAccountHeader>
            <StMyAccountContent>
                <StMyAccountAvatarConteiner>
                    <img src='../../../public/assets/images/user.png' />
                </StMyAccountAvatarConteiner>
                <StMyAccountFieldsConteiner>
                    {MY_ACCOUNT_EDIT.map(input => (
                        <StFieldText key={input.id}>
                            <p> 
                                { t(input.label) }
                                {' '}
                                :
                            </p>
                            {isEdit.edit
                                ? (
                                <Input
                                    id={input.id}
                                    name={input.id}
                                    onChange={handleOnChange}
                                    value={changeUser[input.id]}
                                    margin='0 5px'
                                    inputHeight="40px"
                                    fontSizeInp="16px"
                                    width='300px'
                                    height='40px'
                                    isDisabled={false}
                                />
                              )
                                : <StMyAccountSignificance>{userInfo[input.id]}</StMyAccountSignificance>
                            }
                        </StFieldText>
                    ))}
                </StMyAccountFieldsConteiner>
            </StMyAccountContent>
            <StMyAccountFooter>
                {isEdit.edit ? (
                    <Button
                        id='apply'
                        name='apply'
                        onClick={handleApplyClick}
                        width='200px'
                        content={t('apply')}
                        fontSize='25px'
                        height='50px'
                    />
                ) : null}
            </StMyAccountFooter>
        </StMyAccountWrapper>
    );
};

MyAccount.propTypes = {
    userInfo: PropTypes.object,
    changeUser: PropTypes.object,
    changeUserData: PropTypes.func,
    setNewUserData: PropTypes.func,
};

export default MyAccount;
