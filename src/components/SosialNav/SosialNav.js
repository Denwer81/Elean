import React from 'react'

import facebook from '../../images/icons/telegram.svg'
import instagram from '../../images/icons/instagram.svg'
import vk from '../../images/icons/vk.svg'
import styles from './SosialNav.module.css'

function SosialNav() {
  return (
    <nav className={styles.container}>
       <a
        href='https://facebook.com'
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer">
        <img
          className={styles.image}
          src={instagram}
          alt="facebook">
        </img>
      </a>
      <a
        href='https://facebook.com'
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer">
        <img
          className={styles.image}
          src={facebook}
          alt="facebook">
        </img>
      </a>
      <a
        href='https://facebook.com'
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer">
        <img
          className={styles.image}
          src={vk}
          alt="facebook">
        </img>
      </a>
    </nav>
  )
}

export default SosialNav
