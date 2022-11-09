import React from 'react'
import CustomLink from '../../Ui/CustomLink/CustomLink'

import styles from './SubMenuBuyers.module.css'

function SubMenuBuyers({isOpen}) {
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
      text: 'Обмен',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Возврат',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Примерка',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Как\u00A0получить\u00A0скидку',
    },
  ]

  return (
    <>
    {
      linkData.map((item, index) => {
        return (
          <li key={index} className={styles.link}>
            <CustomLink
              to={item.to}
              isOpen={isOpen}
              text={item.text}
              type={'submenu'}>
            </CustomLink>
          </li>
        )
      })
    }
  </>
  )
}

export default SubMenuBuyers