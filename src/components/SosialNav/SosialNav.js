import React from 'react'

import facebook from '../../images/icons/telegram.svg'
import instagram from '../../images/icons/instagram.svg'
import vk from '../../images/icons/vk.svg'
import styles from './SosialNav.module.css'

function SosialNav() {
  return (
    <nav className={styles.container}>
      <a
        href='https://instagram.com'
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer">
        <img
          width='18px'
          heigth='19px'
          className={styles.image}
          src={instagram}
          alt="instagram">
        </img>
      </a>
      <a
        href='https://facebook.com'
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer">
        <img
          width='17px'
          heigth='15px'
          className={styles.image}
          src={facebook}
          alt="facebook">
        </img>
      </a>
      <a
        href='https://vk.com/'
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer">
        <img
          width='20px'
          heigth='12px'
          className={styles.image}
          src={vk}
          alt="vk">
        </img>
      </a>
    </nav>
  )
}

export default SosialNav
