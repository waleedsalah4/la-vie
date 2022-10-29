import React from 'react';
import BestSeller from '../components/home/BestSeller';
import MainContent from '../components/home/MainContent';
import PopularCategories from '../components/home/PopularCategories';
import Header from '../components/ui/Header';
import Blog from '../components/home/Blog';
import AboutUs from '../components/home/AboutUs';
import MobileApp from '../components/home/MobileApp';
import Footer from '../components/home/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <MainContent />
      <PopularCategories />
      <BestSeller />
      <Blog />
      <AboutUs />
      <MobileApp />
      <Footer />
    </>
  )
}

export default HomePage