import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import JobDetails from './pages/JobDetails/JobDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/_id=:_id" element={<JobDetails />} />
    </Routes>
  );
}

export default App;
