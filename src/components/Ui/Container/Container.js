import React from 'react'
import styles from './Container.module.css'

function Container({ children, type }) {
  return (
    <div className={
      type === 'main' ? styles.main : styles.center
    }>
      {children}
    </div>
  )
}

export default Container;
