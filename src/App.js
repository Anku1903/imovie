
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Box from './Box';
import requests from './Requests';
function App() {
  const [option,Seto] = useState(requests.fetchTrending);
  return (
    <div className="app">
  <Header />
  <Nav Seto={Seto} />
  <Box sopt={option} />
    </div>
  );
}

export default App;
