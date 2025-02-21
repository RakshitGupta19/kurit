import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import Banner from './common/banner/Banner';
import About from './components/Home/About';
import Feature from './components/Home/Features';
import Venue from './components/Home/Venue';
import Discover from './components/Home/Discover';
import Footer from './common/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Feature/>
      <Venue/>
      <Discover/>
      <Footer/>
    </div>
  );
}

export default App;
