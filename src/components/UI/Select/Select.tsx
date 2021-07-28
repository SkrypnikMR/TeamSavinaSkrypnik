import React from 'react';
// import { useTranslation } from 'react-i18next';
import { StSelect } from './styled';

const Select = ({
    onChange,
    options,
    value,
}) => {
    return (
        <StSelect onChange={onChange} value={value}>
            { options.map((item) => <option key={item} label={item}>{item}</option>) }
        </StSelect>
    );
};

export default Select;
