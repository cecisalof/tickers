import React, { useEffect } from 'react';
import Tickers from './Tickers';
import News from './News';

export default function MainLayout(props) {

    const { tickers } = props;
    return (
        <div className="MainLayout">
            <main>
                <div className="text-center main-container">
                    <div className="row align-items-center mt-md-1">
                    </div>
                    <div className='row d-flex align-middle justify-content-center mb-3 tickers'>
                        <Tickers tickers={tickers} />
                    </div>
                </div>
            </main>
        </div>
    )
}
