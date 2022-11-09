import React from 'react'
import CustomLink from '../../Ui/CustomLink/CustomLink'

import styles from './SubMenuCollection.module.css'

function SubMenuColection({isOpen}) {
  const linkData = [
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Осень-зима 22-23',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Готовые комплекты',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Предзаказ',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Весна-лето 2022',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Свадьба\u00A0и\u00A0выпускной',
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

export default SubMenuColection
