import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    label: PropTypes.string
};

export default function TextField(props) {
    const {label = ""} = props;

    return (
        <div className="relative inline-block h-12">
            <input
                className="md-input"
                required
                pattern=".*"/>
            <label className="md-input-label">
                <span className="md-input-label-inner">{label}</span>
            </label>
            <div className="md-input-underline"></div>
        </div>
    );
}

TextField.propTypes = propTypes;