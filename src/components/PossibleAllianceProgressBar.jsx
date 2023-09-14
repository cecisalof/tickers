import React from 'react'

export default function PossibleAlianceProgressBar(props) {

    let leftWing = 0;
    let rightWing = 0;

    if (props.alliance[0] !== undefined) {
        leftWing = props.alliance[0] && props.alliance[0].left_wing && props.alliance[0].left_wing.map(left => left.seats).reduce((a, b) => a + b, 0);
        rightWing = props.alliance[0] && props.alliance[0].right_wing && props.alliance[0].right_wing.map(right => right.seats).reduce((a, b) => a + b, 0);
    }

    const getPercentage = (value) => {
        return value / 350 * 100;
    }

    return (
        <>
            <div className="progress-stacked m-0 p-0">
                <div className="progress progressRow" role="progressbar" aria-label="Segment one" aria-valuenow={getPercentage(rightWing)} aria-valuemin="0" aria-valuemax="100" style={{ width: getPercentage(rightWing) + '%', height: '80px' }}>
                    <div className="progress-bar right-progress text-end fw-bold">{rightWing}</div>
                </div>
                <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow={(350 - leftWing - rightWing) / 350 * 100} aria-valuemin="0" aria-valuemax="100" style={{ width: (350 - leftWing - rightWing) / 350 * 100 + '%', height: '80px', borderRadius: 0 }}>
                    <div className="progress-bar center-progress"></div>
                </div>
                <div className="progress progressRow" role="progressbar" aria-label="Segment three" aria-valuenow={getPercentage(rightWing)} aria-valuemin="0" aria-valuemax="100" style={{ width: getPercentage(leftWing) + '%', height: '80px' }}>
                    <div className="progress-bar left-progress text-start fw-bold">{leftWing}</div>
                </div>
            </div>
        </>
    )
}
