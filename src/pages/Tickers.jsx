import { logDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react'

export default function Tickers(props) {
  const { tickers } = props;

  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
  const marqueeContent = document.querySelector("ul.marquee-content");
  const [randomIndex, setRandomIndex] = useState(marqueeElementsDisplayed);
  console.log('randomIndex', randomIndex);
  const alteration = 0.01;

  const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    setRandomIndex(Math.floor(Math.random() * (max - min + 1)) + min);
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  }


  useEffect(() => {
    if (marqueeContent !== null) {
      root.style.setProperty("--marquee-elements", marqueeContent.children.length);

      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
      }
    }
  }, [marqueeContent])

  let initialLoad = true
  let isLoading = false
  useEffect(() => {
    const randomAlteration = () => {
      if (!isLoading) {
        /* eslint-disable */
        isLoading = true
        getRandomArbitrary(0, marqueeElementsDisplayed);
        isLoading = false
      }
    };

    if (initialLoad) {
      /* eslint-disable */
      initialLoad = true
      setInterval(() => { randomAlteration() }, 2000)
    }
  }, []);

  return (
    <div className='d-flex align-center marquee'>
      <ul className='marquee-content'>
        {Array.isArray(tickers) === true && tickers.map((item, index) => {
          
          /* ----------------- class and value conditions ---------------------- */
          const styleCondition = item.last_value < item.current_value ? 'text-danger blink' : item.last_value > item.current_value ? 'text-success blink' : 'text-light blink';

          const styleCondition2 = Math.sign(item.variation) === 1 ? 'text-success' : 'text-danger';

          const decimalCondition = Math.sign(item.variation) === 1 && item.name === 'EUR/USD' ? '+' + item.variation.toFixed(4) : Math.sign(item.variation) === 1 && !item.name !== 'EUR/USD' ? '+' + item.variation.toFixed(2) : Math.sign(item.variation) !== 1 && item.name === 'EUR/USD' ? item.variation.toFixed(4) : item.variation.toFixed(2);

          const decimalCondition2 = Math.sign(item.variation_percentage) === 1 && item.name === 'EUR/USD' ? '( +' + item.variation_percentage.toFixed(3) + '%)' : Math.sign(item.variation_percentage) === 1 && !item.name !== 'EUR/USD' ? '( +' + item.variation_percentage.toFixed(2) + '%)' : Math.sign(item.variation_percentage) !== 1 && item.name == 'EUR/USD' ? '(' + item.variation_percentage.toFixed(3) + '%)' : '(' + item.variation_percentage.toFixed(2) + '%)';

          const decimalConditionAlteration = Math.sign(item.variation) === 1 && item.name === 'EUR/USD' ? '+' + (item.variation + alteration).toFixed(4) : Math.sign(item.variation) === 1 && !item.name !== 'EUR/USD' ? '+' + (item.variation + alteration).toFixed(2) : Math.sign(item.variation) !== 1 && item.name === 'EUR/USD' ? (item.variation + alteration).toFixed(4) : (item.variation + alteration).toFixed(2); 

          const decimalCondition2Alteration = Math.sign(item.variation_percentage) === 1 && item.name === 'EUR/USD' ? '( +' + (item.variation_percentage + alteration).toFixed(3) + '%)' : Math.sign(item.variation_percentage) === 1 && !item.name !== 'EUR/USD' ? '( +' + (item.variation_percentage + alteration).toFixed(2) + '%)' : Math.sign(item.variation_percentage) !== 1 && item.name == 'EUR/USD' ? '(' + (item.variation_percentage + alteration).toFixed(3) + '%)' : '(' + (item.variation_percentage + alteration).toFixed(2) + '%)';
          /* --------------------------------------------------------------- */


          if (randomIndex === index) {
            return (
              <li className='d-flex align-items-center ticker' key={item.id}>
                <img className="tickers-icon mx-2" src={item.icon} alt="" />
                <div className='mx-1 text-white'>{item.name}</div>
                <div className={styleCondition} style={{ marginRight: 5, marginLeft: 5 }}>
                  {item.name === 'EUR/USD' ? (item.current_value + alteration).toFixed(4) : (item.current_value + alteration).toFixed(2)}
                </div>
                <div className={styleCondition2} style={{ marginRight: 5, marginLeft: 5 }}>
                  {decimalConditionAlteration}
                </div>
                <div className={styleCondition2} style={{ marginRight: 5, marginLeft: 5 }}>
                  {decimalCondition2Alteration}
                </div>
              </li>
            )
          } else {
            return (
              <li className='d-flex align-items-center ticker' key={item.id}>
                <img className="tickers-icon mx-2" src={item.icon} alt="" />
                <div className='mx-1 text-white'>{item.name}</div>
                <div className={item.last_value < item.current_value ? 'text-danger' : item.last_value > item.current_value ? 'text-success' : 'text-light'} style={{ marginRight: 5, marginLeft: 5 }}>
                  {item.name === 'EUR/USD' ? item.current_value.toFixed(4) : item.current_value.toFixed(2)}
                </div>
                <div className={styleCondition2} style={{ marginRight: 5, marginLeft: 5 }}>
                  {decimalCondition}
                </div>
                <div className={styleCondition2} style={{ marginRight: 5, marginLeft: 5 }}>
                  {decimalCondition2}
                </div>
              </li>
            )
          }
        }
        )}
      </ul>
    </div>
  )
}