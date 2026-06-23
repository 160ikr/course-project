import React, { useState, useEffect } from 'react';

function Home({ isAuthenticated }) { // 1. Accept the login status here
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then((res) => res.json())
      .then((posts) => setData(posts))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="dashboard-header">
        <span className="status-badge">● Live Feed</span>
        <h1>Community Dashboard</h1>
        <p>Displaying dynamic data fetched from the REST API database.</p>
      </div>
      
      {/*  If logged in, show the loop. If not, show acess restr*/}
      {isAuthenticated ? (
        <ul className="post-list">
          {data.map((item) => (
            <li key={item.id} className="post-item">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#667' }}>
          <h3> Access Restricted</h3>
          <p style={{ marginTop: '0.5rem' }}>Please log in or register an account to view the community announcements.</p>
        </div>
      )}
    </div>
  );
}

export default Home;