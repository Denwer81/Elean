import React from 'react'
import FormCheckbox from '../../Ui/Form/FormCheckBox/FormCheckbox'

import styles from './FooterForm.module.css'

function FooterForm() {
  return (
    <form className={styles.form}>
      <p className={styles.mobileText}>ПОДПИСАТЬСЯ НА НОВОСТИ</p>
      <span className={styles.buttonText}>введите</span>
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
      <FormCheckbox
        id={'FormCheckbox'}
        text={'Я согласен'}
        linkText={'с политикой конфиденциальности'} />
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