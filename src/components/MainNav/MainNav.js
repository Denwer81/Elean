import React, { useState } from 'react'
import CustomLink from '../Ui/CustomLink/CustomLink'
import SubMenuCategory from './SubMenuCategory/SubMenuCategory'

import styles from './MainNav.module.css'
import SubMenuColection from './SubMenuCollection/SubMenuCollection'
import SubMenuBuyers from './SubMenuBuyers/SubMenuBuyers'
import SubMenuAboutBrand from './SubMenuAboutBrand/SubMenuAboutBrand'

function MainNav({ isOpen }) {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenCollection, setIsOpenCollection] = useState(false);
  const [isOpenBuyers, setIsOpenBuyers] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);

  const className = !isOpen
    ? `${styles.dropMenu} ${styles.category}` : styles.menuMobile

  const handleToggleSubMenu = (isOpenSub, setIsOpenSub) => {
    setIsOpenSub(!isOpenSub)
  }

  return (
    <nav className={`${styles.nav} ${isOpen && styles.navMobile}`}>
      <ul className={`${styles.list} ${isOpen && styles.listMobile}`}>
        
        <li className={isOpen ? styles.itemList : ''}>
          <CustomLink
            to={'https://ru-ru.facebook.com'}
            isOpen={isOpen}
            text={'новинки'}
            type={'default'} />
        </li>

        <li
          className={isOpen ? styles.itemList : ''}
          onClick={() => handleToggleSubMenu(isOpenCategory, setIsOpenCategory)}>
          <CustomLink
            to={'https://ru-ru.facebook.com'}
            isOpen={isOpen}
            text={`${!isOpen ? 'категории' : 'категории +'}`}
            type={'default'} />
          <ul className={`${className} ${isOpenCategory && styles.menuMobileActive}`}>
            <SubMenuCategory isOpen={isOpen} />
          </ul>
        </li>

        <li
          className={isOpen ? styles.itemList : ''}
          onClick={() => handleToggleSubMenu(isOpenCollection, setIsOpenCollection)}>
          <CustomLink
            to={'https://ru-ru.facebook.com'}
            isOpen={isOpen}
            text={`${!isOpen ? 'наши коллекции' : 'наши коллекции +'}`}
            type={'default'} />
          <ul className={`${className} ${isOpenCollection && styles.menuMobileActive}`}>
            <SubMenuColection isOpen={isOpen} />
          </ul>
        </li>

        <li
          className={isOpen ? styles.itemList : ''}
          onClick={() => handleToggleSubMenu(isOpenBuyers, setIsOpenBuyers)}>
          <CustomLink
            to={'https://ru-ru.facebook.com'}
            isOpen={isOpen}
            text={`${!isOpen ? 'покупателям' : 'покупателям +'}`}
            type={'default'} />
          <ul className={`${className} ${isOpenBuyers && styles.menuMobileActive}`}>
            <SubMenuBuyers isOpen={isOpen} />
          </ul>
        </li>

        <li
          className={isOpen ? styles.itemList : ''}
          onClick={() => handleToggleSubMenu(isOpenAbout, setIsOpenAbout)}>
          <CustomLink
            to={'https://ru-ru.facebook.com'}
            isOpen={isOpen}
            text={`${!isOpen ? 'о бренде' : 'о бренде +'}`}
            type={'default'} />
          <ul className={`${className} ${isOpenAbout && styles.menuMobileActive}`}>
            <SubMenuAboutBrand isOpen={isOpen} />
          </ul>
        </li>

        <li className={isOpen ? styles.itemList : ''}>
          <CustomLink
            to={'https://ru-ru.facebook.com'}
            isOpen={isOpen}
            text={'шоурум'}
            type={'default'} />
        </li>
        
        <li className={isOpen ? styles.itemList : ''}>
          <CustomLink
            to={'https://ru-ru.facebook.com'}
            isOpen={isOpen}
            text={'контакты'}
            type={'default'} />
        </li>
      </ul>
    </nav>
  )
}

export default MainNav;
