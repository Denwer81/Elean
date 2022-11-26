import React from 'react'
import Title from '../Ui/Title/Title'
import { Link } from 'react-router-dom'

import aboutImg_L from '../../images/about/about.png'
import aboutImg_L_webp from '../../images/about/about.webp'
import aboutImg_S from '../../images/about/about_S.jpg'
import styles from './SectionAbout.module.css'

const SectionAbout = () => {
  return (
    <section className={styles.about}>
      <Title title='о бренде' />
      <div className={styles.container}>
        <picture>
          <source type="image/webp" srcSet={aboutImg_L_webp}  media='(min-width: 830px)'/>
          <source type="image/jpeg" srcSet={aboutImg_L}  media='(min-width: 830px)'/>
          <img className={styles.image} src={aboutImg_S} alt="about" />
        </picture>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Сегодня ELEAN - это первый в России магазин готового женского смокинга. У нас каждая женщина может подобрать для себя образ со смокингом, такой же как у голливудских див и звезд светской хроники.
          </p>
          <p className={styles.text}>
            Костюм со смокингом ELEAN - выбор звёзд эстрады и кино, телеведущих, fashion-стилистов, успешных женщин-руководителей, представительниц научной и деловой элиты.
          </p>
          <p className={styles.text}>
            История бренда началась задолго до первого показа, который состоялся 12 марта 2016 года, с мечты автора коллекции, Елены Писаревой о собственном бренде элегантной одежды и продолжалась долгие 30 лет накопления профессионального опыта. Вся первая коллекция была выполнена из 100% натурального шелка, в нее вошли жентсвенные платья и костюмы.
          </p>
          <Link className={styles.link} to='/about-us'>Подробнее&nbsp;\&nbsp;&nbsp;-&rarr;</Link>
        </div>
      </div>
    </section>

  )
}

export default SectionAbout