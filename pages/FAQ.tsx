import React, { useState } from 'react';
import { FAQS, CONTACT_INFO } from '../constants';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (question: string) => {
    setOpenSection(openSection === question ? null : question);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
       <section className="bg-brand-dark py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-brand-dark opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                Find answers to common questions about our therapies, booking, and clinic policies.
            </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        {/* Render FAQ Categories */}
        {Object.entries(FAQS).map(([category, items]) => (
            <div key={category} className="mb-10 bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6 capitalize flex items-center gap-2 pb-4 border-b border-gray-100">
                    <div className="w-2 h-6 bg-brand-primary rounded-full"></div>
                    {category === 'visit' ? 'First Visit' : category} 
                </h2>
                <div className="space-y-4">
                    {items.map((item, index) => {
                        const isOpen = openSection === item.question;
                        return (
                            <div key={index} className={`rounded-xl transition-all duration-200 ${isOpen ? 'bg-brand-light/30' : 'hover:bg-gray-50'}`}>
                                <button
                                    onClick={() => toggleSection(item.question)}
                                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                                >
                                    <span className={`font-semibold pr-8 transition-colors ${isOpen ? 'text-brand-primary' : 'text-gray-700'}`}>{item.question}</span>
                                    <div className={`transition-colors flex-shrink-0 ${isOpen ? 'text-brand-primary' : 'text-gray-400'}`}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-4 pb-5 pt-0 text-gray-600 text-sm leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        ))}

        {/* Still Have Questions Box */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-10 text-center text-white shadow-xl mt-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -ml-10 -mb-10"></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
                <p className="text-blue-100 mb-8 max-w-lg mx-auto">Don't see your question answered here? We're happy to help! Reach out directly.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <NavLink to="/contact" className="bg-white text-brand-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-md">
                        Contact Us
                    </NavLink>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="bg-transparent border border-white/30 text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors">
                        Call {CONTACT_INFO.phone}
                    </a>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default FAQ;