import React from 'react';
import ReactDOM from 'react-dom';
import { TReactNode } from './types';

class Portal extends React.Component {
    render() {
        const { children }:TReactNode = this.props;
        return ReactDOM.createPortal(children, document.getElementById('portal'));
    }
}

export default Portal;
