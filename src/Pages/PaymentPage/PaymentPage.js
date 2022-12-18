import React from 'react'
import SectionAsk from '../../components/SectionAsk/SectionAsk'
import BuyerNav from '../../components/Ui/BuyerNav/BuyerNav'
import Title from '../../components/Ui/Title/Title'

import img from '../../images/buyers/elean62770-750x570.jpg'
import styles from './PaymentPage.module.css'


const PaymentPage = () => {
  return (
    <main className={styles.main}>
      <Title title={'оплата'} />
      <BuyerNav
        link_1={{ link: '/delivery', text: 'доставка' }}
        link_2={{ link: '/exchange', text: 'Обмен' }}
        link_3={{ link: '/return', text: 'Возврат' }}
      />
      <section className={styles.section}>
        <img
          className={styles.image}
          src={img} alt="elean foto" />
        <div className={styles.textContainer}>
          <Title title={'КАК ОПЛАТИТЬ ЗАКАЗ'} />
          <p className={styles.text}>
            <b>Картой на сайте, Apple Pay, Google Pay</b>
          </p>
          <ul className={styles.list}>
            <li>
              Подтвердите заказ на странице "оформление заказа" и выберите способ оплаты - оплатой картой. Введите данные своей карты на открывшейся старнице платежной системы. В случае возврата, деньги вернутся на карту, с которой вы оплачивали заказ.
            </li>
          </ul>
          <p className={styles.text}>
            <b>Наличными или картой стилисту бренда или курьеру (доступно по Москве и ближайшему Подмосковью)</b>
          </p>
          <p className={styles.text}>
            <b>В рассрочку от нашего партнера, банка Tinkoff</b>
          </p>
          <ul className={styles.list}>
            <li>
              Заказ можно оплатить в рассрочку, решение от банка вы получите в течение 5 минут.
            </li>
            <li>
              В карточке товара или при оформлении заказа выберите "купить в рассрочку"
            </li>
            <li>
              Заполните условия покупки (сумма покупки и срок рассрочки) и анкету, отправьте ее на рассмотрение в банк.
            </li>
            <li>
              Вы получите уведомление о подтверждении рассрочки и, после проверки всех данных, можете оформить согласие. Далее мы с Вами свяжемся в течение 2-х рабочих часов.
            </li>
          </ul>
        </div>
      </section>
      <SectionAsk />
    </main>
  )
}

export default PaymentPage
