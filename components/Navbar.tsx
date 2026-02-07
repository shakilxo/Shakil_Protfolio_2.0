
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { User, Zap, Mail, Menu, X, Home, LayoutGrid } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
    { name: 'Skills', path: '/skills', icon: <Zap size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 pt-6 px-6 ${isScrolled ? 'translate-y-0' : 'translate-y-2'}`}>
      <div className={`max-w-5xl mx-auto flex justify-between items-center px-8 py-3 rounded-[2rem] transition-all duration-500 border border-white/20 shadow-2xl ${isScrolled ? 'liquid-glass' : 'bg-transparent border-transparent shadow-none'}`}>
        <Link to="/" className="font-display text-2xl font-extrabold tracking-tighter">
          SH<span className="text-brand-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 font-semibold text-sm ${
                  location.pathname === link.path 
                    ? 'bg-white dark:bg-slate-800 text-brand-500 shadow-xl scale-[1.02]' 
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.icon}
                <span className="hidden lg:inline">{link.name}</span>
              </Link>
            ))}
          </div>
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-2"></div>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <button onClick={() => setIsOpen(!isOpen)} className="p-3 rounded-2xl liquid-glass active:scale-90 transition-transform">
            {isOpen ? <X size={20} /> : <LayoutGrid size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-6 right-6 mt-4 p-8 liquid-glass rounded-[2.5rem] shadow-2xl animate-fade-in-down border border-white/20">
          <div className="grid grid-cols-2 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex flex-col items-center gap-3 p-6 rounded-3xl transition-all ${
                  location.pathname === link.path 
                  ? 'bg-brand-600 text-white shadow-lg' 
                  : 'bg-white/10 dark:bg-black/20 hover:bg-brand-50 dark:hover:bg-slate-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span className="text-xs font-bold uppercase tracking-widest">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
