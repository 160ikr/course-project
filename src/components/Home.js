import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // REST API Request: GET dynamic data
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/posts');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <h1>Main Dashboard</h1>
      <p>Welcome to the application!</p>
      
      <h3>Dynamic Data from Database:</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>: {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;