// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/login', {
          username,
          password
        }, { withCredentials: true });
        console.log(response.data);
        // Redirect to game page on successful login
      } catch (err) {
        setError(err.response.data.message);
      }
    };
  
    return (
        <div className="form-container">
    <form className="form">
      <label>Username:</label>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      {error && <div>{error}</div>}
      <button type="button" onClick={handleLogin}>Login</button>
    </form>
  </div>
      
    );
  }
  

export default Login;
