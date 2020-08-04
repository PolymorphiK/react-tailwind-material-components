import React from 'react';

export default function TextField(props) {
    return (
        <div className="relative inline-block h-12">
            <input
                className="md-input"
                required
                pattern=".*"/>
            <label className="md-input-label">
                <span className="md-input-label-inner">Label</span>
            </label>
            <div className="md-input-underline"></div>
        </div>
    );
}