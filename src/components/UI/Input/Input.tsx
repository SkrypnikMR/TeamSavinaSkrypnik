import React from 'react';
import { useTranslation } from 'react-i18next';
import { StErrorSpan, StInput, StInputContainer, StLabel, StEyeImg } from './styled';
import { IInput } from './types';
import { EYE } from '../baseLayout';

const Input = ({
    id,
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
    eye,
    handleShowPassword,
} : IInput) => {
    const { t } = useTranslation();
    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        onChange({ name: e.target.name, value: e.target.value });
    };
    const inputType = eye ? 'password' : 'text';
    return (
        <StInputContainer width={width} height={height}>
            {!!label && <StLabel htmlFor={id}>{label}</StLabel>}
            <StInput
                id={id}
                name={name}
                type={inputType}
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
            {id === 'password' && <StEyeImg src={EYE} onClick={handleShowPassword} />}
            {id === 'confirm' && <StEyeImg src={EYE} onClick={handleShowPassword}/>}
            {!!errorMessage && <StErrorSpan>{errorMessage}</StErrorSpan>}
        </StInputContainer>
    );
};

export default Input;
