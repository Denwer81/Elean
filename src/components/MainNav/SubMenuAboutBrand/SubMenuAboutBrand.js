import React from 'react'
import CustomLink from '../../Ui/CustomLink/CustomLink'

import styles from './SubMenuAboutBrand.module.css'

function SubMenuAboutBrand({isOpen}) {
  const linkData = [
    {
      to: 'https://ru-ru.facebook.com',
      text: 'О нас',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Шоурум',
    },
    {
      to: 'https://ru-ru.facebook.com',
      text: 'Отзывы',
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

export default SubMenuAboutBrand