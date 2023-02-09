import React from 'react'

import styles from './ContactInfo.module.css'

export const ContactInfo = ({ icon, href, text }) => {
  return (
    <div className={styles.info}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={icon} alt="icon" />
      </div>
      {href
        ? <a className={styles.style} href={href}>{text}</a>
        : <p className={styles.style}>{text}</p>
      }
    </div>
  )
}
