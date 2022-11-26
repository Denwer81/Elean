import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './FormCheckbox.module.css'

const FormCheckbox = ({ id, text, linkText }) => {
  const [isChecked, setIsChecked] = useState(true)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <input className={styles.checkbox}
        onChange={handleToggle}
        id={id}
        type='checkbox'
        name={'agree'}
        checked={isChecked} />
      <label className={styles.labelCheckbox} htmlFor={id} tabIndex={0}>
        <span
          className={styles.text}>
          {text}
        <Link to={'/terms'} className={styles.link}>{linkText}</Link>
        </span>
      </label>
    </>
  )
}

export default FormCheckbox