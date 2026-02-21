import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const GitHubActivity = lazy(() => import('./components/GitHubActivity'));
const Skills = lazy(() => import('./components/Skills'));
const Volunteering = lazy(() => import('./components/Volunteering'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const BlogList = lazy(() => import('./components/BlogList'));
const BlogPost = lazy(() => import('./components/BlogPost'));

function HomePage() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Projects />
          <GitHubActivity />
          <Skills />
          <Volunteering />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Suspense>
      <Suspense fallback={null}>
        <ResumeModal />
        <ProjectModal />
        <BackToTop />
      </Suspense>
    </>
  );
}

export default App;
