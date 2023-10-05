import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Reviews.module.css';
import { getReviewById } from 'services/Api';

function Reviews() {
  const { idMovie } = useParams();
  const [reviewInfo, setReviewInfo] = useState();

  const getReview = async idMovie => {
    const { results } = await getReviewById(idMovie);
    setReviewInfo(results);
  };

  useEffect(() => {
    getReview(idMovie);
  }, [idMovie]);

  if (!reviewInfo) {
    return null;
  }
  return (
    <>
      {reviewInfo.length > 0 ? (
        <ul>
          {reviewInfo.map(({ id, author, content }) => {
            return (
              <li key={id} className={styles.reviewContainer}>
                <b className={styles.authorName}>Author: {author}</b>
                <div className={styles.ContentContainer}>
                  <p className={styles.ContentTitle}>Review:</p>
                  <span className={styles.Content}>{content}</span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.noReview}>Oops!There are no such reviews!</p>
      )}
    </>
  );
}

export default Reviews;
