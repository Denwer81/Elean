import React, { useEffect, useState } from 'react'
import Review from './Review/Review'
import { reviewsData } from './reviewData'
import { Link, useLocation } from 'react-router-dom'

import styles from './Reviews.module.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [count, setCount] = useState(4)
  const location = useLocation();

  const handleShowMore = () => {
    if (reviewsData.length > count) {
      setCount(count + 2)
    }
  }

  useEffect(() => {
    setReviews(reviewsData.slice(0, count))
  }, [count])

  return (
    <>
      <section className={styles.section}>
        {
          reviews.map((item, index) => {
            return (
              <Review key={index}
                foto={item.foto}
                name={item.name}
                city={item.city}
                date={item.date}
                text={item.text}
              />
            )
          })
        }
      </section>
      {
        location.pathname === '/'
          ? <Link to={'reviews'} className={styles.link}>смотреть все</Link>
          : reviewsData.length > count
            && <button onClick={handleShowMore} className={styles.link}>показать еще</button>
      }
    </>
  )
}

export default Reviews