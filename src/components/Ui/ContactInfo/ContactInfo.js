import React from 'react'

import styles from './ContactInfo.module.css'

export const ContactInfo = ({icon, href, text}) => {
  return (
    <div className={styles.info}>
      <img className={styles.icon} src={icon} alt="icon" />
      {
        href && <a className={styles.style} href='tel:+74951501477'>{text}</a>
      }
      {
        !href && <p className={styles.style}>{text}</p>
      }
    </div>
  )
}
