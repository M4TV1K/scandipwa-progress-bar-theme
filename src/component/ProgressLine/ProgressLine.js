import React, { useEffect } from 'react';

/** @namespace ProgressBarTheme/Component/ProgressLine/ProgressLine */
// eslint-disable-next-line
export const ProgressLine = ({ active, last = false }) => {
    useEffect(() => {
    }, [active]);
    // eslint-disable-next-line
    let className = 'progress-line';
    if (active) {
        className += ' activated-line';
    }
    if (last) {
        className += ' last-line';
    } else {
        className += ' middle-line';
    }

    return (
        <div className={ className } />
    );
};

export default ProgressLine;
