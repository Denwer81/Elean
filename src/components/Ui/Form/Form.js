import React from 'react'
import FormCheckbox from './FormCheckBox/FormCheckbox'
import Title from '../Title/Title'
import FormButton from './InputForm/FormButton/FormButton'
import { useLocation } from 'react-router-dom'

import styles from './Form.module.css'
import addFoto from '../../../images/review/addFoto.svg'

const Form = ({ icon, title, placeHolder, dashed, children }) => {
  const location = useLocation();

  return (
    <section className={styles.container}>
      <div className={`${styles.dashed} ${dashed && styles.dashedActive}`}>
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
          {
            location.pathname === '/reviews' &&
              <label className={styles.addFoto}>
                <img className={styles.addFotoIcon} src={addFoto} alt='addFoto' />
                добавить фотографию
                <input className={styles.addInput} type="file" name='foto' />
              </label>
          }
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
