import React from 'react'
import CustomLink from '../Ui/CustomLink/CustomLink'

import styles from './FooterNav.module.css'

function FooterNav() {
  const linkData = [
    {
      to: '/delivery',
      text: 'Доставка',
    },
    {
      to: '/payment',
      text: 'Оплата',
    },
    {
      to: '/exchange',
      text: 'Обмен',
    },
    {
      to: '/return',
      text: 'Возврат',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Размерная таблица',
    },
    {
      to: '/contacts',
      text: 'Контакты',
    },
  ]

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {
          linkData.map((item, index) => {
            return (
              <li key={index} className={styles.link}>
                <CustomLink
                  to={item.to}
                  text={item.text}
                  type={'default'} />
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default FooterNav;
