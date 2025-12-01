
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Conditions', path: '/conditions' },
    { name: 'Education', path: '/education' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-3 group">
              <img 
                src="images/image1.png" 
                alt="Ninja Motion Therapies Logo" 
                className="h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                    isActive 
                      ? 'text-brand-primary bg-brand-light' 
                      : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="text-gray-500 hover:text-brand-primary transition-colors flex items-center gap-2 font-medium text-sm"
            >
              <Phone size={16} />
              {CONTACT_INFO.phone}
            </a>
            <a
              href={CONTACT_INFO.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-dark hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 text-sm"
            >
              <Calendar size={16} />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-primary focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-light text-brand-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-6 border-t border-gray-100 mt-4 space-y-4">
            <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 text-gray-600 font-medium py-2"
              >
                <Phone size={18} /> {CONTACT_INFO.phone}
              </a>
            <a
              href={CONTACT_INFO.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-4 py-3 rounded-xl font-bold text-lg shadow-md"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
