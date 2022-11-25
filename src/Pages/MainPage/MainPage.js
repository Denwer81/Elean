import MainSlider from '../../components/MainSlider/MainSlider';
import CatalogNav from '../../components/CatalogNav/catalogNav';
import SectionAbout from '../../components/SectionAbout/SectionAbout';
import SectionShowroom from '../../components/SectionShowroom/SectionShowroom';
import SectionSignup from '../../components/SectionSignup/SectionSignup';
import SectionReview from '../../components/SectionReview/SectionReview';

import styles from './MainPage.module.css'

function MainPage() {
  return (
    <main className={styles.main}>
      <MainSlider />
      <CatalogNav />
      <SectionAbout />
      <SectionShowroom />
      <SectionSignup />
      <SectionReview />
    </main>
  )
}



export default MainPage;
