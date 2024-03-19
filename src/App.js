// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/details';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
