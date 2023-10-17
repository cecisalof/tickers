import React from 'react';
import Tickers from './Tickers';
import News from './News';

export default function MainLayout(props) {

    const { tickers, firstCompo } = props;

    return (
        <div className="MainLayout">
            <main>
                <div className="text-center main-container">
                    <div className="row align-items-center mt-md-1">
                    </div>
                    <div className='row d-flex align-middle justify-content-center mb-3 tickers'>
                        <div style={{display: true }} >
                            <Tickers tickers={tickers} />
                        </div>
                        {/* <div style={{display: firstCompo && 'none' }}>
                            <News />
                        </div> */}
                    </div>
                </div>
            </main>
        </div>
    )
}
