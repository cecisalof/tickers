import './App.css';
import { getTickers } from './services'
import React, { useState, useEffect } from 'react';
import TickersMainPage from './pages/TickersMainPage';

function App() {

  const [tickers, setTickers] = useState({});

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

    if (initialLoad) {
      /* eslint-disable */
      initialLoad = true
      fetchData()
      setInterval(() => { fetchData() }, 3000)
    }
  }, []);

  return (
    <div>
      <TickersMainPage tickers={tickers}/>
    </div>
  );
}

export default App;
