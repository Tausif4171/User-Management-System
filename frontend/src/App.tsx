import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreateAndEdit from './pages/CreateAndEdit';
import View from './pages/View';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<CreateAndEdit />} />
        <Route path='/update/:id' element={<CreateAndEdit />} />
        <Route path='/view/:id' element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
