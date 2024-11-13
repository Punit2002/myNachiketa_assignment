import React, { useState } from 'react';
import axios from 'axios';
import './profile.css'; 

function Profile() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`https://lichess.org/api/user/${username}`);
      setProfile(response.data);
      setError(null);
    } catch (err) {
      setError('User not found or API error');
      setProfile(null);
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <input
        type="text"
        placeholder="Enter Lichess username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchProfile}>Fetch Profile</button>
      
      {error && <p>{error}</p>}
      
      {profile && (
        <div className="profile-info">
          <p><strong>Username:</strong> {profile.username}</p>
          <p><strong>Bio:</strong> {profile.bio || 'N/A'}</p>
          <p><strong>Games Played:</strong> {profile.count.all}</p>
          <p><strong>Blitz Rating:</strong> {profile.perfs.blitz.rating}</p>
          <p><strong>Rapid Rating:</strong> {profile.perfs.rapid.rating}</p>
          <p><strong>Classical Rating:</strong> {profile.perfs.classical.rating}</p>
          {profile.avatar && <img src={profile.avatar} alt="Profile" />}
        </div>
      )}
    </div>
  );
}

export default Profile;
