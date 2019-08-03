import React, { Component } from 'react';
import PropTypes, { any } from 'prop-types';

export class Button extends Component {

    render() {
        const { children, className, onClick, title } = this.props;

        return (
            <button className={className} onClick={onClick} title={title}>
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    title: '',
    className: '',
    children: any,
    onClick: () => {}
}

Button.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func

}

export default Button
