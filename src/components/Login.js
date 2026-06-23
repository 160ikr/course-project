import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();

    const userExists = users.find(
      (u) => u.username === formData.username && u.password === formData.password
    );

    if (userExists) {
      setIsAuthenticated(true);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-page">
      <div className="card">
        <h2>Account Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            required 
            onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;