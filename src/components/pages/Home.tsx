import React from 'react';
import MainContent from '../home/MainContent';
import PopularCategories from '../home/PopularCategories';
import Header from '../ui/Header';

function Home() {
  return (
    <>
      <Header />
      <MainContent />
      <PopularCategories />
    </>
  )
}

export default Home