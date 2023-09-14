import './App.css';
import { Routes, Route } from 'react-router-dom'
import { getNew, getNewSenate, getPoliticalParties, getScrutiny, getScrutinySenate, 
  getAlliance, 
  getMainAlliance,
  getNewPolls,
  getPollsValue
 } from './services'
import React, { useState, useEffect, useSyncExternalStore } from 'react';
import Alliance from './pages/Alliance';
import Senate from './pages/Senate';
import PartiesMainPage from './pages/PartiesMainPage';
import PollsMainPage from './pages/PollsMainPage';

function App() {

  const [news, setNews] = useState({});
  const [newsSenate, setNewsSenate] = useState({});
  const [newsPolls, setNewsPolls] = useState({});
  const [politicalParties, setPoliticalParties] = useState([]);
  const [scrutiny, setScrutiny] = useState({});
  const [scrutinySenate, setScrutinySenate] = useState({});
  const [alliance, setAlliance] = useState([]);
  const [mainAlliance, setMainAlliance] = useState([]);
  const [polls, setPolls] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentItemIndex2, setCurrentItemIndex2] = useState(0);
  const [visibleComponent1, setVisibleComponent1] = useState(true);
  const [visibleComponent2, setVisibleComponent2] = useState(false);
  const [visibleComponent3, setVisibleComponent3] = useState(false);
  const [visibleComponent4, setVisibleComponent4] = useState(false);
  const [pollsVisible1, setPollsVisible1] = useState(true);
  const [pollsVisible2, setPollsVisible2] = useState(false);

  const store = {
    size: {
      height: undefined,
      width: undefined
    }
  };

  function getSnapshot() {
    if (
      store.size.height !== window.innerHeight ||
      store.size.width !== window.innerWidth
    ) {
      store.size = { height: window.innerHeight, width: window.innerWidth };
    }
    return store.size;
  }

  function subscribe(callback) {
    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", callback);
    };
  }

  const { width } = useSyncExternalStore(subscribe, getSnapshot);

  const getNews = async () => {
    try {
      const data = await getNew();
      if (data !== undefined) {
        setNews(data.results[0]);
      }

    } catch (error) {
      setNews({});
      console.log('No hay datos para mostrar.');
    }
  };

  const getNewsSenate = async () => {
    try {
      const data = await getNewSenate();
      if (data !== undefined) {
        setNewsSenate(data.results[0]);
      }

    } catch (error) {
      setNewsSenate({});
      console.log('No hay datos para mostrar.');
    }
  };

  const getNewsPolls = async () => {
    try {
      const data = await getNewPolls();
      if (data !== undefined) {
        setNewsPolls(data.results[0]);
      }

    } catch (error) {
      setNewsPolls({});
      console.log('No hay datos para mostrar.');
    }
  };

  const getParties = async () => {
    try {
      const data = await getPoliticalParties();
      if (data !== undefined) {
        setPoliticalParties(data.results);
      }

    } catch (error) {
      setPoliticalParties([]);
      console.log('No hay datos para mostrar.');
    }
  }

  const getScrutinyPercentage = async () => {
    try {
      const data = await getScrutiny();
      if (data !== undefined) {
        setScrutiny(data.results);
      }

    } catch (error) {
      setScrutiny([]);
      console.log('No hay datos para mostrar.');
    }
  }

  const getScrutinySenatePercentage = async () => {
    try {
      const data = await getScrutinySenate();
      if (data !== undefined) {
        setScrutinySenate(data.results);
      }

    } catch (error) {
      setScrutinySenate([]);
      console.log('No hay datos para mostrar.');
    }
  }

  const getAlliances = async () => {
    try {
      const data = await getAlliance();
      if (data !== undefined) {
        setAlliance(data.results);
      }

    } catch (error) {
      setAlliance([]);
      console.log('No hay datos para mostrar.');
    }
  }

  const getMainAlliances = async () => {
    try {
      const data = await getMainAlliance();
      if (data !== undefined) {
        setMainAlliance(data.results);
      }

    } catch (error) {
      setMainAlliance([]);
      console.log('No hay datos para mostrar.');
    }
  }

  const getPolls = async () => {
    try {
      const data = await getPollsValue();
      if (data !== undefined) {
        setPolls(data);
      }

    } catch (error) {
      setPolls([]);
      console.log('No hay datos para mostrar.');
    }
  }


  let initialLoad = true
  let isLoading = false
  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) {
        /* eslint-disable */
        isLoading = true
        try {
          await getNews();
          await getNewsSenate();
          await getParties();
          await getScrutinyPercentage();
          await getScrutinySenatePercentage();
          await getAlliances();
          await getMainAlliances();
          await getNewsPolls();
          await getPolls();
        } catch (error) {
          console.log('Error al obtener el dato de invoiceCount:', error);
        }
        isLoading = false
      }
    };

    if (initialLoad) {
      /* eslint-disable */
      initialLoad = true
      fetchData()
      setInterval(() => { fetchData() }, 30000)
    }
  }, []);

  useEffect(() => {
    // 5 second interval 
    const id = setTimeout(
      () => setCurrentItemIndex((currentItemIndex + 1) % 17),
      5000
    );

    if (currentItemIndex == 0) {
      setVisibleComponent1(true);
      setVisibleComponent2(false);
      setVisibleComponent3(false);
      setVisibleComponent4(false);
    } else if (currentItemIndex == 6) { // 30 seconds / 5 seconds = 6 cicles of 5 seconds 
      setVisibleComponent1(false);
      setVisibleComponent2(true);
      setVisibleComponent3(false);
      setVisibleComponent4(false);
    } else if (currentItemIndex == 9) { // 15 seconds / 5 seconds = 3 cicles of 5 seconds (plus 6 cicles = 9)
      setVisibleComponent1(false);
      setVisibleComponent2(false);
      setVisibleComponent3(true);
      setVisibleComponent4(false);
     } else if (currentItemIndex == 13) { // 20 seconds
      setVisibleComponent1(false);
      setVisibleComponent2(false);
      setVisibleComponent3(false);
      setVisibleComponent4(true);
     } // 20 seconds / 5 seconds = 4 cicles of 5 seconds (plus 13 cicles = 17)

    return () => {
      clearInterval(id); // removes React warning when gets unmounted
    };
  }, [currentItemIndex]);

  useEffect(() => {
    // 5 second interval 
    const id = setTimeout(
      () => setCurrentItemIndex2((currentItemIndex2 + 1) % 8),
      5000
    );

    if (currentItemIndex2 == 0) {
      setPollsVisible1(true);
      setPollsVisible2(false);
    } else if (currentItemIndex2 == 4) { // 20 seconds / 5 seconds = 4 cicles of 5 seconds 
      setPollsVisible1(false);
      setPollsVisible2(true);
    }

    return () => {
      clearInterval(id); // removes React warning when gets unmounted
    };
  }, [currentItemIndex2]);

  return (
    <Routes>
      <Route path="/congreso" element={<PartiesMainPage visibleComponent1={visibleComponent1} 
        visibleComponent2={visibleComponent2} 
        visibleComponent3={visibleComponent3} 
        visibleComponent4={visibleComponent4} 
        news={news} width={width} politicalParties={politicalParties} scrutiny={scrutiny} mainAlliance={mainAlliance}  alliance={alliance} />} />
      <Route path="/pactos" element={<Alliance news={news} width={width} scrutiny={scrutiny} alliance={alliance} />} />
      <Route path="/senado" element={<Senate news={newsSenate} width={width} scrutiny={scrutinySenate} politicalParties={politicalParties}/>} />
      <Route path="/sondeos" element={<PollsMainPage polls={polls} news={newsPolls} width={width} pollsVisible1={pollsVisible1} pollsVisible2={pollsVisible2} />}/>
    </Routes>
  );
}

export default App;
