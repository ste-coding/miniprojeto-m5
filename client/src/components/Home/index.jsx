import React from 'react';
import Header from '../Header';
import MainSection from '../MainSection';
import About from '../About';
import RecyclingPoints from '../RecyclingPoints';
import Contact from '../Contact';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <MainSection />
      <About />
      <RecyclingPoints />
      <Contact />
    </div>
  );
};

export default Home;
