import React from 'react'
import SectionSignup from '../../components/SectionSignup/SectionSignup'
import SliderShowRoomVideo from '../../components/Ui/SliderShowRoomVideo/SliderShowRoomVideo'
import Title from '../../components/Ui/Title/Title'

import styles from './FitingPage.module.css'

const FitingPage = () => {
  return (
    <>
      <div className={styles.background}></div>
      <section className={styles.main}>
        <Title title={'пиримерка'} />
        <div className={styles.container}>
          <Title title={'ПО МОСКВЕ:'} />
          <ul className={styles.list}>
            <li>
              Вы можете примерить и подобрать желанный образ изделий в нашем шоуруме.
            </li>
            <li>
              В удобное место и время можно заказать примерку со стилистом бренда, подобрать желанный образ и получить индивидуальные рекомендации. Примерка может занимать до 2-х часов.
            </li>
            <li>
              Также можно заказать доставку с возможностью примерки перед покупкой, в течение 15-ти минут.
            </li>
          </ul>
          <Title title={'ПО РОССИИ:'} />
          <ul className={styles.list}>
            <li>
              Заказы по России отправляются по полной предоплате на сайте картой любого банка, без комиссии.
            </li>
            <li>
              Можно сделать доставку с возможностью примерки в течение 15-ти минут, об этом нужно сообщить менеджеру при подтверждении заказа. Если изделие Вам не подходит, Вы можете сразу же его отдать курьеру. Затем связаться с нами по телефону 8 495 150 14 77, чтобы оформить обмен или возврат. Подробнее здесь (ссылка на страницу обмен и возврат)
            </li>
          </ul>
          <Title title={'ТАБЛИЦА РАЗМЕРОВ:'} />
          <SliderShowRoomVideo />
          <SectionSignup />
        </div>
      </section>
    </>

  )
}

export default FitingPage