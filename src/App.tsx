import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Home from './pages/Home';
import Article from './pages/Article';
import './App.css';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<Article />} />
          </Routes>
    </Router>
  );
}

export default App;


