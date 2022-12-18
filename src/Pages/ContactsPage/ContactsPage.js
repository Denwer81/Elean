import React from 'react'
import Title from '../../components/Ui/Title/Title'
import { ContactInfo } from '../../components/Ui/ContactInfo/ContactInfo'

import call from '../../images/contacts/call-add.svg'
import compas from '../../images/contacts/compas.svg'
import doc from '../../images/contacts/doc.svg'
import email from '../../images/contacts/email.svg'
import info from '../../images/contacts/info.svg'
import time from '../../images/contacts/time.svg'
import whatsapp from '../../images/contacts/whatsapp.svg'
import styles from './ContactsPage.module.css'
import SectionSignup from '../../components/SectionSignup/SectionSignup'

const ContactsPage = () => {
  return (
    <main className={styles.main}>
      <Title title={'контакты'} />
      <div className={styles.container}>
        <iframe
          className={styles.map}
          src="https://yandex.ru/map-widget/v1/-/CCUfRZecgD"
          title="yandex card"
          frameBorder="0"
          allowFullScreen
          style={{ position: 'relative' }}>
        </iframe>
        <div className={styles.textContainer}>
          <ContactInfo
            icon={call}
            href={'tel:+74951501477'}
            text={'ТЕЛ.: +7 (495) 150 - 14 - 77'}
          />
          <ContactInfo
            icon={email}
            href={'mailto:info@eleanboutique.ru'}
            text={'EMAIL: info@eleanboutique.ru'}
          />
          <ContactInfo
            icon={whatsapp}
            href={'https://wa.me/79777282738'}
            text={'WHATSAPP: +7 (977) 728-27-38'}
          />
          <ContactInfo
            icon={doc}
            text={'ИП ПИСАРЕВА Е.М.'}
          />
          <ContactInfo
            icon={info}
            text={'ОГРНИП 307610509600011'}
          />
          <ContactInfo
            icon={time}
            text={'с 09:00 до 21:00 шоурум: с 12:00 до 21:00'}
          />
          <ContactInfo
            icon={compas}
            text={'АДРЕС: г. Москва, ул. Новослободская 26, стр1, 1 подъезд 2 этаж, офис 223'}
          />
        </div>
      </div>
      <SectionSignup />
    </main>
  )
}

export default ContactsPage