import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Hobbies from './components/Hobbies/Hobbies';
import Academic from './components/Academic/Academic';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="tudo">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Hobbies />
      <Academic />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
