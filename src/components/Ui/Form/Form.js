import React from 'react'
import FormCheckbox from './FormCheckBox/FormCheckbox'
import Title from '../Title/Title'

import styles from './Form.module.css'
import FormButton from './InputForm/FormButton/FormButton'

const Form = ({ icon, title, placeHolder, dashed, children }) => {
  return (
    <section className={styles.container}>
      <div className={`${styles.dashed} ${dashed &&styles.dashedActive}`}>
        <img className={styles.image} src={icon} alt={icon} />
        <Title title={title} />
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            {children}
          </div>
          <div className={styles.submitContainer}>
            <textarea
              className={styles.area}
              name={'textarea'}
              placeholder={placeHolder}
              required>
            </textarea>
            <FormButton text={'отправить'} />
          </div>
          <FormCheckbox
            id={'appointment'}
            text={'Нажимая на кнопку "отправить", вы соглашаетесь с условиями'}
            linkText={'политики конфиденциальности.'}
          />
        </form>
      </div>
    </section>
  )
}

export default Form
