import React from 'react';
import { CONTACT_INFO, OPENING_HOURS } from '../constants';
import { MapPin, Phone, Mail, Clock, CreditCard, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-brand-dark py-20 text-center text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-brand-dark"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-heading font-bold mb-6">Contact & Booking</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            We're here to help. Get in touch or schedule your session instantly online.
            </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Contact Details</h2>
                    <ul className="space-y-8">
                        <li className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0 shadow-sm">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Visit Us</h3>
                                <p className="text-gray-600 font-medium">{CONTACT_INFO.address}</p>
                                <p className="text-sm text-gray-400 mt-1">{CONTACT_INFO.locationNote}</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0 shadow-sm">
                                <Phone size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Call Us</h3>
                                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-brand-primary font-medium text-lg transition-colors">
                                    {CONTACT_INFO.phone}
                                </a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0 shadow-sm">
                                <Mail size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Email</h3>
                                <a href={`mailto:${CONTACT_INFO.altEmail}`} className="text-gray-600 hover:text-brand-primary font-medium transition-colors break-all">
                                    {CONTACT_INFO.altEmail}
                                </a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0 shadow-sm">
                                <Clock size={22} />
                            </div>
                            <div className="w-full">
                                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Opening Hours</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {OPENING_HOURS.map((h, i) => (
                                        <li key={i} className="flex justify-between border-b border-gray-50 pb-1 last:border-0">
                                            <span>{h.day}</span>
                                            <span className="font-semibold text-gray-800">{h.hours}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Map */}
                <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 h-72 overflow-hidden">
                    <iframe 
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.288277258907!2d151.1504990762615!3d-33.88392101975059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b03666060c1d%3A0xc3f8e58376483321!2s100%20Jarrett%20St%2C%20Leichhardt%20NSW%202040%2C%20Australia!5e0!3m2!1sen!2sus!4v1709224150000!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, borderRadius: '12px' }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Main Content: Booking & Form */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Booking Iframe */}
                <div id="booking" className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-6 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
                        <h2 className="text-xl font-bold">Book Online</h2>
                        <p className="text-blue-100 text-sm">Select your service and preferred time below.</p>
                    </div>
                    <div className="h-[800px] w-full relative">
                        <iframe 
                            src={CONTACT_INFO.bookingUrl}
                            frameBorder="0"
                            scrolling="auto"
                            width="100%"
                            height="100%"
                            title="Cliniko Booking"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-10">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
                        <p className="text-gray-500">Have a specific question? Fill out the form below.</p>
                    </div>
                    
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative group">
                                <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary focus:bg-white outline-none transition-all" required />
                            </div>
                            <div className="relative group">
                                <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary focus:bg-white outline-none transition-all" required />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative group">
                                <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone</label>
                                <input type="tel" id="phone" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary focus:bg-white outline-none transition-all" />
                            </div>
                            <div className="relative group">
                                <label htmlFor="service" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Service Interest</label>
                                <select id="service" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary focus:bg-white outline-none transition-all">
                                    <option value="">Select a service...</option>
                                    <option value="sports">Sports Massage</option>
                                    <option value="remedial">Remedial Massage</option>
                                    <option value="needling">Dry Needling</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="relative group">
                            <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Message</label>
                            <textarea id="message" rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary focus:bg-white outline-none transition-all" required></textarea>
                        </div>
                        <button type="button" className="bg-brand-dark text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all shadow-md hover:shadow-xl w-full md:w-auto flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;