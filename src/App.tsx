import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import JobDetails from './pages/JobDetails/JobDetails';
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home _id={0} about={''} address={''} balance={''} benefits={[]} compensation={[]} department={''} department_name={''} description={''} email={''} employment={[]} images={[]} job={''} latitude={0} location={''} longitude={0} phone={''} picture={''} rating={[]} registered={''} />} />
      <Route path="/_id=:_id" element={<JobDetails registered={''} job={''} rating={undefined} index={0} picture={''} department={''} location={''} balance={''} description={''} about={''} compensation={[]} employment={[]} benefits={[]} images={[]} department_name={''} address={''} phone={''} email={''} _id={''} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
