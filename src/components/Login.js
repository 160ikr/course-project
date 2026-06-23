import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // REST API Request: GET users to verify
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();

    const userExists = users.find(
      (u) => u.username === formData.username && u.password === formData.password
    );

    if (userExists) {
      setIsAuthenticated(true);
      navigate('/'); // Redirect to home
    } else {
      alert('Invalid credentials');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '200px', gap: '10px' }}>
        <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;