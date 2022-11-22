import { Link } from 'react-router-dom';
import Wrapper from '../../components/Ui/Wrapper/Wrapper';

import styles from './catalogNav.module.css'
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

function CatalogNav() {
  return (
    <Wrapper>
      <section className={styles.catalog}>
        <Link className={`${styles.catalogItem1} ${styles.itemLarge}`}>
          <h2 className={styles.title}>Новинки</h2>
          <picture>
            <source type="image/webp" srcSet={img1_webp} />
            <img className={`${styles.image} ${styles.imageLarge}`} src={img1} alt="catalogImg" />
          </picture>
        </Link>
        <Link className={`${styles.catalogItem2} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Акции</h2>
          <picture>
            <source type="image/webp" srcSet={img2_webp} />
            <img className={`${styles.image} ${styles.imageSmall}`} src={img2} alt="catalogImg" />
          </picture>
        </Link>
        <Link className={`${styles.catalogItem3} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Костюмы</h2>
          <picture>
            <source type="image/webp" srcSet={img3_webp} />
            <img className={`${styles.image} ${styles.imageSmall}`} src={img3} alt="catalogImg" />
          </picture>
        </Link>
        <Link className={`${styles.catalogItem4} ${styles.itemLarge}`}>
          <h2 className={styles.title}>Платья</h2>
          <picture>
            <source type="image/webp" srcSet={img4_webp} />
            <img className={`${styles.image} ${styles.imageLarge}`} src={img4} alt="catalogImg" />
          </picture>
        </Link>
        <Link className={`${styles.catalogItem5} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Смокинги</h2>
          <picture>
            <source type="image/webp" srcSet={img5_webp} />
            <img className={`${styles.image} ${styles.imageSmall}`} src={img5} alt="catalogImg" />
          </picture>
        </Link>
        <Link className={`${styles.catalogItem6} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Брюки</h2>
          <picture>
            <source type="image/webp" srcSet={img6_webp} />
            <img className={`${styles.image} ${styles.imageSmall}`} src={img6} alt="catalogImg" />
          </picture>
        </Link>
        <Link className={`${styles.catalogItem7} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Блузы</h2>
          <picture>
            <source type="image/webp" srcSet={img7_webp} />
            <img className={`${styles.image} ${styles.imageSmall}`} src={img7} alt="catalogImg" />
          </picture>
        </Link>
        <Link className={`${styles.catalogItem8} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Юбки</h2>
          <picture>
            <source type="image/webp" srcSet={img8_webp} />
            <img className={`${styles.image} ${styles.imageSmall}`} src={img8} alt="catalogImg" />
          </picture>
        </Link>
        <Link className={`${styles.catalogItem9} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Топы и жилеты</h2>
          <picture>
            <source type="image/webp" srcSet={img9_webp} />
            <img className={`${styles.image} ${styles.imageSmall}`} src={img9} alt="catalogImg" />          </picture>
        </Link>
        <Link className={`${styles.catalogItem10} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Аксессуары</h2>
          <picture>
            <source type="image/webp" srcSet={img10_webp} />
            <img className={`${styles.image} ${styles.imageSmall}`} src={img10} alt="catalogImg" />
          </picture>
        </Link>
      </section>
    </Wrapper>
  )
}

export default CatalogNav;