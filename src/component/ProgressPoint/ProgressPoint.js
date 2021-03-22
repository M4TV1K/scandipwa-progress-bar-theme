import React from 'react';

/** @namespace ProgressBarTheme/Component/ProgressPoint/ProgressPoint */
// eslint-disable-next-line react/prop-types
export const ProgressPoint = ({ point, title, active }) => {
    // eslint-disable-next-line no-console,no-unused-vars
    const renderPoint = () => {
        if (active) {
            return <p className="point active-point">{ point }</p>;
        }

        return <p className="point">{ point }</p>;
    };

    return (
        <div className="step-point-holder">
            { renderPoint() }
            <p className="step-title">{ title }</p>
        </div>
    );
};

export default ProgressPoint;
