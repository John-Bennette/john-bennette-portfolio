import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import EducationJourney from './components/EducationJourney';
import CareerMission from './components/CareerMission';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/education" element={<EducationJourney />} />
        <Route path="/about" element={<CareerMission />} />
      </Routes>
    </Layout>
  );
}

export default App;