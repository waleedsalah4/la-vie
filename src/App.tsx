import React from 'react';
import {Routes, Route} from 'react-router-dom'
// import Header from './components/ui/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SingleBlogPage from './pages/SingleBlogPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/product-details/:id' element={<ProductDetailsPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:id' element={<SingleBlogPage />} />
          <Route path='/about' element={<HomePage />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Route>
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
