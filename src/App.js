import logo from './logo.svg';
import './App.css';
import HeaderPage from './pages/header';
import Footer from './components/footer/Footer';
import FutureComapniesPage from './pages/futuredCampanies';
import JobstoriesPage from './pages/jobstories';

function App() {
  return (
    <>
      
      <HeaderPage/>
      <JobstoriesPage/>
      {/* <FutureComapniesPage/> */}
      <Footer/>
      
    </>
  );
}

export default App;
