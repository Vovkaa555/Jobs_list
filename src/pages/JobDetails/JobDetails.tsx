import React from 'react';
import moment from 'moment';
import { MdBookmarkBorder, MdShare, MdArrowBackIosNew, MdLocationOn } from 'react-icons/md';
import { AiTwotoneMinusSquare } from 'react-icons/ai';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import styles from './JobDetails.module.scss';
import Map from '../../components/Map/Map';

type JobDetailsProp = {
  _id?: string,
  registered?: string,
  job?: string,
  rating?: any,
  index?: number,
  picture?: string,
  department?: string,
  location?: string,
  balance?: string,
  description?: string,
  about?: string,
  compensation?: string[],
  employment?: string[],
  benefits?: string[],
  images?: string[],
  department_name?: string,
  address?: string,
  phone?: string,
  email?: string
};

const JobDetails: React.FC<JobDetailsProp> = () => {
  const { _id } = useParams();
  const [job, setJob] = React.useState<JobDetailsProp>();
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://63038e9a0de3cd918b38f666.mockapi.io/Jobs?sortBy=registered&order=desc&_id=${_id}`,
        );
        setJob(data[0]);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  const compensation = (job?.compensation !== undefined ? (job.compensation.map((obj, index:number) => (
    <div key={index} className={styles.compensation_block}>
      <span>
        <AiTwotoneMinusSquare />
      </span>
      <div>{obj}</div>
    </div>
  ))) : '')

  const employment = ( job?.employment !== undefined ? (job.employment.map((obj, index) => (
    <div className={styles.employment} key={index}>
      {obj}
    </div>
  ))) : '')

  const benefits = ( job?.benefits !== undefined ? (job?.benefits.map((obj, index) => (
    <div className={styles.benefits} key={index}>
      {obj}
    </div>
  ))) : '')

  const images = (job?.images !== undefined ? (job?.images.map((obj, index:number) => (
    <img className={styles.image} alt="" src={obj} key={index}></img>
  ))) : '')

  return (
    <div className={styles.root}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
      <>
          <div>
            <div className={styles.job}>
              <div className={styles.job_details}>
                <div className={styles.job_details_label}>
                  <span>Job Details</span>
                  <div className={styles.job_details_icons}>
                    <div className={styles.save_block}>
                      <span className={styles.save_icon}>
                        <MdBookmarkBorder />
                      </span>
                      <span>Save to my list</span>
                    </div>
                    <div className={styles.share_block}>
                      <span className={styles.share_icon}>
                        <MdShare />
                      </span>
                      <span>Share</span>
                    </div>
                  </div>
                </div>
                <button>apply now</button>
                <div className={styles.job_description}>
                  <div className={styles.job_header}>
                    <div className={styles.job_name}>{job?.job}</div>
                    <div className={styles.salary_block}>
                      <div className={styles.salary}>{job?.balance}</div>
                      <span>Brutto, per year</span>
                    </div>
                  </div>
                </div>
                <div className={styles.registered}>
                  <span>Posted {moment(job?.registered).fromNow()}</span>
                </div>
                <div className={styles.main_info}>
                  <p>{job?.description}</p>
                  <span>Responsibilities:</span>
                  <p>{job?.about}</p>
                  <span>Compensation & Benefits:</span>
                  <p>Our physicians enjoy a wide range of benefits, including:</p>
                  <div>
                    {compensation}
                  </div>
                  <button>apply now</button>
                  <div className={styles.additional_elements}>
                    <div className={styles.additional_info}>
                      <div className={styles.additional}>Additional info</div>
                      <div>Employment type</div>
                      <div className={styles.employment_block}>
                        {employment}
                      </div>
                      <div>Benefits</div>
                      <div className={styles.benefits_block}>
                        {benefits}
                      </div>
                    </div>
                    <div className={styles.attached_block}>
                      <div className={styles.attached_images}>Attached images</div>
                      <div className={styles.images_block}>
                        {images}
                      </div>
                    </div>
                  </div>
                  <div className={styles.contacts_info}>Contacts</div>
                </div>
              </div>
            </div>
            <Link to="/">
              <div className={styles.return_button}>
                <span className={styles.arrow}>
                  <MdArrowBackIosNew />{' '}
                </span>
                <span> return to job board</span>
              </div>
            </Link>
          </div>
          <div className={styles.map_block}>
            <div className={styles.info_block}>
              <div className={styles.round}></div>
              <div className={styles.company_info}>
                <div className={styles.department_info}>
                  <span>Department name.</span>
                  <span>{job?.department_name}</span>
                </div>
                <div className={styles.contacts}>
                  <div className={styles.address}>
                    <div>
                      <span className={styles.location_icon}>
                        <MdLocationOn />
                      </span>
                      {job?.address}
                    </div>
                  </div>
                  <span>{job?.phone}</span>
                  <span>{job?.email}</span>
                </div>
              </div>
            </div>
            <Map {...job} />
          </div>
          </>
      )}
    </div>
  );
};

export default JobDetails;
