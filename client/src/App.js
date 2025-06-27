import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("Couldn't connect to backend 😿"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>React + Express App</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
