import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

import JobBlock from '../../components/JobBlock/JobBlock';
import Pagination from '../../components/Pagination/Pagination';

type HomeProps = {
  _id: number;
  about: string;
  address: string;
  balance: string;
  benefits: string[];
  compensation: string[];
  department: string;
  department_name: string;
  description: string;
  email: string;
  employment: string[];
  images: string[];
  job: string;
  latitude: number;
  location: string;
  longitude: number;
  phone: string;
  picture: string;
  rating: string[];
  registered: string;
}

const Home: React.FC<HomeProps> = () => {
  const [items, setItems] = React.useState<string[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

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

  const jobs = items.map((obj:any) => (
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
