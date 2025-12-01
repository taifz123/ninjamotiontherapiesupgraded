import React, { useState } from 'react';
import { EDUCATION_CONTENT } from '../constants';
import { ChevronDown, ChevronUp, BookOpen, Lightbulb } from 'lucide-react';

const Education: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-5 pattern-dots"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <BookOpen className="text-white" size={32} />
            </div>
            <h1 className="text-4xl font-heading font-bold mb-4">Knowledge Hub</h1>
            <p className="text-blue-50 max-w-2xl mx-auto text-lg font-light">
            Understand how massage therapy helps you recover, perform better, and live pain-free.
            </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="space-y-6">
            {EDUCATION_CONTENT.map((item, index) => {
                const isExpanded = expandedIndex === index;
                
                return (
                    <div 
                        key={index} 
                        className={`bg-white rounded-2xl shadow-sm transition-all duration-300 overflow-hidden ${isExpanded ? 'shadow-xl ring-1 ring-brand-primary/10' : 'hover:shadow-md'}`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none bg-white z-10 relative"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`mt-1 hidden sm:block w-2 h-12 rounded-full transition-colors ${isExpanded ? 'bg-brand-primary' : 'bg-gray-100'}`}></div>
                                <div>
                                    <h3 className={`text-xl font-bold transition-colors ${isExpanded ? 'text-brand-primary' : 'text-gray-900'}`}>{item.title}</h3>
                                    <p className="text-gray-500 text-sm mt-1 max-w-xl">{item.summary}</p>
                                </div>
                            </div>
                            <div className={`p-3 rounded-full transition-all duration-300 ${isExpanded ? 'bg-brand-primary text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                                <ChevronDown size={20} />
                            </div>
                        </button>
                        
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="px-6 sm:px-8 pb-8 sm:pl-14">
                                <div className="h-px w-full bg-gray-100 mb-8"></div>
                                <div className="prose max-w-none text-gray-600">
                                    <p className="text-lg leading-relaxed mb-8 font-medium text-gray-800">
                                        {item.details.what}
                                    </p>

                                    {/* Benefits Grid */}
                                    {item.details.benefits && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                            {item.details.benefits.map((b, i) => (
                                                <div key={i} className="bg-brand-light/30 p-5 rounded-xl border border-brand-light">
                                                    <strong className="block text-brand-dark mb-1">{b.title}</strong>
                                                    <span className="text-sm text-gray-600">{b.desc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Techniques/Process Lists */}
                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        {item.details.techniques && (
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Key Techniques</h4>
                                                <ul className="space-y-2">
                                                    {item.details.techniques.map((t, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0"></span>
                                                            {t}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {item.details.process && (
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">The Process</h4>
                                                <ul className="space-y-2">
                                                    {item.details.process.map((p, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0"></span>
                                                            {p}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {item.details.when && (
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">When to Get Treated</h4>
                                                <ul className="space-y-2">
                                                    {item.details.when.map((w, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0"></span>
                                                            {w}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {item.details.safety && (
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Safety Information</h4>
                                                <ul className="space-y-2">
                                                    {item.details.safety.map((s, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0"></span>
                                                            {s}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Highlight Box */}
                                    {item.details.highlight && (
                                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 flex gap-4 items-start">
                                            <div className="bg-white p-2 rounded-full text-brand-primary shadow-sm flex-shrink-0">
                                                <Lightbulb size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-brand-primary text-sm mb-1 uppercase tracking-wide">Did you know?</div>
                                                <div className="text-gray-700 italic">{item.details.highlight}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default Education;