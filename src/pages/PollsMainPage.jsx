import React from 'react';
import PollsTVE from './PollsTVE';
import PollsIntereconomia from './PollsIntereconomia';

export default function PollsMainPage(props) {
    const { width, news, pollsVisible1, pollsVisible2, polls } = props;

    return (
        <div className="App pointer-events-none">
            <header className="App-header">
            </header>
            <main>
                {pollsVisible1 && polls !== undefined && <PollsTVE polls={polls} news={news} width={width} />}
                {pollsVisible2 && polls !== undefined && <PollsIntereconomia news={news} width={width} polls={polls} />}
            </main>
        </div>
    )
}
