import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StErrorSpan, StInput, StInputContainer, StLabel, StEyeImg } from './styled';
import { IInput } from './types';
import { EYE } from '../baseLayout';

const Input = ({
    id,
    type = 'text',
    name,
    width,
    label,
    value,
    height,
    margin,
    onChange,
    inputHeight,
    borderRadius,
    bgColor,
    padding,
    color,
    bgFocusColor,
    fontSizeInp,
    borderColor,
    placeholder,
    errorMessage,
} : IInput) => {
    const { t } = useTranslation();
    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        onChange({ name: e.target.name, value: e.target.value });
    };
    const [typeInp, setType] = useState('text');
    const handleShowPassword = () => { setType(typeInp === 'password' ? 'text' : 'password'); console.log(typeInp); };
    return (
        <StInputContainer width={width} height={height}>
            {!!label && <StLabel htmlFor={id}>{label}</StLabel>}
            <StInput
                id={id}
                name={name}
                type={typeInp}
                value={value}
                margin={margin}
                color={color}
                onChange={handleOnchange}
                borderRadius={borderRadius}
                inputHeight={inputHeight}
                placeholder={t(placeholder)}
                bgColor={bgColor}
                padding={padding}
                borderColor={borderColor}
                fontSizeInp={fontSizeInp}
                bgFocusColor={bgFocusColor}
            />
            {(id === 'password' || id === 'confirm') && <StEyeImg src={EYE} onClick={handleShowPassword}/>}
            {!!errorMessage && <StErrorSpan>{errorMessage}</StErrorSpan>}
        </StInputContainer>
    );
};

export default Input;
