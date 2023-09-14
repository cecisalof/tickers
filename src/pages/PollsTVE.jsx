import React from 'react'
import News from "../components/News";
import PartyFlags from "../components/PartyFlags.jsx";

export default function PollsTVE(props) {

    const {width, news, polls} = props;
    const politicalPartiesPollsTVE = polls && polls[1] && polls[1].forecast.map(party => party);
    
    return (
        <div className="PartiesScrutiny">
            <main>
                {/* MAIN first section */}
                <div className="container text-center main-container">
                    {/* Content card */}
                    <div className="row align-items-center mt-md-1 my-2">
                        {/* Polls Content */}
                        <div className='col-lg-2 divider2 pe-5 mx-lg-3 my-lg-1 my-md-0 order-container'>
                            <p className='text-uppercase text-end fs-3 mb-0'>Sondeo</p>
                            <p className='text-uppercase text-end fs-3 seats-value'>TVE</p>
                        </div>
                        {/* News columns*/}
                        <News news={news} />
                    </div>
                    {/* MAIN second section */}
                    {politicalPartiesPollsTVE !== undefined && 
                        <PartyFlags width={width} politicalParties={politicalPartiesPollsTVE} isPolls={'tve'}/>
                    }
                </div>
            </main>
        </div>
    );
}
