import React from 'react'
import { Link } from 'react-router-dom'

import styles from './BuyerNav.module.css'

const BuyerNav = ({ link_1, link_2, link_3 }) => {
  return (
    <nav className={styles.nav}>
      <Link to={link_1.link} className={styles.link}>{link_1.text}</Link>
      <Link to={link_2.link} className={styles.link}>{link_2.text}</Link>
      <Link to={link_3.link} className={styles.link}>{link_3.text}</Link>
    </nav>
  )
}

export default BuyerNav