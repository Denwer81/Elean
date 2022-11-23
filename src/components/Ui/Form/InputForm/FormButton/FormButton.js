import React from 'react'

import styles from './FormButton.module.css'

const FormButton = ({ text }) => {
  return (
    <button className={styles.button} type={'submit'}>{ text }</button>
  )
}

export default FormButton