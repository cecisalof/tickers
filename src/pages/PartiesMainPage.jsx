import React from 'react';
import PartiesScrutiny from './PartiesScrutiny';
import MainPartiesScrutiny from './MainPartiesScrutiny';
import MainAlliance from './MainAlliance';
import PossibleAlliance from './PossibleAlliance';

export default function PartiesMainPage(props) {
    const { width, news, politicalParties, scrutiny, visibleComponent1, visibleComponent2, visibleComponent3, visibleComponent4, mainAlliance, alliance  } = props;

    return (
        <div className="App pointer-events-none">
            <header className="App-header">
            </header>
            <main>
                {visibleComponent1 && <MainPartiesScrutiny news={news} width={width} politicalParties={politicalParties} scrutiny={scrutiny} />}
                {visibleComponent2 && <PartiesScrutiny news={news} width={width} politicalParties={politicalParties} scrutiny={scrutiny} />}
                {visibleComponent3 && <MainAlliance news={news} width={width} politicalParties={politicalParties} scrutiny={scrutiny}  mainAlliance={mainAlliance}/> }
                {visibleComponent4 && <PossibleAlliance news={news} width={width} politicalParties={politicalParties} scrutiny={scrutiny}  alliance={alliance} /> }
            </main>
        </div>
    )
}
