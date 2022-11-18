import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

import JobBlock from '../../components/JobBlock/JobBlock';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const fetchJobs = async () => {
    await axios
      .get(
        `https://63038e9a0de3cd918b38f666.mockapi.io/Jobs?sortBy=registered&order=desc&page=${currentPage}&limit=15`,
      )
      .then((res) => {
        setItems(res.data);
      });
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    fetchJobs();
  }, [currentPage]);

  const jobs = items.map((obj) => (
    <Link to={`/_id=${obj._id}`} key={obj._id}>
      <JobBlock {...obj} />{' '}
    </Link>
  ));

  return (
    <div className={styles.root}>
      <div className={styles.jobs_list}>{jobs}</div>
      <div className={styles.pagination}>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </div>
  );
};

export default Home;
