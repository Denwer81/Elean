import React from 'react'

import styles from './ProductCard.module.css'
import iconLike from '../../../images/productCards/like.png'

const ProductCard = ({ image, title, price, text }) => {
  const renderTitle = `/ ${title}`
  const renderPrice = price.toLocaleString('ru') + ' ₽'

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>{renderTitle}</h3>
        <img className={styles.icon} src={iconLike} alt="like icon" />
      </div>
      <div className={styles.container}>
        <p className={styles.price}>{renderPrice}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default ProductCard
