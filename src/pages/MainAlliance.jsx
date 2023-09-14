import React from 'react';
import ProgressBar from "../components/ProgressBar";
import News from "../components/News";
import AllianceProgressBar from "../components/AllianceProgressBar.jsx";
import PartyFlags from '../components/PartyFlags';

export default function MainAlliance(props) {

    const { width, news, scrutiny, mainAlliance } = props;

    const politicalPartiesLeft = mainAlliance && mainAlliance[0] && mainAlliance[0].left_wing;
    const politicalPartiesRight = mainAlliance && mainAlliance[0] && mainAlliance[0].right_wing;

    return (
        <div className="MainAlliance">
            <main>
                {/* MAIN first section */}
                <div className="container text-center main-container">
                    {/* Content card */}
                    <div className="row align-items-center mt-md-1">
                        {/* Progess Bar Content */}
                        <ProgressBar width={width} scrutiny={scrutiny} />
                        {/* News columns*/}
                        <News news={news} />
                    </div>
                    {/* MAIN second section */}
                    <div className='row d-flex align-middle justify-content-center'>
                        <div className='col-2'>
                            <PartyFlags politicalParties={politicalPartiesRight} isPolls={null}/>
                        </div>
                        <div className='col-8'>
                            <AllianceProgressBar mainAlliance={mainAlliance} />
                        </div>
                        <div className='col-2'>
                            <PartyFlags politicalParties={politicalPartiesLeft} isPolls={null}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
