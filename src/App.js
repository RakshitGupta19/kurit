import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import Banner from './common/banner/Banner';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './common/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
