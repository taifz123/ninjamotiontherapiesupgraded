import React, { useState } from 'react';
import { CONDITIONS_DATA } from '../constants';
import { NavLink } from 'react-router-dom';

const Conditions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('upper');

  const tabs = [
    { id: 'upper', label: 'Upper Body' },
    { id: 'lower', label: 'Lower Body' },
    { id: 'core', label: 'Core & Spine' },
    { id: 'sports', label: 'Sports Specific' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
       <section className="bg-brand-dark py-20 text-center text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-brand-dark"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Conditions We Treat</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              We provide comprehensive treatment for a wide range of conditions affecting your movement and quality of life.
            </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Tabs - Pill Style */}
        <div className="bg-white p-2 rounded-full shadow-lg inline-flex flex-wrap justify-center gap-2 mb-12 w-full md:w-auto mx-auto border border-gray-100">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 flex-grow md:flex-grow-0 ${
                        activeTab === tab.id 
                        ? 'bg-brand-primary text-white shadow-md transform scale-105' 
                        : 'bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>

        {/* Content Area */}
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{CONDITIONS_DATA[activeTab].title}</h2>
                <p className="text-lg text-gray-500">{CONDITIONS_DATA[activeTab].description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CONDITIONS_DATA[activeTab].items.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                        <div className="p-8">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                                <div className="w-2 h-2 rounded-full bg-brand-accent mt-2"></div>
                            </div>
                            
                            <div className="mb-6">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">Common Symptoms</span>
                                <ul className="grid grid-cols-2 gap-2">
                                    {item.symptoms.map((sym, sIdx) => (
                                        <li key={sIdx} className="text-sm text-gray-600 flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                            {sym}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="bg-brand-light/50 p-5 rounded-xl border border-brand-light">
                                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-2">Treatment Approach</span>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {item.treatment}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Generic Occupational Section */}
        <div className="mt-20">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Occupational & Daily Life Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Desk Worker Posture", desc: "Neck pain, headaches, and rounded shoulders from computer use." },
                    { title: "Repetitive Strain", desc: "Carpal tunnel, forearm pain, and tendonitis from repetitive tasks." },
                    { title: "Standing Job Fatigue", desc: "Lower back pain, plantar fasciitis, and leg fatigue." },
                    { title: "Manual Labor Strain", desc: "Chronic soreness, joint stress, and heavy lifting injuries." }
                ].map((job, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:border-brand-primary/30 transition-colors">
                        <h3 className="font-bold text-gray-900 mb-2">{job.title}</h3>
                        <p className="text-gray-600 text-sm">{job.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Missing Condition CTA */}
        <div className="mt-20 bg-gradient-to-br from-brand-dark to-slate-800 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-brand-primary opacity-10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Don't see your condition listed?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                    We treat many more conditions than listed here. Contact us to discuss your specific situation and how we can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <NavLink to="/contact" className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg">
                        Book Assessment
                    </NavLink>
                    <NavLink to="/services" className="bg-white/10 border border-white/20 hover:bg-white hover:text-brand-dark text-white font-bold py-3 px-8 rounded-full transition-all backdrop-blur-sm">
                        View Services
                    </NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;