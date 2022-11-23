import React from 'react'

import styles from './InputForm.module.css'

const InputForm = ({ type, name, placeholder }) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
      required />
  )
}

export default InputForm