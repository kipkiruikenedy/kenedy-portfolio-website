import React from 'react';
import './App.scss';
import { Navbar } from './components';
import Header from './container/Header/Header';
import About from './container/About/About';
import Work from './container/Work/Work';
import Skills from './container/Skills/Skills';
import Testimonial from './container/Testimonial/Testimonial';
import Footer from './container/Footer/Footer';
import { Education } from './container';



const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Education />
    <Skills />
    <Testimonial />
    <Footer />
  
  </div>
);

export default App;
