import React from 'react'

export default function Tickers(props) {
  const { tickers } = props;
  console.log(tickers);
  return (
    <div className='d-flex align-center'>
      {tickers.lenght !== 0 && tickers.map(item => {
        return (
        <div className='d-flex m-2 align-items-center'>
          <img className="tickers-icon mx-1" src={item.icon} alt="" />
          <div className='mx-1 text-white'>{item.name}</div>
          <div className='mx-2 text-white'>{item.last_value.toFixed(1)}</div>
          <div className='d-flex'>
            <div className={Math.sign(item.variation) == 1 ? 'text-success' : 'text-danger'} style={{marginRight: 10}}>{Math.sign(item.variation) == 1 ? item.variation.toFixed(2) : item.variation.toFixed(4)}</div>
            <div className={Math.sign(item.variation) == 1 ? 'text-success' : 'text-danger'} style={{marginRight: 10}}>{item.variation_percentage.toFixed(2) + '%'}</div>
          </div>
        </div>
      )}
      )}
    </div>
  )
}
