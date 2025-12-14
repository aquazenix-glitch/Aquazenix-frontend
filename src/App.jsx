import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ServicesPage from './pages/ServicesPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Stats />
              <Services />
              <Process />
              <Gallery />
              <Comparison />
              <Testimonials />
              <FAQ />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
