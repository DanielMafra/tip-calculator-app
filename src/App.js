import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="tip-calculator-app" element={<Home />} /* this route is only for use on GitHub Pages */ />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
