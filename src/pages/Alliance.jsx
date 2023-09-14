import React from 'react'
import ProgressBar from '../components/ProgressBar';
import News from '../components/News';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Pactometro(props) {
    const { width, scrutiny, news, alliance } = props;

    ChartJS.register(ArcElement, Tooltip, Legend);

    let leftWing = 0;
    let rightWing = 0;

    if (alliance[0] !== undefined) {
        leftWing = alliance[0] && alliance[0].left_wing && alliance[0].left_wing.map(left => left.seats).reduce((a, b) => a + b, 0);
        rightWing = alliance[0] && alliance[0].right_wing && alliance[0].right_wing.map(right => right.seats).reduce((a, b) => a + b, 0);
    }

    const data = [
        { label: "Derecha", value: rightWing !== undefined ? rightWing && rightWing : 0, color: "#004BBC" },
        { label: "Centro", value: 350 - rightWing - leftWing, color: "#fff" },
        { label: "Izquierda", value: leftWing !== undefined ? leftWing && leftWing : 0, color: "#A80000" },
    ];

    const options = {
        cutout: 220,
        rotation: -125,
        circumference: 250,
        tooltips: {
            enabled: false
        },
        legend: {
            display: false
        }
    }

    let rightWingLength = alliance[0] && alliance[0].right_wing && alliance[0].right_wing.length;
    let leftWingLength = alliance[0] && alliance[0].left_wing && alliance[0].left_wing.length;

    const conditionLayout = (electoralWing) => {
        if (rightWingLength !== undefined || leftWingLength !== undefined) {
            switch (electoralWing === 'right_wing' ? rightWingLength : leftWingLength) {
                case 1:
                    return (
                        <div className='row h-100'>
                            <div className='col p-3'>
                                <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[0].logo : alliance[0].left_wing[0].logo} alt="" className='card-logos' />
                            </div>
                        </div>
                    )
                     /* eslint-disable */
                    break;
                case 2:
                    return (
                        <div className='row h-100'>
                            <div className='col p-3'>
                                <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[0].logo : alliance[0].left_wing[0].logo} alt="" className='card-logos' />
                            </div>
                            <div className='col p-3'>
                                <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[1].logo : alliance[0].left_wing[1].logo} alt="" className='card-logos' />
                            </div>
                        </div>
                    )
                     /* eslint-disable */
                    break;
                case 3:
                    return (
                        <div className='row h-100'>
                            <div className='col p-3'>
                                <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[0].logo : alliance[0].left_wing[0].logo} alt="" className='card-logos' />
                            </div>
                            <div className='col p-3'>
                                <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[1].logo : alliance[0].left_wing[1].logo} alt="" className='card-logos' />
                            </div>
                            <div className='col p-3'>
                                <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[2].logo : alliance[0].left_wing[2].logo} alt="" className='card-logos' />
                            </div>
                        </div>
                    )
                     /* eslint-disable */
                    break;
                case 4:
                    return (
                        <>
                            <div className='row h-50'>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[0].logo : alliance[0].left_wing[0].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[1].logo : alliance[0].left_wing[1].logo} alt="" className='card-logos' />
                                </div>
                            </div>
                            <div className='row h-50'>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[2].logo : alliance[0].left_wing[2].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[3].logo : alliance[0].left_wing[3].logo} alt="" className='card-logos' />
                                </div>
                            </div>
                        </>

                    )
                     /* eslint-disable */
                    break;
                case 5:
                    return (
                        <>
                            <div className='row h-50'>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[0].logo : alliance[0].left_wing[0].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[1].logo : alliance[0].left_wing[1].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[2].logo : alliance[0].left_wing[2].logo} alt="" className='card-logos' />
                                </div>
                            </div>
                            <div className='row h-50'>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[3].logo : alliance[0].left_wing[3].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[4].logo : alliance[0].left_wing[4].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                </div>
                            </div>
                        </>

                    )
                     /* eslint-disable */
                    break;
                case 6:
                    return (
                        <>
                            <div className='row h-50'>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[0].logo : alliance[0].left_wing[0].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[1].logo : alliance[0].left_wing[1].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[2].logo : alliance[0].left_wing[2].logo} alt="" className='card-logos' />
                                </div>
                            </div>
                            <div className='row h-50'>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[3].logo : alliance[0].left_wing[3].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[4].logo : alliance[0].left_wing[4].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[5].logo : alliance[0].left_wing[5].logo} alt="" className='card-logos' />
                                </div>
                            </div>
                        </>
                    )
                     /* eslint-disable */
                    break;
                default:
                    return (
                        <>
                            <div className='row h-50'>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[0].logo : alliance[0].left_wing[0].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[1].logo : alliance[0].left_wing[1].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[2].logo : alliance[0].left_wing[2].logo} alt="" className='card-logos' />
                                </div>
                            </div>
                            <div className='row h-50'>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[3].logo : alliance[0].left_wing[3].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <img src={electoralWing === 'right_wing' ? alliance[0].right_wing[4].logo : alliance[0].left_wing[4].logo} alt="" className='card-logos' />
                                </div>
                                <div className='col p-3'>
                                    <p id='other'>Otros</p>
                                </div>
                            </div>
                        </>
                    )
                     /* eslint-disable */
                    break;
            }
        }
    };

    return (
        <div className="pactometro pointer-events-none">
            <main className="blur">
                {/* MAIN first section */}
                <div className="container-full text-center main-container-full">
                    {/* Alliances section */}
                    <div className="row align-items-center h-75 mt-md-1 mx-4 px-4">
                        <div className='col-5 d-block cards-container'>
                            <div className='my-4'>
                                <div className={'right-wing ' + (alliance[0] && alliance[0].right_wing && alliance[0].right_wing.length < 4 ? "one-line" : "" )}>
                                    {conditionLayout('right_wing')}
                                </div>
                                <div className='bg-white border border-dark'>
                                    <p className='text-end fw-extra-bold card-results mx-3 my-0'>{rightWing}</p>
                                </div>
                            </div>
                            <div className='my-4'>
                                <div className={'left-wing ' + (alliance[0] && alliance[0].right_wing && alliance[0].left_wing.length < 4 ? "one-line" : "" )}>
                                    {conditionLayout('left_wing')}
                                </div>
                                <div className='bg-white border border-dark'>
                                    <p className='text-end fw-extra-bold card-results-left mx-3 my-0'>{leftWing}</p>
                                </div>
                            </div>
                        </div>
                        <div className='chart-container col'>
                            <Doughnut
                                options={options}
                                data={{
                                    labels: false,
                                    datasets: [{
                                        data: data.map(d => d.value),
                                        backgroundColor: data.map(d => d.color),
                                        borderWidth: 0
                                    }]
                                }} />
                        </div>
                    </div>
                    <div className='circular-position'>
                        <div id="verticle-line"></div>
                        <div className='circular-container'>
                            <p className="circular-content2 fw-normal"><span className='seats-value mx-2 fw-bold'>350</span>escaños</p>
                            <p className='circular-content'><span className='seats-value mx-2 fw-bold'>175</span>| Mayoría</p>
                        </div>
                    </div>
                    {/* Second section */}
                    <div className="row align-items-center mt-md-1 progress-row">
                        {/* Progess Bar Content */}
                        <ProgressBar width={width} scrutiny={scrutiny} />
                        {/* News columns*/}
                        <News news={news} />
                    </div>
                </div>
            </main >
        </div >
    );
}
