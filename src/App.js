import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Nav from "./components/Nav.jsx";
import Title from "./components/Title.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Nav" element={<Nav />} />
        <Route path="/Title" element={<Title />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
