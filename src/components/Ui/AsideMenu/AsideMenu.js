import React from 'react'
import { NavLink } from "react-router-dom";
import { AsideCollectionData, AsideCategoryData } from './AsideMenuData'

import styles from './AsideMenu.module.css'

const AsideMenu = () => {
  return (
    <>
      <h3 className={styles.title}>КАТЕГОРИИ</h3>
      <ul className={styles.list}>
        {
          AsideCategoryData.map((item, index) => {
            return (
              <li key={index} className={styles.item}>
                <NavLink
                  className={({ isActive }) => isActive
                    ? styles.linkActive : styles.link}
                  to={item.to}
                >
                  <span className={styles.text}>
                    {item.text}
                  </span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>

      <h3 className={styles.title}>КОЛЕКЦИИ</h3>
      <ul className={styles.list}>
        {
          AsideCollectionData.map((item, index) => {
            return (
              <li key={index} className={styles.item}>
                <NavLink
                  className={styles.link}
                  to={item.to}>
                  <span className={styles.text}>
                    {item.text}
                  </span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default AsideMenu