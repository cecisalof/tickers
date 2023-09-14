import React from 'react';
import PossibleAlianceProgressBar from "../components/PossibleAllianceProgressBar";
import PartyFlags from '../components/PartyFlags';

export default function PossibleAlliance(props) {

    const { scrutiny, alliance } = props;

    const politicalPartiesLeft = alliance && alliance[0] && alliance[0].left_wing;
    const politicalPartiesRight = alliance && alliance[0] && alliance[0].right_wing;

    return (
        <div className="PossibleAlliance">
            <main>
                <div className="text-center main-container">
                    <div className='row'>
                        <p className='fw-500 fs-4 text-uppercase seats-value'><span className='mx-3 text-dark'>Congreso escrutado</span>{scrutiny && scrutiny[0] && scrutiny[0].scrutiny + '%'}</p>
                    </div>
                    <div className='row d-flex align-middle justify-content-center'>
                        <div className='m-0 p-0'>
                            <PossibleAlianceProgressBar alliance={alliance} />
                        </div>
                    </div>
                    <div className='container d-flex mt-3'>
                        <div className='flex-grow-2 right-parties'>
                            <PartyFlags politicalParties={politicalPartiesRight} />
                        </div>
                        <div className='flex-grow-1 blank'>
                            <div>
                                <div id="verticle-line3"></div>
                                <p className='fw-bold fs-2 mt-4'>175</p>
                                <div id="verticle-line4"></div>
                            </div>
                        </div>
                        <div className='flex-grow-2 left-parties'>
                            <PartyFlags politicalParties={politicalPartiesLeft} />
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}
