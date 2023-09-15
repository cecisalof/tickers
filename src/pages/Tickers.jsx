import React from 'react'

export default function Tickers(props) {
  const { tickers } = props;

  return (
    <div className='d-flex align-center'>
      {Array.isArray(tickers) === true && tickers.map(item => {
        return (
        <div className='d-flex m-2 align-items-center' key={item.id}>
          <img className="tickers-icon mx-1" src={item.icon} alt="" />
          <div className='mx-1 text-white'>{item.name}</div>
          <div className={item.last_value < item.current_value ? 'text-danger' : 'text-success'} style={{marginRight: 10, marginLeft: 10}}>{item.current_value.toFixed(2)}</div>
          <div className='d-flex'>
            <div className={Math.sign(item.variation) === 1 ? 'text-success' : 'text-danger'} style={{marginRight: 10}}>{Math.sign(item.variation) === 1 ? item.variation.toFixed(2) : item.variation.toFixed(4)}</div>
            <div className={Math.sign(item.variation) === 1 ? 'text-success' : 'text-danger'} style={{marginRight: 10}}>{item.variation_percentage.toFixed(2) + '%'}</div>
          </div>
        </div>
      )}
      )}
    </div>
  )
}
