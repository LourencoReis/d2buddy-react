import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

// Protected Route component - requires Bungie auth
function ProtectedRoute({ children }) {
  const bungieData = localStorage.getItem('bungie_data');
  
  if (!bungieData) {
    // Redirect to home if not logged in with Bungie
    return <Navigate to="/" replace />;
  }
  
  return children;
}

function App() {
  return (
    <Router>
      <div className="App">
        <BackgroundWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/auth/bungie/callback" element={<BungieAuthCallback />} />
            
            {/* Protected routes - require Bungie login */}
            <Route path="/raids" element={<ProtectedRoute><Raids /></ProtectedRoute>} />
            <Route path="/raids/:raidSlug" element={<ProtectedRoute><RaidGuide /></ProtectedRoute>} />
            <Route path="/dungeons" element={<ProtectedRoute><Dungeons /></ProtectedRoute>} />
            <Route path="/dungeons/:dungeonSlug" element={<ProtectedRoute><RaidGuide /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Routes>
        </BackgroundWrapper>
      </div>
    </Router>
  );
}

export default App;