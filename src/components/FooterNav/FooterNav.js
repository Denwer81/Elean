import React from 'react'
import CustomLink from '../Ui/CustomLink/CustomLink'

import styles from './FooterNav.module.css'

function FooterNav() {
  const linkData = [
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Доставка',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Оплата',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Возврат',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Размерная таблица',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Примерка',
    },
    {
      to: 'https://ru-ru.facebook.com',
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
