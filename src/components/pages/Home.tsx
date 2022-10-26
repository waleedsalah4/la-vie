import React from 'react';
import BestSeller from '../home/BestSeller';
import MainContent from '../home/MainContent';
import PopularCategories from '../home/PopularCategories';
import Header from '../ui/Header';
import Blog from '../home/Blog';
import AboutUs from '../home/AboutUs';
import MobileApp from '../home/MobileApp';
import Footer from '../home/Footer';

function Home() {
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

export default Home