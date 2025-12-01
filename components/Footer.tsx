import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO, OPENING_HOURS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-white">Ninja Motion Therapies</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Professional sports and remedial massage therapy in Leichhardt, NSW. Helping you recover faster, move better, and feel stronger at Olympian Frontiers Gym.
            </p>
            <div className="flex space-x-4">
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="bg-gray-700 hover:bg-brand-primary p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-brand-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><NavLink to="/about" className="hover:text-white transition-colors">About Yuhan</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition-colors">Services</NavLink></li>
              <li><NavLink to="/conditions" className="hover:text-white transition-colors">Conditions We Treat</NavLink></li>
              <li><NavLink to="/education" className="hover:text-white transition-colors">Education</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-white transition-colors">FAQ</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-brand-primary">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 text-brand-accent mt-0.5" size={18} />
                <span>
                  {CONTACT_INFO.address}<br/>
                  <span className="text-gray-400 text-xs">{CONTACT_INFO.locationNote}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-brand-accent" size={18} />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-brand-accent" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-brand-primary">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {OPENING_HOURS.map((schedule, idx) => (
                <li key={idx} className="flex justify-between border-b border-gray-800 pb-2 last:border-0">
                  <span>{schedule.day}</span>
                  <span className="text-white font-medium">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ninja Motion Therapies. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;