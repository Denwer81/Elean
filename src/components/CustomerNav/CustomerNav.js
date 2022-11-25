import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneLink from '../Ui/PhoneLink/PhoneLink'

import likeIcon from '../../images/icons/like.svg'
import cartIcon from '../../images/icons//cart.svg'
import styles from './CustomerNav.module.css'

function CustomerNav({ isOpen }) {
  const [whisList, setWishList] = useState([1, 2])
  const [cart, setCart] = useState([])
  
  return (
    <nav className={styles.container}>
      <div className={styles.phoneContainer}>
        <PhoneLink text={'+7(495) 150-14-77'} to={"tel:+74951501477"} />
      </div>
      <Link
        to={'/whisList'}
        className={`${styles.link} ${isOpen && styles.mobileLink}`}>
        <img src={likeIcon} alt="like" />
        <span className={styles.counter}>{whisList.length}</span>
      </Link>
      <Link
        to={'/cart'}
        className={`${styles.link} ${isOpen && styles.mobileLink}`}>
        <img src={cartIcon} alt="like" />
        <span className={styles.counter}>{cart.length}</span>
      </Link>
    </nav>
  )
}

export default CustomerNav