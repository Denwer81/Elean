import { Link } from 'react-router-dom';
import Wrapper from '../Ui/Wrapper/Wrapper';
import { catalogData } from './catalogNavData';

import styles from './CatalogNav.module.css'

function CatalogNav() {
  return (
    <Wrapper>
      <section className={styles.catalog}>
        {
          catalogData.map((item, index) => {
            return (
              <Link key={index} to={item.to} className={item.linkStyle}>
                <h2 className={styles.title}>{item.title}</h2>
                <picture>
                  <source type="image/webp" srcSet={item.imageWebp} />
                  <img className={item.imageStyle} src={item.imageJpg} alt="catalogImg" width="662" height="756"/>
                </picture>
              </Link>
            )
          })
        }
      </section>
    </Wrapper>
  )
}

export default CatalogNav;