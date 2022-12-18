import React, { useEffect, useState } from 'react'
import CustomerNav from '../CustomerNav/CustomerNav';
import MainLogo from '../MainLogo/MainLogo';
import MainNav from '../MainNav/MainNav'
import SosialNav from '../SosialNav/SosialNav';
import Container from '../Ui/Container/Container';
import { lockScroll, unLockScroll } from '../../services/utils/lockScroll'

import styles from './Header.module.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHide, setIsHide] = useState(false)

  useEffect(() => {
    isOpen ? lockScroll() : unLockScroll()
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const reRenderMenu = () => {
    setIsHide(true)
    setTimeout(() => {
      setIsHide(false)
    }, 0)
  }

  return (
    <header className={styles.header}>
      <Container type={'main'}>
        <div className={styles.container}>
          <div className={`${styles.topNav} ${isOpen && styles.topNavMobile}`}>
            <button
              onClick={handleToggle}
              className={`${styles.burger} ${isOpen && styles.burgeActive}`}
              aria-label="open menu"
              type='button'>
            </button>
            <div className={styles.sosial}>
              <SosialNav isOpen={isOpen} />
            </div>
            <div className={styles.logoContainer}>
              <MainLogo isOpen={isOpen} text={'ЖЕНСКИЙ\nСМОКИНГ'} />
            </div>
            <CustomerNav isOpen={isOpen} />
          </div>
          {
            !isHide && <MainNav
              isOpen={isOpen}
              handleToggle={handleToggle}
              handleClose={handleClose}
              reRenderMenu={reRenderMenu} />
          }
        </div>
      </Container>
      <div className={`${styles.mobileOverlay} ${isOpen && styles.mobileOverlayActive}`}></div>
    </header>
  )
}

export default Header;
