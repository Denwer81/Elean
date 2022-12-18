import React from 'react'
import SectionAsk from '../../components/SectionAsk/SectionAsk'
import BuyerNav from '../../components/Ui/BuyerNav/BuyerNav'
import Title from '../../components/Ui/Title/Title'

import img from '../../images/buyers/elean62773-750x570.jpg'
import styles from './ReturnPage.module.css'

const ReturnPage = () => {
  return (
    <main className={styles.main}>
      <Title title={'возврат'} />
      <BuyerNav
        link_1={{ link: '/delivery', text: 'доставка' }}
        link_2={{ link: '/payment', text: 'оплата' }}
        link_3={{ link: '/exchange', text: 'Обмен' }}
      />
      <section className={styles.section}>
        <img
          className={styles.image}
          src={img} alt="elean foto" />
        <div className={styles.textContainer}>
          <Title title={'КАК ОФОРМИТЬ ВОЗВРАТ'} />
          <p className={styles.text}>
            Вы можете вернуть неношеные изделия в течение 14 дней с момента покупки. Должно быть сохранено качество и вид нового изделия, а также сохранен чек, подтверждающий покупку у нас.
          </p>
          <p className={styles.text}>
            <b>Если вы приобрели изделия в шоуруме</b> в Москве, вернуть их можно также в шоурум, либо отправить курьером по адресу: ул. Новослободская 26, стр.1, 1 подъезд, 2 этаж, офис 223.
          </p>
          <p className={styles.text}>
            <b>Если вы приобрели товар в интернет-магазине,</b> вернуть его нужно курьером по адресу: ул. Новослободская 26, стр.1, 1 подъезд, 2 этаж, офис 223.
            <br></br>
            Возврат денежных средств осуществляется после получения и проверки изделий в нашем офисе, в течение 3-5 рабочих дней на карту, с которой была произведена оплата.
            <br></br>
            Обращаем ваше внимание, <b>возврат осуществляется за счет покупателя.</b>
          </p>
        </div>
      </section>
      <SectionAsk />
    </main>
  )
}

export default ReturnPage
