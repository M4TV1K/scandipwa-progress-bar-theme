import React, { useEffect, useRef } from 'react';

/** @namespace ProgressBarTheme/Component/ProgressLine/ProgressLine */
// eslint-disable-next-line
export const ProgressLine = ({ active, last = false }) => {
    // eslint-disable-next-line
    const filledBar = 100;
    const animationSpeed = 5;
    const lineRef = useRef();
    const animateFilling = () => {
        // eslint-disable-next-line
        let fill = 0;
        const animation = () => {
            requestAnimationFrame(() => {
                // eslint-disable-next-line
                lineRef.current.style.backgroundImage = `linear-gradient(to right, darkred ${fill}%, lightgrey 0%)`;
                fill += animationSpeed;
                if (fill <= filledBar) {
                    animation();
                }
            });
        };

        animation();
    };

    useEffect(() => {
        if (active) {
            animateFilling();
        }
    }, [active]);
    // eslint-disable-next-line
    let className = 'progress-line';
    if (!active) {
        if (lineRef.current !== undefined) {
            lineRef.current.style.backgroundImage = 'linear-gradient(to right, darkred 0%, lightgrey 0%)';
        }
    }
    if (last) {
        className += ' last-line';
    } else {
        className += ' middle-line';
    }

    return (
        <div ref={ lineRef } className={ className } />
    );
};

export default ProgressLine;
