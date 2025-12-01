
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dumbbell, Activity, Syringe, Bone, CheckCircle2 } from 'lucide-react';
import { EDUCATION_CONTENT } from '../constants';

const Services: React.FC = () => {
    // Map icons to the services based on title matching roughly with EDUCATION_CONTENT
    const getIcon = (title: string) => {
        if (title.includes('Sports')) return Dumbbell;
        if (title.includes('Remedial')) return Activity;
        if (title.includes('Needling')) return Syringe;
        if (title.includes('Joint')) return Bone;
        return Activity;
    };

    const getStockImage = (index: number) => {
        const images = [
            "images/image2.jpeg", // Sports - Leg work
            "images/image4.jpeg", // Remedial - Shoulder work
            "images/image3.jpeg", // Needling/Cupping - Back
            "images/image6.jpeg"  // Joint - Knee mobilisation
        ];
        return images[index % images.length];
    }

    // Filter education content to only show main services
    const servicesList = EDUCATION_CONTENT.filter(item => 
        item.title !== 'Rehabilitation' && item.title !== 'Injury Prevention'
    );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-brand-dark py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Comprehensive therapies designed for optimal recovery, pain relief, and performance enhancement.
            </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {servicesList.map((service, index) => {
            const Icon = getIcon(service.title);
            const isEven = index % 2 === 0;
            
            return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                    {/* Image Section */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                             <img 
                                src={getStockImage(index)} 
                                alt={service.title} 
                                className="w-full h-80 lg:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                             {/* Floating Icon */}
                             <div className={`absolute bottom-6 ${isEven ? 'left-6' : 'right-6'} bg-white p-4 rounded-xl shadow-lg text-brand-primary`}>
                                <Icon size={32} />
                             </div>
                        </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">{service.title}</h2>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {service.details.what}
                        </p>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Activity className="text-brand-primary" size={20} /> Key Benefits
                            </h3>
                            <ul className="space-y-3">
                                {service.details.benefits?.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                        <CheckCircle2 className="text-brand-accent mt-0.5 flex-shrink-0" size={16} />
                                        <span>
                                            <strong className="text-gray-900">{benefit.title}:</strong> {benefit.desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-between">
                             <p className="text-sm text-gray-500 italic bg-brand-light/50 p-3 rounded-lg border border-brand-light">
                                "{service.details.highlight}"
                            </p>
                            <NavLink 
                                to="/contact" 
                                className="whitespace-nowrap bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
                            >
                                Book Session
                            </NavLink>
                        </div>
                    </div>
                </div>
            );
        })}
      </div>
    </div>
  );
};

export default Services;
