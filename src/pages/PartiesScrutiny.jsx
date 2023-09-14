import React from 'react'
import ProgressBar from "./../components/ProgressBar";
import News from "./../components/News";
import PartyFlags from "./../components/PartyFlags.jsx";

export default function PartiesScrutiny(props) {

    const {width, news, politicalParties, scrutiny} = props;
    return (
        <div className="PartiesScrutiny">
            <main>
                {/* MAIN first section */}
                <div className="container text-center main-container">
                    {/* Content card */}
                    <div className="row align-items-center mt-md-1 my-1">
                        {/* Progess Bar Content */}
                        <ProgressBar width={width} scrutiny={scrutiny} />
                        {/* News columns*/}
                        <News news={news} />
                    </div>
                    {/* MAIN second section */}
                    <PartyFlags width={width} politicalParties={politicalParties} partiesDisplayedStartingAt={6} isPolls={null}/>
                </div>
            </main>
        </div>
    );
}
