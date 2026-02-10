import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import VisionMission from './components/VisionMission';
import Initiatives from './components/Initiatives';
import Contribute from './components/Contribute';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <VisionMission />
        <Initiatives />
        <Contribute />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
