import { Route, Routes } from "react-router-dom";
import Footer from '../Footer/Footer';
import Wrapper from '../Ui/Wrapper/Wrapper';
import Header from '../Header/Header';
import MainPage from '../../Pages/MainPage/MainPage';
import ReviewPage from '../../Pages/ReviewPage/ReviewPage';
import ShowroomPage from '../../Pages/ShowroomPage/ShowroomPage';
import AboutUsPage from '../../Pages/AboutUsPage/AboutUsPage';
import ContactsPage from "../../Pages/ContactsPage/ContactsPage";
import TermsPage from "../../Pages/TermsPage/TermsPage";

function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='reviews' element={<ReviewPage />}></Route>
        <Route path='showroom' element={<ShowroomPage />}></Route>
        <Route path='about-us' element={<AboutUsPage />}></Route>
        <Route path='contacts' element={<ContactsPage />}></Route>
        <Route path='terms' element={<TermsPage />}></Route>
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
