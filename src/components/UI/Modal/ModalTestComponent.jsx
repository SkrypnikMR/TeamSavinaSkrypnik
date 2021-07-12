import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ currentModalType = 'logOut' }) => <div>{currentModalType}</div>;

Component.propTypes = {
    currentModalType: PropTypes.string,
};

export default Component;
