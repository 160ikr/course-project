import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  return (
    <nav>
      <div className="nav-brand">Flowstate</div>
      
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button className="logout-btn" onClick={() => setIsAuthenticated(false)}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;