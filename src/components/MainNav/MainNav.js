import React, { useState } from 'react'
import CustomLink from '../Ui/CustomLink/CustomLink'
import SubMenu from './SubMenu/SubMenu'
import {
  SubMenuAboutBrandData,
  SubMenuBuyersData,
  SubMenuCollectionData,
  SubMenuCategoryData
} from './SubMenu/SubMenuData'

import styles from './MainNav.module.css'

function MainNav({ isOpen, handleClose, reRenderMenu }) {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenCollection, setIsOpenCollection] = useState(false);
  const [isOpenBuyers, setIsOpenBuyers] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);

  const handleToggleSubMenu = (isOpenSub, setIsOpenSub) => {
    setIsOpenCategory(false)
    setIsOpenCollection(false)
    setIsOpenBuyers(false)
    setIsOpenAbout(false)
    setIsOpenSub(!isOpenSub)
  }

  return (
    <nav className={`${styles.nav} ${isOpen && styles.navMobile}`}>
      <ul className={`${styles.list} ${isOpen && styles.listMobile}`}>

        <li
          onClick={handleClose}
          className={isOpen ? styles.itemList : ''}>
          <CustomLink
            to={'/category/sale'}
            isOpen={isOpen}
            text={'SALE'}
            type={'default'} />
        </li>

        <li
          className={isOpen ? styles.itemList : styles.menu}
          onClick={() => handleToggleSubMenu(isOpenCategory, setIsOpenCategory)}>
          <CustomLink
            to={'/category'}
            isOpen={isOpen}
            text={`${!isOpen ? 'категории' : 'категории +'}`}
            type={'default'} />
          <ul className={`${!isOpen
            ? `${styles.dropMenu} ${styles.category}`
            : styles.menuMobile} ${isOpenCategory && styles.menuMobileActive}`}>
            <SubMenu
              data={SubMenuCategoryData}
              isOpen={isOpen}
              handleClose={handleClose}
              reRenderMenu={reRenderMenu} />
          </ul>
        </li>

        <li
          className={isOpen ? styles.itemList : styles.menu}
          onClick={() => handleToggleSubMenu(isOpenCollection, setIsOpenCollection)}>
          <CustomLink
            to={'/collection'}
            isOpen={isOpen}
            text={`${!isOpen ? 'наши коллекции' : 'наши коллекции +'}`}
            type={'default'} />
          <ul className={`${!isOpen
            ? `${styles.dropMenu} ${styles.collection}`
            : styles.menuMobile} ${isOpenCollection && styles.menuMobileActive}`}>
            <SubMenu
              data={SubMenuCollectionData}
              isOpen={isOpen}
              handleClose={handleClose}
              reRenderMenu={reRenderMenu} />
          </ul>
        </li>

        <li
          className={isOpen ? styles.itemList : styles.menu}
          onClick={() => handleToggleSubMenu(isOpenBuyers, setIsOpenBuyers)}>
          <CustomLink
            to={'/delivery'}
            isOpen={isOpen}
            text={`${!isOpen ? 'покупателям' : 'покупателям +'}`}
            type={'default'} />
          <ul className={`${!isOpen
            ? `${styles.dropMenu} ${styles.buyers}`
            : styles.menuMobile} ${isOpenBuyers && styles.menuMobileActive}`}>
            <SubMenu
              data={SubMenuBuyersData}
              isOpen={isOpen}
              handleClose={handleClose}
              reRenderMenu={reRenderMenu} />
          </ul>
        </li>

        <li
          className={isOpen ? styles.itemList : styles.menu}
          onClick={() => handleToggleSubMenu(isOpenAbout, setIsOpenAbout)}>
          <CustomLink
            to={'/about-us'}
            isOpen={isOpen}
            text={`${!isOpen ? 'о бренде' : 'о бренде +'}`}
            type={'default'} />
          <ul className={`${!isOpen
            ? `${styles.dropMenu} ${styles.about}`
            : styles.menuMobile} ${isOpenAbout && styles.menuMobileActive}`}>
            <SubMenu
              data={SubMenuAboutBrandData}
              isOpen={isOpen}
              handleClose={handleClose}
              reRenderMenu={reRenderMenu} />
          </ul>
        </li>

        <li
          onClick={handleClose}
          className={isOpen ? styles.itemList : styles.menu}>
          <CustomLink
            to={'/showroom'}
            isOpen={isOpen}
            text={'шоурум'}
            type={'default'} />
        </li>

        <li
          onClick={handleClose}
          className={isOpen ? styles.itemList : styles.menu}>
          <CustomLink
            to={'/contacts'}
            isOpen={isOpen}
            text={'контакты'}
            type={'default'} />
        </li>
      </ul>
    </nav>
  )
}

export default MainNav;
