import React from 'react'
import ProgressBar from "../components/ProgressBar";
import News from "../components/News";
import PartyFlags from "../components/PartyFlags.jsx";

export default function Senate(props) {

    const {width, news, politicalParties, scrutiny} = props;
    
    return (
        <div className="Senate pointer-events-none">
            <main>
                {/* MAIN first section */}
                <div className="container text-center main-container">
                    {/* Content card */}
                    <div className="row align-items-center mt-md-1 my-1 mx-3">
                        {/* Progess Bar Content */}
                        <ProgressBar isSenate={true} scrutiny={scrutiny} />
                        {/* News columns*/}
                        <News news={news} />
                    </div>
                    {/* MAIN second section */}
                    <PartyFlags isSenate={true} width={width} politicalParties={politicalParties} isPolls={null}/>
                </div>
            </main>
        </div>
    );
}
