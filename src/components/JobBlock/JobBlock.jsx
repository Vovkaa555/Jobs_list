import React from 'react';

const JobBlock = ({ activeJobCallback, ...obj }) => {
  const [activeJob, setActiveJob] = React.useState(obj);

  const onClickJob = () => {
    setActiveJob(obj);
    activeJobCallback(activeJob);
  };

  return <div onClick={onClickJob}>{obj._id}</div>;
};

export default JobBlock;
