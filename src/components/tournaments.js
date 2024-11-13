import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './tournament.css'; 

function Tournament() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      const response = await axios.get('https://lichess.org/api/tournament');
      setTournaments(response.data.created);
      console.log(response);
    };
    
    fetchTournaments();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">Ongoing Tournaments</h2>
      <ul className="list">
        {tournaments.map((tournament) => (
          <li key={tournament.id} className="list-item">
            <p className="tournament-info">
              <span className="title">Name: </span>{tournament.fullName}
            </p>
            <p className="tournament-info">
              <span className="title">Type: </span>{tournament.rated ? 'Rated' : 'Casual'}
            </p>
            <p className="tournament-info">
              <span className="title">Status: </span>{tournament.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tournament;
