import React from 'react'

import styles from './PhoneLink.module.css'

function PhoneLink({ to, text }) {
  return (
    <a
      className={styles.link}
      href={to}
      target="_blank"
      rel="noopener noreferrer">
      <span
        className={styles.text}>
        {text}
      </span>
    </a>
  )
}

export default PhoneLink;