import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/globals.css';

const Hero       = lazy(() => import('./sections/Hero'));
const About      = lazy(() => import('./sections/About'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects   = lazy(() => import('./sections/Projects'));
const Apis       = lazy(() => import('./sections/Apis'));
const Contact    = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Apis />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
