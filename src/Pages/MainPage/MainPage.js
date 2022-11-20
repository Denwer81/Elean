import { Link } from 'react-router-dom';
import MainSlider from '../../components/MainSlider/MainSlider';

import styles from './MainPage.module.css'
import img1 from '../../images/item1.png'
import img2 from '../../images/item2.png'
import img3 from '../../images/item3.png'
import img4 from '../../images/item4.png'
import img5 from '../../images/item5.png'
import img6 from '../../images/item6.png'
import img7 from '../../images/item7.png'
import img8 from '../../images/item8.png'
import img9 from '../../images/item9.png'
import img10 from '../../images/item10.png'
import Wrapper from '../../components/Ui/Wrapper/Wrapper';

function MainPage() {
  return (
    <main className={styles.main}>
      <MainSlider />
      <Wrapper>
      <div className={styles.catalog}>
        <Link className={`${styles.catalogItem1} ${styles.itemLarge}`}>
          <h2 className={styles.title}>Новинки</h2>
          <img className={`${styles.image} ${styles.imageLarge}`} src={img1} alt="catalogImg" />
        </Link>
        <Link className={`${styles.catalogItem2} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Новинки</h2>
          <img className={`${styles.image} ${styles.imageSmall}`} src={img2} alt="catalogImg" />
        </Link>
        <Link className={`${styles.catalogItem3} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Новинки</h2>
          <img className={`${styles.image} ${styles.imageSmall}`} src={img3} alt="catalogImg" />
        </Link>
        <Link className={`${styles.catalogItem4} ${styles.itemLarge}`}>
          <h2 className={styles.title}>Новинки</h2>
          <img className={`${styles.image} ${styles.imageLarge}`} src={img4} alt="catalogImg" />
        </Link>
        <Link className={`${styles.catalogItem5} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Новинки</h2>
          <img className={`${styles.image} ${styles.imageSmall}`} src={img5} alt="catalogImg" />
        </Link>
        <Link className={`${styles.catalogItem6} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Новинки</h2>
          <img className={`${styles.image} ${styles.imageSmall}`} src={img6} alt="catalogImg" />
        </Link>
        <Link className={`${styles.catalogItem7} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Новинки</h2>
          <img className={`${styles.image} ${styles.imageSmall}`} src={img7} alt="catalogImg" />
        </Link>
        <Link className={`${styles.catalogItem8} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Новинки</h2>
          <img className={`${styles.image} ${styles.imageSmall}`} src={img8} alt="catalogImg" />
        </Link>
        <Link className={`${styles.catalogItem9} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Новинки</h2>
          <img className={`${styles.image} ${styles.imageSmall}`} src={img9} alt="catalogImg" />
        </Link>
        <Link className={`${styles.catalogItem10} ${styles.itemSmall}`}>
          <h2 className={styles.title}>Новинки</h2>
          <img className={`${styles.image} ${styles.imageSmall}`} src={img10} alt="catalogImg" />
        </Link>
      </div>
      </Wrapper>
      </main>
  )
}

export default MainPage;
