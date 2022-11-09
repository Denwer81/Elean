import React from 'react'
import CustomLink from '../../Ui/CustomLink/CustomLink'

import styles from './SubMenuCategory.module.css'

function SubMenuCategory({ isOpen }) {
  const linkData = [
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Смокинг',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Костюмы',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Аксессуары',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Брюки',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Блузы',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Платья',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Топы\u00A0и\u00A0жилеты',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Юбки',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Подарочные\u00A0сертификаты',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'SALE',
    },
  ]

  return (
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
  )
}

export default SubMenuCategory;
