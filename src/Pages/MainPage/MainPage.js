import MainSlider from '../../components/MainSlider/MainSlider';
import CatalogNav from '../../components/catalogNav/catalogNav';
import SectionAbout from '../../components/SectionAbout/SectionAbout';
import ShowRoom from '../../components/ShowRoom/ShowRoom';
import SectionSignup from '../../components/SectionSignup/SectionSignup';
import SectionReview from '../../components/SectionReview/SectionReview';

import styles from './MainPage.module.css'

function MainPage() {
  return (
    <main className={styles.main}>
      <MainSlider />
      <CatalogNav />
      <SectionAbout />
      <ShowRoom />
      <SectionSignup />
      <SectionReview />
    </main>
  )
}



export default MainPage;
