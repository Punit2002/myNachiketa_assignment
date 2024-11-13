import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './leaderboards.css'; 

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      const response = await axios.get(`https://lichess.org/api/leaderboard`);
      setLeaders(response.data);
    };
    
    fetchLeaders();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">Leaderboards</h2>
      <ul className="list">
        {leaders.map((player) => (
          <li key={player.id} className="list-item">
            <p className="player-info">
              <span className="title">Username: </span>{player.username}
            </p>
            <p className="player-info">
              <span className="title">Title: </span>{player.title || 'N/A'}
            </p>
            <p className="player-info">
              <span className="title">Blitz Rating: </span>{player.perfs.blitz.rating}
            </p>
            <p className="player-info">
              <span className="title">Rapid Rating: </span>{player.perfs.rapid.rating}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
