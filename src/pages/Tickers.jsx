import React, { useEffect } from 'react'

export default function Tickers(props) {
  const { tickers } = props;

  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
  const marqueeContent = document.querySelector("ul.marquee-content");

  useEffect(() => {
    if (marqueeContent !== null) {
      root.style.setProperty("--marquee-elements", marqueeContent.children.length);

      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
      }
    }
  }, [marqueeContent])

  return (
    <div className='d-flex align-center marquee'>
      <ul className='marquee-content'>
        {Array.isArray(tickers) === true && tickers.map(item => {
          return (
            <li className='d-flex align-items-center' key={item.id}>
              <img className="tickers-icon mx-2" src={item.icon} alt="" />
              <div className='mx-1 text-white'>{item.name}</div>
              <div className={item.last_value < item.current_value ? 'text-danger' : 'text-success'} style={{ marginRight: 5, marginLeft: 5 }}>{item.current_value.toFixed(2)}</div>
              <div className={Math.sign(item.variation) === 1 ? 'text-success' : 'text-danger'} style={{ marginRight: 5, marginLeft: 5 }}>{Math.sign(item.variation) === 1 ? item.variation.toFixed(2) : item.variation.toFixed(4)}</div>
                <div className={Math.sign(item.variation) === 1 ? 'text-success' : 'text-danger'} style={{ marginRight: 5, marginLeft: 5 }}>{item.variation_percentage.toFixed(2) + '%'}</div>
            </li>
          )
        }
        )}
      </ul>
    </div>
  )
}
