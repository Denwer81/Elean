import React from 'react'
import SectionAsk from '../../components/SectionAsk/SectionAsk'
import BuyerNav from '../../components/Ui/BuyerNav/BuyerNav'
import Title from '../../components/Ui/Title/Title'

import img from '../../images/buyers/elean62776-750x570.jpg'
import styles from './ExchangePage.module.css'

const ExchangePage = () => {
  return (
    <main className={styles.main}>
      <Title title={'обмен'} />
      <BuyerNav
        link_1={{ link: '/delivery', text: 'доставка' }}
        link_2={{ link: '/payment', text: 'оплата' }}
        link_3={{ link: '/return', text: 'Возврат' }}
      />
      <section className={styles.section}>
        <img
          className={styles.image}
          src={img} alt="elean foto" />
        <div className={styles.textContainer}>
          <Title title={'КАК ОБМЕНЯТЬ ИЗДЕЛИЯ'} />
          <ul className={styles.list}>
            <li>
              Вы можете обменять неношеные изделия в течение 14 дней с момента покупки. Должно быть сохранено качество и вид нового изделия, а также сохранен чек, подтверждающий покупку у нас.
            </li>
            <li>
              <b>Если вы приобрели изделия в шоуруме в Москве,</b> обменять их можно также в шоуруме, либо заказать доставку с курьером.
            </li>
            <li>
              <b>Если вы приобрели товар в интернет-магазине (с доставкой по России),</b> вы должны связаться с нами любым удобным способом и сообщить о замене (размера, цвета, изделия и тд), мы согласуем удобное время и отправим вам бесплатного курьера.
            </li>
            <li>
              <b>Если вы приобрели товар в интернет-магазине (с доставкой по миру),</b> вы должны связаться с нами любым удобным способом и сообщить о замене (размера, цвета, изделия и тд), а также за свой счет отправить нам неподошедшие изделия.
            </li>
            <li>
              Обмен нужного изделия осуществляется после получения и проверки неподошедших изделий в нашем офисе, в течение 3-5 рабочих дней.
            </li>
          </ul>
        </div>
      </section>
      <SectionAsk />
    </main>
  )
}

export default ExchangePage
