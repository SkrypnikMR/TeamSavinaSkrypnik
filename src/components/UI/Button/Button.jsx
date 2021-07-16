import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StButton } from './styled';
import { useTheme } from '../../Hook/useTheme';

const Button = ({
    id,
    name,
    onClick,
    title,
    type = 'button',
    value,
    borderRadius,
    isDisabled,
    color,
    fontSize,
    fontWeight,
    bgColorDisabled,
    bgColor,
    bgColorHover,
    height,
    width,
    padding,
    margin,
    content,
    transition,
    focusColor,
}) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();

    return (
        <StButton
            id={id}
            name={name}
            onClick={onClick}
            type={type}
            value={value}
            title={title}
            bgColorDisabled={bgColorDisabled}
            borderRadius={borderRadius}
            isDisabled={isDisabled}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            bgColor={bgColor}
            bgColorHover={bgColorHover}
            height={height}
            width={width}
            padding={padding}
            margin={margin}
            transition={transition}
            focusColor={focusColor}
            colors={colors}
            theme={theme}
        >
            {t(content)}
        </StButton>
    );
};

Button.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    borderRadius: PropTypes.string,
    isDisabled: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    bgColor: PropTypes.string,
    bgColorHover: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    content: PropTypes.string,
    transition: PropTypes.string,
    focusColor: PropTypes.string,
    bgColorDisabled: PropTypes.string,
};

export default Button;
