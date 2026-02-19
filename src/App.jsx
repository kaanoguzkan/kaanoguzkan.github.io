import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Volunteering />
      <Contact />
      <Footer />
      <ResumeModal />
      <BackToTop />
    </>
  );
}

export default App;
