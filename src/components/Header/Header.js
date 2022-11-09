import React, { useState } from 'react'
import CustomerNav from '../CustomerNav/CustomerNav';
import MainLogo from '../MainLogo/MainLogo';
import MainNav from '../MainNav/MainNav'
import SosialNav from '../SosialNav/SosialNav';
import Container from '../Ui/Container/Container';

import styles from './Header.module.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.wrapper}>
      <Container type={'main'}>
        <div className={styles.container}>
          <div className={`${styles.topNav} ${isOpen && styles.topNavMobile}`}>
            <button
              onClick={handleToggle}
              className={`${styles.burger} ${isOpen && styles.burgeActive}`}
              type='button'></button>
            <SosialNav isOpen={isOpen} />
            <MainLogo isOpen={isOpen} text={'ЖЕНСКИЙ\nСМОКИНГ'} />
            <CustomerNav isOpen={isOpen} />
          </div>
          <MainNav isOpen={isOpen}/>
        </div>
      </Container>
      <div className={`${styles.mobileOverlay} ${isOpen && styles.mobileOverlayActive}`}></div>
    </div>
  )
}

export default Header;
