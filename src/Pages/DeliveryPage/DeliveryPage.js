import React from 'react'
import SectionAsk from '../../components/SectionAsk/SectionAsk'
import SectionFAQ from '../../components/SectionFAQ/SectionFaq'
import BuyerNav from '../../components/Ui/BuyerNav/BuyerNav'
import Title from '../../components/Ui/Title/Title'

import img from '../../images/buyers/delivery-1-750x570.jpg'
import giftIcon from '../../images/buyers/delivery-icon-2.svg'
import styles from './DeliveryPage.module.css'

const DeliveryPage = () => {
  return (
    <main className={styles.main}>
      <Title title={'доставка'} />
      <BuyerNav
        link_1={{ link: '/payment', text: 'оплата' }}
        link_2={{ link: '/exchange', text: 'Обмен' }}
        link_3={{ link: '/return', text: 'Возврат' }}
      />
      <section className={styles.section}>
        <img
          className={styles.image}
          src={img} alt="elean foto" />
        <div className={styles.textContainer}>
          <Title title={'КАКУЮ ВЫБРАТЬ ДОСТАВКУ'} />
          <p className={styles.text}>
            По Москве и Московской области(до 5 км) возможна доставка изделий.
          </p>
          <ul className={styles.list}>
            <li>
              <b>Доставка со стилистом бренда.</b> Как проходит? В удобное место и заранее назначенное время приезжает профессиональный стилист бренда, подбирает для примерки заранее желанные изделия и дополнения к ним и помогает Вам составить лучшие образы. Примерка может длиться до 2-х часов.
            </li>
            <li>
              <b>Доставка курьером.</b> Вы можете заказать 2 размера на выбор и примерить перед покупкой (не более 15 минут).
            </li>
            <li>
              <b>Самовывоз из шоурума ELEAN.</b> Вы можете забрать свой заказ по адресу: г. Москва, ул. Новослободская 26, стр.1, офис 223. Оплатить покупку можно наличными или картой.
            </li>
          </ul>
          <p className={styles.text}>
            Доставка по России.
          </p>
          <ul className={styles.list}>
            <li>
              <b>Доставка курьером.</b> Доставка во все регионы осуществляется по 100 % предоплате на нашем сайте и осуществляется транспортной компанией СДЭК до двери. Можно сделать доставку с возможностью примерки в течение 15-ти минут, об этом нужно сообщить менеджеру при подтверждении заказа. Если изделие Вам не подходит, Вы можете сразу же его отдать курьеру. Затем связаться с нами по телефону 8 495 150 14 77, чтобы оформить обмен или возврат.
            </li>
          </ul>
          <p className={styles.text}>
            <b>Доставка по миру</b> осуществляется по 100 % предоплате на нашем сайте курьером до двери.
          </p>
          <div className={styles.subContainer}>
            <p className={styles.text}>
              При покупке на сумму от 15 000₽ <b>доставка в подарок,</b> в остальных случаях - 500₽, за границу всегда оплачивается доставка 1500₽.
            </p>
            <img className={styles.icon} src={giftIcon} alt="gift icon" />
          </div>
        </div>
      </section>
      <SectionFAQ />
      <SectionAsk />
    </main>
  )
}

export default DeliveryPage