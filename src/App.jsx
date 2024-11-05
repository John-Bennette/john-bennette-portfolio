import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import EducationJourney from './components/EducationJourney';
import CareerMission from './components/CareerMission';

// Projects component with enhanced styling
const Projects = () => (
  <div className="page-container">
    <h2 className="section-heading">My Projects</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="card hover-card">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Project 1</h3>
        <p className="text-gray-700 dark:text-gray-300">Description coming soon...</p>
      </div>
      <div className="card hover-card">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Project 2</h3>
        <p className="text-gray-700 dark:text-gray-300">Description coming soon...</p>
      </div>
      <div className="card hover-card">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Project 3</h3>
        <p className="text-gray-700 dark:text-gray-300">Description coming soon...</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/education" element={<EducationJourney />} />
        <Route path="/about" element={<CareerMission />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;