import React, { useState } from 'react';
import Home from './components/Home';
import Navigation from './components/navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/footer';
import About from './components/About';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Render the appropriate section based on the active section state
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;