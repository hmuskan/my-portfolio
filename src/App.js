import React from 'react';
import './App.css';
import Header from './components/header'
import Intro from './components/intro'
import About from './components/about'
import Quote from './components/quote'
import TechnicalSkills from './components/technical-skills'
import Experience from './components/experience'
import Education from './components/education'

function App() {
  return (
    <div>
  <Header></Header>
  <Intro></Intro>
  <About></About>
  <Quote></Quote>
  <TechnicalSkills></TechnicalSkills>
  <Experience></Experience>
  <Education></Education>
  </div>
  );
}

export default App;
