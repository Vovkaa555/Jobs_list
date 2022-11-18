import React from 'react';
import moment from 'moment';

import styles from './JobBlock.module.scss';
import { ImLocation, ImStarFull } from 'react-icons/im';
import { BsBookmark } from 'react-icons/bs';

const JobBlock = ({ ...obj }) => {
  const timeago = moment(obj.registered).fromNow();

  const rating = obj.rating.map((obj, index) => (
    <span key={index}>
      <ImStarFull />
    </span>
  ));

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.description}>
          <img className={styles.image} alt="" src={obj.picture}></img>
          <div className={styles.information}>
            <div className={styles.job_description}>{obj.job}</div>
            <div className={styles.department}>Department name • {obj.department}</div>
            <div className={styles.location}>
              <ImLocation /> {obj.location}
            </div>
          </div>
        </div>
        <div className={styles.stars}>{rating}</div>
        <div className={styles.share}>
          <div className={styles.share_icon}>
            <BsBookmark />
          </div>
          <div className={styles.date}>Posted {timeago}</div>
        </div>
      </div>
    </div>
  );
};

export default JobBlock;
