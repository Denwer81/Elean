import React from 'react'

import styles from './Review.module.css'

const Review = ({ foto, name, city, date, text }) => {
  return (
    <div className={styles.review}>
      <img className={styles.foto} src={foto} alt="foto" />
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.city}>{city}</p>
          <p className={styles.date}>{date}</p>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default Review