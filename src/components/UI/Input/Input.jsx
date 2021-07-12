import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StErrorSpan, StInput, StInputContainer, StLabel } from './styled';

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
    onKeyUpEnter,
    maxLength,
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
}) => {
    const { t } = useTranslation();
    const handleOnchange = e => onChange({ name: e.target.name, value: e.target.value });
    const handleOnKeyUpEnter = (e) => {
        if (e.key === 'Enter') if (onKeyUpEnter) onKeyUpEnter();
    };
    return (
        <StInputContainer width={width} height={height}>
            {!!label && <StLabel htmlFor={id}>{label}</StLabel>}
            <StInput
                id={id}
                name={name}
                type={type}
                value={value}
                margin={margin}
                color={color}
                onChange={handleOnchange}
                maxLength={maxLength}
                borderRadius={borderRadius}
                inputHeight={inputHeight}
                placeholder={t(placeholder)}
                bgColor={bgColor}
                padding={padding}
                onKeyUp={handleOnKeyUpEnter}
                borderColor={borderColor}
                fontSizeInp={fontSizeInp}
                bgFocusColor={bgFocusColor}
            />
            {!!errorMessage && <StErrorSpan>{errorMessage}</StErrorSpan>}
        </StInputContainer>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.string,
    value: PropTypes.string,
    margin: PropTypes.string,
    height: PropTypes.string,
    bgColor: PropTypes.string,
    padding: PropTypes.string,
    fontSizeInp: PropTypes.string,
    borderColor: PropTypes.string,
    inputHeight: PropTypes.string,
    maxLength: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    borderRadius: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    bgFocusColor: PropTypes.string,
    onKeyUpEnter: PropTypes.func,
    color: PropTypes.string,
};

export default Input;
