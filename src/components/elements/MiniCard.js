import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Card extends Component {
    render() {
        const { mainStatus, mainCategory, ic } = this.props;
        
        return (
            <div className="mini-card">
                <div className="img-wrapper">
                    <img className="ic" src={ic} alt="" />
                </div>
                <div className="mini-status">
                    <p className="main-status">{mainStatus}</p>
                    <div className="mini-separator"></div>
                    <p className="category-status">{mainCategory}</p>
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
    ic: '',
    mainStatus: 0,
    mainCategory: '',
}

Card.propTypes = {
    ic: PropTypes.string,
    mainStatus: PropTypes.number,
    mainCategory: PropTypes.string,
}

export default Card
