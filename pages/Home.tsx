
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Star, Quote, CheckCircle2, ArrowRight, Calendar, Instagram } from 'lucide-react';
import { SERVICES_SUMMARY, CONTACT_INFO, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  // Using user provided images
  const galleryImages = [
    { src: 'images/image2.jpeg', alt: 'Sports Massage Treatment' },
    { src: 'images/image3.jpeg', alt: 'Cupping Therapy Back' },
    { src: 'images/image4.jpeg', alt: 'Shoulder Mobility Work' },
    { src: 'images/image5.jpeg', alt: 'Assisted Stretching' },
    { src: 'images/image6.jpeg', alt: 'Knee Mobilisation' },
    { src: 'images/image7.jpeg', alt: 'Cupping Results Before After' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white min-h-[90vh] flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="images/image6.jpeg" 
                alt="Massage Therapy Background" 
                className="w-full h-full object-cover opacity-30"
                style={{ objectPosition: 'center 40%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-semibold mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                Accepting New Clients
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-8 animate-slide-up">
              Recover Faster. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-light">Move Better.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl animate-slide-up" style={{animationDelay: '0.1s'}}>
              Professional sports and remedial massage therapy at Olympian Frontiers Gym, Leichhardt. Expert rehabilitation tailored to your specific goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <a 
                href={CONTACT_INFO.bookingUrl} 
                className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(14,165,233,0.3)] flex items-center justify-center gap-2 text-lg"
              >
                Book Appointment <ChevronRight size={20} />
              </a>
              <NavLink 
                to="/services" 
                className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center text-lg"
              >
                Explore Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </NavLink>
            </div>
            
            {/* Quick Features */}
            <div className="mt-16 flex flex-wrap gap-8 text-sm font-medium text-gray-400 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-2">
                <div className="bg-brand-primary/20 p-1 rounded-full"><CheckCircle2 className="text-brand-primary" size={16} /></div>
                Accepts HiCAPS
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-brand-primary/20 p-1 rounded-full"><CheckCircle2 className="text-brand-primary" size={16} /></div>
                Diploma Qualified
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-brand-primary/20 p-1 rounded-full"><CheckCircle2 className="text-brand-primary" size={16} /></div>
                Rehab Experts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Specialized Treatments</h2>
            <p className="text-gray-600 text-lg">
              We don't just treat symptoms; we address the root cause of your pain with comprehensive, evidence-based therapies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_SUMMARY.map((service, index) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 hover:border-brand-primary/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                
                <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center text-brand-primary mb-8 relative z-10 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  {service.icon && <service.icon size={32} strokeWidth={1.5} />}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm relative z-10">{service.description}</p>
                
                <NavLink 
                    to="/services" 
                    className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm group-hover:translate-x-2 transition-transform relative z-10"
                >
                  Learn more <ArrowRight size={16} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-brand-accent/20 rounded-3xl transform rotate-3 scale-105"></div>
                <img 
                    src="images/image5.jpeg" 
                    alt="Yuhan at Clinic" 
                    className="rounded-3xl shadow-2xl z-10 relative w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block border border-gray-50">
                    <p className="text-brand-dark font-heading font-bold text-lg mb-1">"My goal is to get you back to doing what you love, pain-free."</p>
                    <p className="text-brand-primary font-medium text-sm">- Yuhan</p>
                </div>
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Meet Your Therapist</span>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">Expert Care with a Personal Touch</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                With a Diploma of Remedial Massage and extensive experience in sports therapy and rehabilitation, Yuhan provides professional treatment for a wide range of musculoskeletal conditions.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                    <div className="bg-brand-light p-2 rounded-lg text-brand-primary mt-1"><CheckCircle2 size={20} /></div>
                    <div>
                        <h4 className="font-bold text-gray-900">Personalized Treatment Plans</h4>
                        <p className="text-sm text-gray-500">Tailored specifically to your body and goals.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-brand-light p-2 rounded-lg text-brand-primary mt-1"><CheckCircle2 size={20} /></div>
                    <div>
                        <h4 className="font-bold text-gray-900">Convenient Location</h4>
                        <p className="text-sm text-gray-500">Inside Olympian Frontiers Gym with top-tier facilities.</p>
                    </div>
                </div>
              </div>
              
              <NavLink 
                to="/about" 
                className="bg-brand-dark hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                More About Yuhan <ArrowRight size={18} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Our Work</h2>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Treatment in Action</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    From dry needling and cupping to sports massage and mobility work, see how we help our clients recover.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((img, index) => (
                    <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-200">
                        <img 
                            src={img.src}
                            alt={img.alt} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {img.alt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary opacity-5 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Client Success Stories</h2>
            <div className="flex justify-center items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-brand-accent text-brand-accent" />)}
            </div>
            <p className="text-gray-400">Real results from real clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Testimonial - Full Height/Width on mobile */}
            <div className="md:col-span-2 bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
                <Quote className="text-brand-primary/40 fill-current mb-6 absolute top-8 right-8" size={64} />
                <div className="flex flex-col h-full">
                    <p className="text-gray-200 mb-8 italic text-lg md:text-xl leading-relaxed">"{TESTIMONIALS[0].text}"</p>
                    <div className="mt-auto flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-brand-primary/50">
                            {TESTIMONIALS[0].author.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-white text-lg">{TESTIMONIALS[0].author}</p>
                            <p className="text-sm text-brand-primary font-medium uppercase tracking-wider">{TESTIMONIALS[0].role}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secondary Testimonials */}
            {TESTIMONIALS.slice(1).map((t) => (
              <div key={t.id} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col h-full">
                <Quote className="text-brand-primary/40 fill-current mb-6" size={32} />
                <p className="text-gray-300 mb-8 italic leading-relaxed flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white">
                        {t.author.charAt(0)}
                    </div>
                    <div>
                        <p className="font-bold text-white">{t.author}</p>
                        <p className="text-sm text-gray-400 font-medium">{t.role}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-light opacity-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 opacity-50 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">Ready to Feel Your Best?</h2>
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto font-light">
            Don't let pain hold you back. Book your appointment today and start your journey to recovery.
          </p>
          <a 
            href={CONTACT_INFO.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-12 rounded-full shadow-[0_20px_50px_rgba(14,165,233,0.3)] transition-transform transform hover:-translate-y-1 text-lg inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Book Your Session
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
