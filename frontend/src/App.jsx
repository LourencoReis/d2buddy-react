import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundWrapper from './components/BackgroundWrapper';
import Header from './components/Header';
import Home from './pages/Home';
import Raids from './pages/Raids';
import Dungeons from './pages/Dungeons';
import Profile from './pages/Profile';
import RaidGuide from './pages/RaidGuide';
import AuthCallback from './pages/AuthCallback';
import BungieAuthCallback from './pages/BungieAuthCallback';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <BackgroundWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/raids" element={<Raids />} />
            <Route path="/raids/:raidSlug" element={<RaidGuide />} />
            <Route path="/dungeons/:dungeonSlug" element={<RaidGuide />} />
            <Route path="/dungeons" element={<Dungeons />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/auth/bungie/callback" element={<BungieAuthCallback />} />
          </Routes>
        </BackgroundWrapper>
      </div>
    </Router>
  );
}

export default App;