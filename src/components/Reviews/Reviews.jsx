import { fetchReviews } from 'helpers/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    async function getReviews() {
      const reviewsData = await fetchReviews(movieId);
      setReviews(reviewsData);
    }
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (reviews?.length === 0) {
    return 'We do not have any reviews for this movie.';
  }
  return (
    <ul className={css.reviews_list}>
      {reviews?.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
