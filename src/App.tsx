import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Reviews } from './components/Reviews';
import { Reservation } from './components/Reservation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Reviews />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;