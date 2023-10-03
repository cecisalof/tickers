import './App.css';
import { getTickers, getTickersTimming } from './services'
import React, { useState, useEffect } from 'react';
import TickersMainPage from './pages/TickersMainPage';

function App() {
  const [tickers, setTickers] = useState({});
  const [tickersTimming, setTickersTimming] = useState({});
  const [firstCompo, setFirstCompo] = useState(true); // tickers compo
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const getTickersInfo = async () => {
    try {
      const data = await getTickers();
      if (data !== undefined) {
        setTickers(data.results);
      }

    } catch (error) {
      setTickers({});
      console.log('No hay datos para mostrar.');
    }
  };

  const getTickersControl = async () => {
    try {
      const data = await getTickersTimming();
      if (data !== undefined) {
        setTickersTimming(data);
        setCurrentItemIndex(0); // reset counter to avoid errors
      }

    } catch (error) {
      setTickersTimming({});
      console.log('No hay datos para mostrar.');
    }
  };

  let initialLoad = true
  let isLoading = false

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) {
        /* eslint-disable */
        isLoading = true
        try {
          await getTickersInfo();
        } catch (error) {
          console.log('Error al obtener los datos:', error);
        }
        isLoading = false
      }
    };

    const fetchTimming = async () => {
        try {
          await getTickersControl();
        } catch (error) {
          console.log('Error al obtener los datos:', error);
        }
    };

    if (initialLoad) {
      /* eslint-disable */
      initialLoad = true
      fetchData()
      fetchTimming()
      setInterval(() => { fetchData() }, 15000)
      setInterval(() => { fetchTimming() }, 60000)
    }
  }, []);

  useEffect(() => {
  
    const interval = setInterval(() => setCurrentItemIndex((currentItemIndex + 1)), 1000);

    if (tickersTimming.time_stocks !== undefined && firstCompo === true) {
      if (currentItemIndex === tickersTimming.time_stocks) {
        setFirstCompo(false); // control componente visibility
        setCurrentItemIndex(0); // reset counter
      }
    }
    if (tickersTimming.time_news !== undefined && firstCompo === false) {
      if (currentItemIndex === tickersTimming.time_news) {
        setFirstCompo(true); // control componente visibility
        setCurrentItemIndex(0); // reset counter
      } 
    }

    return () => {
      clearInterval(interval);
    };

  }, [currentItemIndex]);

  return (
    <div>
      <TickersMainPage tickers={tickers} firstCompo={firstCompo} />
    </div>

  );
}

export default App;
