import React from 'react'
import senate from '../assets/logos/senate.png';
import congress from '../assets/logos/congress.png';

export default function ProgressBar(props) {
    const { scrutiny, isSenate=false } = props;

    const finalScrutiny = scrutiny[0] && scrutiny[0].scrutiny;
    return (
        <div className="col-3 divider px-5 mx-3 my-1 order-container">
            <div className="row align-items-center p-0 m-0">
                <div className="col-7 p-0 m-0">
                    <p className='progress-bar-content mb-3'><img alt="" className="icon-scrutiny me-2" src={isSenate? senate : congress} /> {isSenate?"Senado":"Congreso"}</p>
                </div>
                <div className="col-5">
                    <div className="row align-items-center text-start">
                        <div className="col-4">
                            {finalScrutiny !== undefined ? (
                                <p className='progress-bar-text me-2'>{`${finalScrutiny.toString().replace('.', ',')}%`}<span className='scrutinized ms-2'>esc.</span></p>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            {/* Progess Bar */}
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${finalScrutiny}%` }} aria-valuenow={finalScrutiny} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}
