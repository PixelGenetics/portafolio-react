import React from 'react';
import Header from '../components/organism/Header';
import Presentation from '../components/organism/Presentation';
import Projects from '../components/organism/Projects';

const Home = () => {
  return (
    <div id='main-container'>
      <Header />
      <Presentation />
      <Projects />
    </div>
  )
}

export default Home
