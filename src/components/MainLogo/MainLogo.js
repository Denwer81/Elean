import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../images/icons/logo.svg'
import styles from './MainLogo.module.css'

function MainLogo({ text, isOpen }) {
  return (
    <div className={styles.container}>
      <Link className={`${styles.link} ${isOpen && styles.linkMobile}`}>
        <img
          className={styles.logo}
          src={logo}
          alt="logo" />
      </Link>
      <p className={`${styles.text} ${isOpen && styles.textMobile}`}>{text}
      </p>
    </div>
  )
}

export default MainLogo