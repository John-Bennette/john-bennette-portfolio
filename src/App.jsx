import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import EducationJourney from './components/EducationJourney';
import CareerMission from './components/CareerMission';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/education" element={<EducationJourney />} />
        <Route path="/about" element={<CareerMission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;