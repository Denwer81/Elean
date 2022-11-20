import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './FooterForm.module.css'

function FooterForm() {
  const [isChecked, setIsChecked] = useState(true)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <form className={styles.form}>
      <p className={styles.mobileText}>ПОДПИСАТЬСЯ НА НОВОСТИ</p>
      <button className={styles.mobileButton}>&rarr;</button>
      <input
        className={`${styles.input} ${styles.name}`}
        name={'name'}
        type="text"
        placeholder='Имя' />
      <input
        className={`${styles.input} ${styles.email}`}
        type="email"
        name={'email'}
        placeholder='email'
        required
        minLength={2} />
      <input className={styles.checkbox}
        onChange={handleToggle}
        id='checkbox'
        type="checkbox"
        name={'agree'}
        required
        checked={isChecked} />
      <label className={styles.labelCheckbox} htmlFor="checkbox" tabIndex={0}>
        <span className={styles.text}>
          Я согласен
        </span>
        <Link to={'/'} className={styles.link}>с политикой конфиденциальности</Link>
      </label>
      <button
        className={styles.button}
        type="submit"
        value={'подписаться'}>
        подписаться
        <span className={styles.arrow}>&rarr;</span>
      </button>
    </form>
  )
}

export default FooterForm