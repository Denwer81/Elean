import React from 'react'
import FooterNav from '../FooterNav/FooterNav'
import MainLogo from '../MainLogo/MainLogo'
import SosialNav from '../SosialNav/SosialNav'
import Container from '../Ui/Container/Container'
import PhoneLink from '../Ui/PhoneLink/PhoneLink'

import styles from './Footer.module.css'
import FooterForm from './FooterForm/FooterForm'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container type={'main'}>
        <div className={styles.wrapper}>
          <div className={styles.contacts}>
            <div className={styles.mobileNav}>
              <FooterNav />
            </div>
            <div className={styles.containerLogo}>
              <MainLogo />
            </div>
            <div className={styles.phones}>
              <PhoneLink text={'ТЕЛ.: +7(495) 150-14-77'} to={"tel:+74951501477"} />
              <PhoneLink text={'WHATSAPP.: +7(977) 728-27-38'} to={"https://wa.me/79777282738"} />
            </div>
            <div className={styles.email}>
              <PhoneLink text={'EMAIL: info@eleanboutique.ru'} to={"mailto:info@eleanboutique.ru"} />
            </div>
          </div>
          <div className={styles.nav}>
            <div className={styles.navContainer}>
              <FooterNav />
            </div>
            <div className={styles.addresContainer}>
              <p className={styles.addres}>
                АДРЕС:
                <br></br>
                г. Москва, ул. Новослободская 26, стр1,
                1 подъезд, вход со стороны улица Новослободская, 2 этаж, офис 223
                (Ближайшая станция метро Менделеевская или Новослободская)
              </p>
              <p className={styles.time}>
                РЕЖИМ РАБОТЫ:
                <br></br>
                с 09:00 до 21:00
                <br></br>
                шоурум:
                <br></br>
                с 12:00 до 21:00
              </p>
            </div>
            <SosialNav />
          </div>
          <FooterForm />
        </div>
      </Container>
    </footer>
  )
}

export default Footer