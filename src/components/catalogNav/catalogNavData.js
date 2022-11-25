import styles from './CatalogNav.module.css'

import img1 from '../../images/catalog/item1.jpg'
import img1_webp from '../../images/catalog/item1.webp'
import img2 from '../../images/catalog/item2.jpg'
import img2_webp from '../../images/catalog/item2.webp'
import img3 from '../../images/catalog/item3.jpg'
import img3_webp from '../../images/catalog/item3.webp'
import img4 from '../../images/catalog/item4.jpg'
import img4_webp from '../../images/catalog/item4.webp'
import img5 from '../../images/catalog/item5.jpg'
import img5_webp from '../../images/catalog/item5.webp'
import img6 from '../../images/catalog/item6.jpg'
import img6_webp from '../../images/catalog/item6.webp'
import img7 from '../../images/catalog/item7.jpg'
import img7_webp from '../../images/catalog/item7.webp'
import img8 from '../../images/catalog/item8.jpg'
import img8_webp from '../../images/catalog/item8.webp'
import img9 from '../../images/catalog/item9.jpg'
import img9_webp from '../../images/catalog/item9.webp'
import img10 from '../../images/catalog/item10.jpg'
import img10_webp from '../../images/catalog/item10.webp'

export const catalogData = [
  {
    imageJpg: img1,
    imageWebp: img1_webp,
    title: 'Новинки',
    linkStyle: `${styles.catalogItem1} ${styles.itemLarge}`,
    imageStyle: `${styles.image} ${styles.imageLarge}`
  },
  {
    imageJpg: img2,
    imageWebp: img2_webp,
    title: 'Акции',
    linkStyle: `${styles.catalogItem2} ${styles.itemSmall}`,
    imageStyle: `${styles.image} ${styles.imageSmall}`,
  },
  {
    imageJpg: img3,
    imageWebp: img3_webp,
    title: 'Костюмы',
    linkStyle: `${styles.catalogItem3} ${styles.itemSmall}`,
    imageStyle: `${styles.image} ${styles.imageSmall}`,
  },
  {
    imageJpg: img4,
    imageWebp: img4_webp,
    title: 'Платья',
    linkStyle: `${styles.catalogItem4} ${styles.itemLarge}`,
    imageStyle: `${styles.image} ${styles.imageLarge}`
  },
  {
    imageJpg: img5,
    imageWebp: img5_webp,
    title: 'Смокинги',
    linkStyle: `${styles.catalogItem5} ${styles.itemSmall}`,
    imageStyle: `${styles.image} ${styles.imageSmall}`,
  },
  {
    imageJpg: img6,
    imageWebp: img6_webp,
    title: 'Брюки',
    linkStyle: `${styles.catalogItem6} ${styles.itemSmall}`,
    imageStyle: `${styles.image} ${styles.imageSmall}`,
  },
  {
    imageJpg: img7,
    imageWebp: img7_webp,
    title: 'Блузы',
    linkStyle: `${styles.catalogItem7} ${styles.itemSmall}`,
    imageStyle: `${styles.image} ${styles.imageSmall}`,
  },
  {
    imageJpg: img8,
    imageWebp: img8_webp,
    title: 'Юбки',
    linkStyle: `${styles.catalogItem8} ${styles.itemSmall}`,
    imageStyle: `${styles.image} ${styles.imageSmall}`,
  },
  {
    imageJpg: img9,
    imageWebp: img9_webp,
    title: 'Топы и жилеты',
    linkStyle: `${styles.catalogItem9} ${styles.itemSmall}`,
    imageStyle: `${styles.image} ${styles.imageSmall}`,
  },
  {
    imageJpg: img10,
    imageWebp: img10_webp,
    title: 'Аксессуары',
    linkStyle: `${styles.catalogItem10} ${styles.itemSmall}`,
    imageStyle: `${styles.image} ${styles.imageSmall}`,
  },
]