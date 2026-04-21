import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Events', path: '/events' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-darker/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 z-50">
            <span className="brand-text text-3xl md:text-4xl px-2 py-1 bg-zinc-900/40 rounded border border-white/5 border-b-black/50 shadow-inner">
              FOOD NEST RESTAURANT
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {LINKS.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${location.pathname === link.path ? 'text-gold' : 'text-text-offwhite hover:text-gold'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 z-50">
            <a href="https://wa.me/263784233075" className="px-6 py-2.5 rounded text-sm font-semibold border-2 border-gold text-gold hover:bg-gold hover:text-dark transition-all">
              Order Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden z-50 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-darker pt-24 px-4 pb-8 flex flex-col space-y-6 md:hidden overflow-y-auto"
          >
            {LINKS.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-display font-medium ${location.pathname === link.path ? 'text-gold' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 mt-auto border-t border-white/10">
              <a href="https://wa.me/263784233075" className="block w-full text-center px-6 py-4 rounded bg-gold text-dark font-semibold text-lg">
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
