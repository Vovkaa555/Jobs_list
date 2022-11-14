import React from 'react';

const JobDetails = ({ returnCallback, ...activeJob }) => {
  const onClickReturn = () => {
    activeJob = 0;
    returnCallback(activeJob);
  };

  return (
    <div>
      <div>{activeJob._id}</div>
      <button onClick={onClickReturn}>Return</button>
    </div>
  );
};

export default JobDetails;
