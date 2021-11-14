import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CatalogList from './components/CatalogList';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Default from './components/Default';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CatalogList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/*" element={<Default />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
