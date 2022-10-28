import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
// import Header from './components/ui/Header';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';
import BlogPage from './components/pages/BlogPage';
import AboutPage from './components/pages/AboutPage';
import CommunityPage from './components/pages/CommunityPage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import SingleBlogPage from './components/pages/SingleBlogPage';
import ProductDetailsPage from './components/pages/ProductDetailsPage';
import CartPage from './components/pages/CartPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product-details/:id' element={<ProductDetailsPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<SingleBlogPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
