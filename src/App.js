import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeExperience, setActiveExperience] = useState('inotium');

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          activeExperience={activeExperience}
          setActiveExperience={setActiveExperience}
        />
        <main className="main-content">
          <Dashboard 
            activeSection={activeSection} 
            activeExperience={activeExperience}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App; 