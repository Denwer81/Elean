import React from 'react'

import styles from './Advantege.module.css'

const Advantege = ({ img, text }) => {
  return (
    <div className={styles.advantege}>
      <img className={styles.image} src={img} alt="icon" />
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Advantege