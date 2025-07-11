import React from 'react';
import MainLayout from './MainLayout';

export default function TickersMainPage(props) {
    const { tickers, firstCompo } = props;

    return (
        <div className="App pointer-events-none">

            <header className="App-header">
            </header>
            <main>
                <MainLayout tickers={tickers} firstCompo={firstCompo} />
            </main>
        </div>
    )
}
