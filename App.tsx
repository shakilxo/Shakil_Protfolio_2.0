
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <div className="space-y-32 pb-24">
    <Hero />
    
    <section className="max-w-7xl mx-auto px-6">
      <div className="liquid-glass p-12 md:p-24 rounded-[3rem] text-center space-y-8">
        <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.4em]">The Core Vision</h2>
        <p className="text-3xl md:text-5xl font-display font-bold leading-tight">
          Engineering <span className="text-gradient">seamless interactions</span> through high-performance software.
        </p>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          I don't just write code; I design scalable systems that solve real-world problems. Focused on the MERN stack, I bridge the gap between complex logic and elegant UI.
        </p>
      </div>
    </section>

    <Projects />
    <Experience />
  </div>
);

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme ? savedTheme === 'dark' : true;
    setIsDark(initialTheme);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-500 selection:text-white">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="relative pt-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
