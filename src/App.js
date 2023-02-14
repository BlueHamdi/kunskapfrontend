import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login/Login';
import Play from './components/Play/Play';
import HighScores from './components/Highscore/ScoreFetching';
import Layout from './components/Layout';
import styles from './App.module.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in on app start
    axios.get('http://localhost:5000/api/auth', { withCredentials: true })
      .then(response => {
        setLoggedIn(true);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });
      setLoggedIn(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.containerBig}>
      <Layout loggedIn={loggedIn} handleLogout={handleLogout}>
        <h1 className={styles.header}>Upptäck glädjen i matematik</h1>
        <h2 className={styles.underHeader}>"Lär, lek och vinn"</h2>
        <div className={styles.images}>
          <p className={styles.text}>
            Kunskapsvarvet är en plattform som syftar till att göra matematik mer interaktivt och roligt för elever
            genom att ge dem möjlighet att tävla mot varandra. Genom att delta i olika matematiska utmaningar och
            tävlingar kan eleverna utveckla sina kunskaper och färdigheter i ämnet på ett kul och engagerande sätt.
            Plattformen är utformad för elever i olika åldrar och nivåer, så det finns utmaningar och tävlingar som
            passar alla. Målet är att göra matematik mer tillgängligt och attraktivt för eleverna och att hjälpa dem
            att utveckla en positiv inställning till ämnet.
          </p>
        </div>
        <Routes>
          <Route path="/" element={loggedIn ? <Navigate to="/play" /> : loggedIn === false ? <p>Please login to play the game</p> : null} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/play" element={loggedIn ? <Play /> : <Navigate to="/login" />} />
          <Route path="/highscores" element={<HighScores />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
