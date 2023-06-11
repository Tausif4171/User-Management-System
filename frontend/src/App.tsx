import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/add' element={<AddEdit />} />
        <Route path='/update/:id' element={<AddEdit />} />
        <Route path='/view/:id' element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
