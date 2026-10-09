import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../cdtrc.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/staff', label: 'Team' },
    { path: '/programs', label: 'Programs' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 bg-white/40 backdrop-blur-lg rounded-full px-4 py-2 shadow-lg border border-white/30">
            <div className="w-14 h-14 flex items-center justify-center">
              <img src={logo} alt="CDTRC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-[var(--sea-blue)] to-[var(--sea-blue-light)] bg-clip-text text-transparent">
                CDTRC
              </div>
              <div className="text-[10px] text-gray-600 hidden lg:block font-medium">
                Training & Research Center
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/40 backdrop-blur-lg rounded-full px-2 py-2 shadow-lg border border-white/30">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                      location.pathname === item.path
                        ? 'text-white'
                        : 'text-gray-700 hover:text-[var(--sea-blue)]'
                    }`}
                  >
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--sea-blue-light)] rounded-full shadow-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
            
            {/* Donate Button */}
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#079247] to-[#065a36] text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-white">🤍</span>
                <span>Donate</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/40 backdrop-blur-lg hover:bg-white/60 transition-all duration-300 border border-white/30 shadow-lg"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-[var(--sea-blue)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-[var(--sea-blue)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/80 backdrop-blur-xl border-t border-white/20 shadow-lg"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-5 py-3 rounded-xl transition-all duration-300 font-medium ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-[var(--sea-blue)] to-[var(--sea-blue-light)] text-white shadow-lg'
                        : 'text-gray-700 hover:bg-white/60 hover:text-[var(--sea-blue)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Donate Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Link to="/donate">
                  <button className="w-full flex items-center justify-center space-x-2 px-5 py-3 bg-gradient-to-r from-[#079247] to-[#065a36] text-white rounded-xl font-medium shadow-lg">
                    <span>🤍</span>
                    <span>Donate</span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}