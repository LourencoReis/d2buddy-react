import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Raids from "./pages/Raids";
import Dungeons from "./pages/Dungeons";
import Profile from "./pages/Profile";
import AuthCallback from "./pages/AuthCallback";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raids" element={<Raids />} />
        <Route path="/dungeons" element={<Dungeons />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
