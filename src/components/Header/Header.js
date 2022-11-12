import React, { useEffect, useState } from 'react'
import CustomerNav from '../CustomerNav/CustomerNav';
import MainLogo from '../MainLogo/MainLogo';
import MainNav from '../MainNav/MainNav'
import SosialNav from '../SosialNav/SosialNav';
import Container from '../Ui/Container/Container';
import {lockScroll, unLockScroll} from '../../services/utils/lockScroll'

import styles from './Header.module.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen ? lockScroll() : unLockScroll()
  }, [isOpen])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={styles.header}>
      <Container type={'main'}>
        <div className={styles.container}>
          <div className={`${styles.topNav} ${isOpen && styles.topNavMobile}`}>
            <button
              onClick={handleToggle}
              className={`${styles.burger} ${isOpen && styles.burgeActive}`}
              type='button'></button>
            <div className={styles.sosial}>
              <SosialNav isOpen={isOpen} />
            </div>
            <div className={styles.logoContainer}>
              <MainLogo isOpen={isOpen} text={'ЖЕНСКИЙ\nСМОКИНГ'} />
            </div>
            <CustomerNav isOpen={isOpen} />
          </div>
          <MainNav isOpen={isOpen} />
        </div>
      </Container>
      <div className={`${styles.mobileOverlay} ${isOpen && styles.mobileOverlayActive}`}></div>
    </header>
  )
}

export default Header;
