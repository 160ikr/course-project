import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Choose Username" 
            required 
            onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            required 
            onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;