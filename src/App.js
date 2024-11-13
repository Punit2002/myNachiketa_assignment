import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './components/profile';
import Leaderboard from './components/leaderboards';
import Tournament from './components/tournaments';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Lichess Web Application</h1>
        <nav>
          <Link to="/profile">Profile</Link> |{' '}
          <Link to="/leaderboards">Leaderboards</Link> |{' '}
          <Link to="/tournaments">Tournaments</Link>
        </nav>

        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboards" element={<Leaderboard />} />
          <Route path="/tournaments" element={<Tournament />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
