import React from 'react';
import Tickers from './Tickers';

export default function MainLayout(props) {

    const { tickers } = props;

    return (
        <div className="MainLayout">
            <main>
                {/* MAIN first section */}
                <div className="text-center main-container">
                    {/* Content banner */}
                    <div className="row align-items-center mt-md-1">
                    </div>
                    {/* MAIN second section */}
                    <div className='row d-flex align-middle justify-content-center mb-3 tickers'>
                        <div className='col d-flex'>
                            <Tickers tickers={tickers}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
