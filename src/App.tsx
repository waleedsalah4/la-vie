import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
// import Header from './components/ui/Header';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Community from './components/pages/Community';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </div>
  );
}

export default App;
