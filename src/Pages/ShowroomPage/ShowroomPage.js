import React from 'react'
import SectionShowroom from '../../components/SectionShowroom/SectionShowroom'
import SectionSignup from '../../components/SectionSignup/SectionSignup'
import SliderShowRoomVideo from '../../components/Ui/SliderShowRoomVideo/SliderShowRoomVideo'
import Title from '../../components/Ui/Title/Title'

import styles from './ShowroomPage.module.css'

const ShowroomPage = () => {
  return (
    <>
      <main className={styles.main}>
        <SectionShowroom />
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <p className={styles.text}>Насладитесь уютной атмосферой пространства шоурума ELEAN, с Вами индивидуально поработает стилист бренда, поможет с выбором образа и проконсультирует.</p>
            <p className={styles.text}>Угоститесь чашкой кофе или бокалом игристого, пока мы упакуем Вашу покупку. </p>
            <p className={styles.text}>Визит в шоурум ELEAN - возможность побаловать себя и инвестировать время в свою уверенность и красоту.</p>
          </div>
          <ul className={styles.list}>
            <li className={styles.text}>Оплата банковской картой или наличными</li>
            <li className={styles.text}>Заказ изделий других цветов</li>
            <li className={styles.text}>Корректировка длины изделия</li>
            <li className={styles.text}>Подбор готового образа</li>
          </ul>
        </div>
        <Title title={'ВИДЕО ПРИМЕРОК В ШОУРУМЕ'} />
        <SliderShowRoomVideo />
        <SectionSignup />
      </main>
    </>
  )
}

export default ShowroomPage