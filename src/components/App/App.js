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
import DeliveryPage from "../../Pages/DeliveryPage/DeliveryPage";
import PaymentPage from "../../Pages/PaymentPage/PaymentPage";
import ExchangePage from "../../Pages/ExchangePage/ExchangePage";
import ReturnPage from "../../Pages/ReturnPage/ReturnPage";
import DiscountPage from "../../Pages/DiscountPage/DiscountPage";
import FitingPage from "../../Pages/FitingPage/FitingPage";

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
        <Route path='delivery' element={<DeliveryPage />}></Route>
        <Route path='payment' element={<PaymentPage />}></Route>
        <Route path='exchange' element={<ExchangePage />}></Route>
        <Route path='return' element={<ReturnPage />}></Route>
        <Route path='discount' element={<DiscountPage />}></Route>
        <Route path='fiting' element={<FitingPage />}></Route>
        <Route path='terms' element={<TermsPage />}></Route>
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
