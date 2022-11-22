import MainSlider from '../../components/MainSlider/MainSlider';
import CatalogNav from '../../components/catalogNav/catalogNav';

import styles from './MainPage.module.css'
import SectionAbout from '../../components/SectionAbout/SectionAbout';
import ShowRoom from '../../components/ShowRoom/ShowRoom';

function MainPage() {
  return (
    <main className={styles.main}>
      <MainSlider />
      <CatalogNav />
      <SectionAbout />
      <ShowRoom />
    </main>
  )
}



export default MainPage;
