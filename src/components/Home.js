import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState([]);

  // Fetch data from the mock database as soon as the page loads
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
      
      <ul className="post-list">
        {data.map((item) => (
          <li key={item.id} className="post-item">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;