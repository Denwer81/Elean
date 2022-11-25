import React from 'react'
import CustomLink from '../../Ui/CustomLink/CustomLink'

import styles from './SubMenu.module.css'

function SubMenu({ isOpen, handleClose, reRenderMenu, data }) {


  const handleClick = () => {
    reRenderMenu()
    handleClose()
  }

  return (
    <>
      {
        data.map((item, index) => {
          return (
            <li key={index} className={styles.link} onClick={handleClick}>
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

export default SubMenu