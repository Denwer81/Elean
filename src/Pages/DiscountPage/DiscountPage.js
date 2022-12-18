import React from 'react'
import SectionAsk from '../../components/SectionAsk/SectionAsk'
import Title from '../../components/Ui/Title/Title'

import styles from './DiscountPage.module.css'

const DiscountPage = () => {
  return (
    <main className={styles.main}>
      <Title title={'Как получить скидку'} />
      <section className={styles.section}>
        <div className={styles.textContainer}>
          <Title title={'ПРОГРАММА ЛОЯЛЬНОСТИ ДЛЯ КЛИЕНТОВ'} />
          <p className={styles.text}>
          Мы ценим и благодарим каждого нашего покупателя и хотим, чтобы вы возвращались к нам снова и снова!
          </p>
          <p className={styles.text}>
            Рассказываем как сделать покупки в ELEAN выгоднее.
            <br></br>
            <b>* Скидка накопительная, бессрочная, подтверждается по номеру телефона. Предоставляется на изделия в наличии, по предзаказу, на новинки коллекции и НЕ предоставляется на изделия по акции с суммой скидок свыше вашей максимальной скидки.</b>
          </p>
          <ul className={styles.list}>
            <li>
            При сумме покупок от 100 000 рублей до 200 000 рублей предоставляется <b>скидка 5%</b>
            </li>
            <li>
            ​​​​​​​При сумме покупок от 200 000 рублей до 300 000 рублей предоставляется <b>скидка 10%</b>
            </li>
            <li>
            При сумме покупок от 300 000 рублей и выше предоставляется <b>скидка 15%</b>
            </li>
          </ul>
        </div>
      </section>
      <SectionAsk />
    </main>
  )
}

export default DiscountPage
