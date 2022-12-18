import React from 'react'

import faqIcon from '../../../images/buyers/faq-icon.svg'
import styles from './Faq.module.css'

const Faq = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h4 className={styles.title}>{title}</h4>
        <img className={styles.image} src={faqIcon} alt="faq icon" />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Faq