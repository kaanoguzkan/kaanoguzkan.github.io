import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollManager from './components/ScrollManager';

const Now = lazy(() => import('./components/Now'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Academics = lazy(() => import('./components/Academics'));
const Projects = lazy(() => import('./components/Projects'));
const GitHubActivity = lazy(() => import('./components/GitHubActivity'));
const Skills = lazy(() => import('./components/Skills'));
const Volunteering = lazy(() => import('./components/Volunteering'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const CaseStudy = lazy(() => import('./components/CaseStudy'));
const ResumePage = lazy(() => import('./components/ResumePage'));
const CommandPalette = lazy(() => import('./components/CommandPalette'));

function HomePage() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <Now />
          <About />
          <Experience />
          <Academics />
          <Projects />
          <GitHubActivity />
          <Skills />
          <Volunteering />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        {/* Morse ticker disabled. To re-enable: lazy-import ./components/NemikMorse and render <NemikMorse /> here */}
        <Footer />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/resume" element={<ResumePage />} />
          {/* Blog disabled. To re-enable: lazy-import ./components/BlogList and BlogPost and add /blog and /blog/:slug routes */}
        </Routes>
      </Suspense>
      <Suspense fallback={null}>
        <ResumeModal />
        <ProjectModal />
        <BackToTop />
        <CommandPalette />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
