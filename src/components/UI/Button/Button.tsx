import React from 'react';
import { useTranslation } from 'react-i18next';
import { StButton } from './styled';
import { useTheme } from '../../Hook/useTheme';
import { IButton } from './types';

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
    position,
    right,
} : IButton) => {
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
            position={position}
            right={right}
        >
            {t(content)}
        </StButton>
    );
};

export default Button;
