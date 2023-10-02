import './App.css';
import { getTickers, getTickersTimming } from './services'
import React, { useState, useEffect } from 'react';
import TickersMainPage from './pages/TickersMainPage';
import News from './pages/News';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'


function App() {
  const [tickers, setTickers] = useState({});
  const [tickersTimming, setTickersTimming] = useState({});
  const [firstCompo, setFirstCompo] = useState(true); // tickers compo
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  console.log(currentItemIndex);

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
      setTimeout(
        () => fetchTimming(),
        1000
      );
      fetchData()
      setInterval(() => { fetchData() }, 15000)
      setInterval(() => { fetchTimming() }, 60000)
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCurrentItemIndex((currentItemIndex + 1)), 1000);
    if (tickersTimming.time_stocks !== undefined && firstCompo) {
      if (currentItemIndex === tickersTimming.time_stocks) {
        setFirstCompo(!firstCompo); // control componente visibility
        setCurrentItemIndex(0); // reset counter
      }
    }
    if (currentItemIndex === tickersTimming.time_news) {
      console.log(tickersTimming.time_news);
      setFirstCompo(!firstCompo); // control componente visibility
      setCurrentItemIndex(0); // reset counter
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
