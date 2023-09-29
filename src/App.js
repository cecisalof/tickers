import './App.css';
import { getTickers, getTickersTimming } from './services'
import React, { useState, useEffect } from 'react';
import TickersMainPage from './pages/TickersMainPage';
import News from './pages/News';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [tickers, setTickers] = useState({});
  const [tickersTimming, setTickersTimming] = useState({});

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
    if (location.pathname == '/') {
      if (tickersTimming.time_stocks !== undefined) {
        let timingStocks = Number(`${tickersTimming.time_stocks}000`);
        setTimeout(() => {
          navigate('/news')
        }, timingStocks);
      }
    } else if (location.pathname == '/news') {
      if (tickersTimming.time_news !== undefined) {
        let timingNews = Number(`${tickersTimming.time_news}000`);
        setTimeout(() => {
          navigate('/')
        }, timingNews)
      }
    }
  }, [tickersTimming, location])

  return (
    <Routes>
      <Route path="/" element={<TickersMainPage tickers={tickers} />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}

export default App;
