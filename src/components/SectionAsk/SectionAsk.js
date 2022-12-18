import React from 'react'
import Form from '../Ui/Form/Form'
import InputForm from '../Ui/Form/InputForm/InputForm'

import iconAsk from '../../images/icons/ask.svg'

const SectionAsk = () => {
  return (
    <Form
        icon={iconAsk}
        title={'задать вопрос'}
        placeHolder={'Добавить комментарий'}
        dashed={true}
      >
        <InputForm
          type={'text'}
          name={'name'}
          placeholder={'введите имя'}
        />
        <InputForm
          type={'phone'}
          name={'phone'}
          placeholder={'введите телефон'}
        />
        <InputForm
          type={'email'}
          name={'email'}
          placeholder={'введите email'}
        />
      </Form>
  )
}

export default SectionAsk