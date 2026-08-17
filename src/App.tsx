import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="glow-bg">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
      </div>
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
