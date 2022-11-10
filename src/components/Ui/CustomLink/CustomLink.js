import React from 'react'
import { Link } from 'react-router-dom'

import styles from './CustomLink.module.css'

function CustomLink({ children, to, text, type, isOpen }) {
  const textClassName = () => {
    switch (type) {
      case 'default':
        return `${styles.text} ${styles.default} ${isOpen && styles.mobile}`
      case 'submenu':
        return `${styles.text} ${styles.submenu} ${isOpen && styles.mobile}`
      default:
        return ''
    }
  }

  return (
    <Link
      className={`${styles.link} ${isOpen && styles.linkMobile}`}
      to={to}>
      <span
        className={textClassName()}>
        {text}
      </span>
      {children}
    </Link>
  )
}

export default CustomLink;
