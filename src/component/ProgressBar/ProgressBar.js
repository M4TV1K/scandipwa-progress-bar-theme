import React from 'react';

import { ProgressLine } from '../ProgressLine/ProgressLine';
import { ProgressPoint } from '../ProgressPoint/ProgressPoint';

import './ProgressBar.style.scss';

// eslint-disable-next-line
export const ProgressBar = ({ step, progressPoints }) => {
    const renderProgressPoints = () =>
        // eslint-disable-next-line
        progressPoints.map((point, index) => {
            // eslint-disable-next-line
            if (index + 1 === progressPoints.length) {
                return (
                    <React.Fragment key={ point }>
                        { /* eslint-disable-next-line */ }
                        <ProgressPoint point={ index + 1 } active={ index + 1 <= step } complete={ index + 2 <= step } title={ point } />
                    </React.Fragment>
                );
            }

            return (
                <React.Fragment key={ point }>
                    { /* eslint-disable-next-line */ }
                    <ProgressPoint point={ index + 1 } active={ index + 1 <= step } complete={ index + 2 <= step } title={ point } />
                    { /* eslint-disable-next-line */ }
                    <ProgressLine active={ index + 2 <= step } />
                </React.Fragment>
            );
        });

    return (
        <div className="progress-bar-holder">
            <div className="progress-line first-line activated-line" />
            { renderProgressPoints() }
            { /* eslint-disable-next-line */ }
            <ProgressLine active={ step > progressPoints.length } last={ true } />
        </div>
    );
};

export default ProgressBar;
