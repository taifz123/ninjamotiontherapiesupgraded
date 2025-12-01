
import React from 'react';
import { Award, GraduationCap, Heart, Activity, ShieldCheck, CreditCard, Building2, MapPin, Check } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="relative bg-brand-dark py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-brand-dark opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 font-light">
            Meet Yuhan - Your expert sports and remedial massage therapist dedicated to your recovery.
            </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 relative min-h-[400px]">
                    <img 
                        src="images/image2.jpeg" 
                        alt="Yuhan Principal Therapist" 
                        className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                        <p className="font-heading font-bold text-2xl">Yuhan</p>
                        <p className="text-brand-primary font-medium">Principal Therapist</p>
                    </div>
                </div>
                <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Expertise & Passion</h2>
                    <div className="prose prose-lg text-gray-600 mb-10">
                        <p className="mb-6 leading-relaxed">
                            Yuhan is a dedicated and experienced massage therapist specializing in sports and remedial massage therapy. With a strong passion for helping clients achieve optimal health and wellness, Yuhan brings both technical expertise and genuine care to every treatment session.
                        </p>
                        <p className="leading-relaxed">
                            Located inside Olympian Frontiers Gym, Yuhan works alongside fitness professionals to provide comprehensive care for athletes, fitness enthusiasts, and individuals seeking relief from musculoskeletal conditions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Qualifications</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-xl flex items-start gap-4 border border-gray-100 hover:border-brand-primary/30 transition-colors">
                                <div className="bg-white p-2 rounded-lg shadow-sm text-brand-primary"><GraduationCap size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Diploma of Remedial Massage</h4>
                                    <p className="text-xs text-gray-500">Certified Professional</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl flex items-start gap-4 border border-gray-100 hover:border-brand-primary/30 transition-colors">
                                <div className="bg-white p-2 rounded-lg shadow-sm text-brand-primary"><Award size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Advanced Techniques</h4>
                                    <p className="text-xs text-gray-500">Dry needling & joint mobilisations</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl flex items-start gap-4 border border-gray-100 hover:border-brand-primary/30 transition-colors">
                                <div className="bg-white p-2 rounded-lg shadow-sm text-brand-primary"><Activity size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Rehabilitation Focus</h4>
                                    <p className="text-xs text-gray-500">Injury rehab & chronic pain</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Core Values</h2>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Our Philosophy</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Patient-Centered Care", desc: "Every treatment is tailored to your specific needs, goals, and condition.", icon: Heart, color: "red" },
                    { title: "Evidence-Based", desc: "We use proven techniques backed by modern research and clinical experience.", icon: ShieldCheck, color: "blue" },
                    { title: "Results-Focused", desc: "Our goal is to help you achieve measurable improvements in pain and mobility.", icon: Activity, color: "emerald" },
                ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gray-100">
                        <div className={`w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-${item.color}-500`}>
                            <item.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Olympian Frontiers Gym Location</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Our clinic is conveniently located within Olympian Frontiers Gym, providing access to state-of-the-art facilities and a professional fitness environment.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "Professional Setting", desc: "Clean, modern treatment rooms", icon: Building2 },
                            { title: "Convenient Access", desc: "Easy parking at 100 Jarrett St", icon: MapPin },
                            { title: "Integrated Care", desc: "Collaboration with fitness pros", icon: Activity },
                            { title: "Gym Equipment", desc: "Access for rehabilitation", icon: Award },
                        ].map((facility, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="mt-1 text-brand-primary"><Check size={20} /></div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{facility.title}</h3>
                                    <p className="text-sm text-gray-600">{facility.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="absolute -inset-4 bg-brand-primary/10 rounded-3xl transform rotate-2"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Gym Facilities" 
                        className="rounded-2xl shadow-lg relative z-10 w-full"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Payment */}
      <section className="bg-brand-primary py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-12">Payment & Insurance</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                    <div className="bg-white text-brand-primary w-12 h-12 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">HiCAPS Accepted</h3>
                    <p className="text-blue-50 leading-relaxed">We accept HiCAPS for on-the-spot health fund claims, making it easier to access treatment through your private health insurance.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                    <div className="bg-white text-brand-primary w-12 h-12 rounded-full flex items-center justify-center mb-6">
                        <CreditCard size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Flexible Payment</h3>
                    <p className="text-blue-50 leading-relaxed">We accept cash, EFTPOS, and major credit cards (Visa, Mastercard) for your convenience.</p>
                </div>
            </div>
            
            <div className="mt-12">
                <NavLink to="/contact" className="bg-white text-brand-primary font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-lg inline-block">
                    Book Your Appointment
                </NavLink>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
