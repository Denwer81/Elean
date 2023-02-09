import React from 'react'
import AsideMenu from '../../components/Ui/AsideMenu/AsideMenu'
import ProductCard from '../../components/Ui/ProductCard/ProductCard'
import { cardData, shuffleCardData } from './hardProuctData' 

import styles from './ProductsPage.module.css'

const ProductsPage = () => {
  const randomData = shuffleCardData(cardData)

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>НАШИ КОЛЛЕКЦИИ</h2>
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <AsideMenu />
        </div>
        <ul className={styles.productList}>
          {randomData.map((item, index) => {
            return (
              <li key={index} className={styles.listItem}>
                <ProductCard
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  text={item.text}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default ProductsPage