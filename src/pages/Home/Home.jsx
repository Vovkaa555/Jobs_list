import React from 'react';
import axios from 'axios';

import JobBlock from '../../components/JobBlock/JobBlock';
import JobDetails from '../JobDetails/JobDetails';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [activeJob, setActiveJob] = React.useState(0);

  console.log(items);
  const activeJobCallback = (payload) => {
    setActiveJob(payload);
  };

  const returnCallback = (payload) => {
    setActiveJob(payload);
  };

  const fetchJobs = async () => {
    await axios.get(`https://63038e9a0de3cd918b38f666.mockapi.io/Jobs`).then((res) => {
      setItems(res.data);
    });
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    fetchJobs();
  }, [activeJob]);

  console.log(activeJob);

  const jobs = items.map((obj) => (
    <JobBlock key={obj._id} activeJobCallback={activeJobCallback} {...obj} />
  ));

  return (
    <div>
      {activeJob === 0 ? jobs : <JobDetails returnCallback={returnCallback} {...activeJob} />}
    </div>
  );
};

export default Home;
