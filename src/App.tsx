import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MessageCircle, Star, CheckCircle2, 
  MapPin, Clock, Mail, ChevronRight, Calendar, 
  Smile, Shield, HeartPulse, Sparkles, Baby, 
  Stethoscope, Syringe, Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = "918080009944";
const PHONE_NUMBER = "+918080009944";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment.`;
const CALL_LINK = `tel:${PHONE_NUMBER}`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-20 md:pb-0 selection:bg-blue-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-gray-900">Mitrasen Dental</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">& Health Clinic</span>
            </div>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -mr-2 text-gray-600 hover:text-blue-500 transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
            <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About Dr. Jain</a>
            <a href="#reviews" className="hover:text-blue-500 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            <a href={WHATSAPP_LINK} className="bg-teal-500 text-white px-5 py-2.5 rounded-full hover:bg-teal-600 transition-colors flex items-center gap-2 font-semibold">
              <MessageCircle size={18} />
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium">
              <a href="#home" onClick={closeMenu} className="p-4 border-b border-gray-100 flex justify-between items-center">
                Home <ChevronRight size={20} className="text-gray-400" />
              </a>
              <a href="#services" onClick={closeMenu} className="p-4 border-b border-gray-100 flex justify-between items-center">
                Services <ChevronRight size={20} className="text-gray-400" />
              </a>
              <a href="#about" onClick={closeMenu} className="p-4 border-b border-gray-100 flex justify-between items-center">
                About Dr. Jain <ChevronRight size={20} className="text-gray-400" />
              </a>
              <a href="#reviews" onClick={closeMenu} className="p-4 border-b border-gray-100 flex justify-between items-center">
                Reviews <ChevronRight size={20} className="text-gray-400" />
              </a>
              <a href="#contact" onClick={closeMenu} className="p-4 border-b border-gray-100 flex justify-between items-center">
                Contact <ChevronRight size={20} className="text-gray-400" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section id="home" className="relative px-4 pt-8 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50/30 -z-10" />
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm w-fit border border-gray-100">
                <div className="flex text-amber-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <span className="text-xs font-bold text-gray-700">5.0 (817 Reviews)</span>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-3">
                  Mitrasen Dental <br className="hidden md:block"/>& Health Clinic
                </h1>
                <p className="text-lg md:text-xl text-blue-600 font-medium mb-2">
                  Conservative & Ethical Dental Care in Parel
                </p>
                <p className="text-gray-600 text-base md:text-lg">
                  Led by <span className="font-semibold text-gray-900">Dr. Mitesh N. Jain</span>
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <CheckCircle2 size={18} className="text-teal-500" /> Soft Hands
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <CheckCircle2 size={18} className="text-teal-500" /> Affordable Pricing
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <CheckCircle2 size={18} className="text-teal-500" /> 817+ Happy Patients
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a 
                  href="#appointment" 
                  className="bg-blue-500 text-white text-center py-4 px-6 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 hover:bg-blue-600 active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-h-[56px]"
                >
                  <Calendar size={22} />
                  Book Appointment
                </a>
                <a 
                  href={CALL_LINK} 
                  className="bg-white text-blue-600 border-2 border-blue-100 text-center py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-h-[56px]"
                >
                  <Phone size={22} />
                  Call Now
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <MapPin size={16} /> Freshville Mall, Parel
              </div>
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://picsum.photos/seed/dentist-patient/800/800" 
                  alt="Gentle dentist with patient" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-medium text-gray-800 italic">
                    "We strive to improve patient's oral health with utmost focus on being conservative and ethical."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STATS */}
        <section className="px-4 py-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-2xl text-center border border-blue-100/50">
                <div className="text-3xl font-black text-blue-600 mb-1">817+</div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Patients</div>
              </div>
              <div className="bg-amber-50 p-4 rounded-2xl text-center border border-amber-100/50">
                <div className="text-3xl font-black text-amber-500 mb-1 flex items-center justify-center gap-1">
                  5.0 <Star size={20} fill="currentColor" />
                </div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Rating</div>
              </div>
              <div className="bg-teal-50 p-4 rounded-2xl text-center border border-teal-100/50">
                <div className="text-3xl font-black text-teal-600 mb-1">Expert</div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Care</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                <div className="text-3xl font-black text-gray-700 mb-1">Ethical</div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Approach</div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="px-4 py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Conservative & Ethical Dental Care</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Mitrasen Dental & Health Clinic, we strive to improve your oral health with a conservative and ethical approach. We treat each patient's problems with the utmost empathy and care, ensuring you receive the gentle, quality treatment you deserve.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="px-4 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Dental Treatments</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Providing a full range of dental services with a focus on long-term oral health.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Syringe, title: "Wisdom Tooth Extraction", desc: "Expert, gentle surgical removal", color: "text-blue-500", bg: "bg-blue-50" },
                { icon: Shield, title: "Tooth Fillings", desc: "Quality restorations that last", color: "text-teal-500", bg: "bg-teal-50" },
                { icon: Sparkles, title: "Cleaning & Scaling", desc: "Professional oral hygiene", color: "text-amber-500", bg: "bg-amber-50" },
                { icon: Activity, title: "Root Canal Treatment", desc: "Conservative, painless care", color: "text-rose-500", bg: "bg-rose-50" },
                { icon: Smile, title: "Crowns & Caps", desc: "Durable, natural-looking", color: "text-indigo-500", bg: "bg-indigo-50" },
                { icon: Star, title: "Cosmetic Dentistry", desc: "Enhance your smile", color: "text-purple-500", bg: "bg-purple-50" },
                { icon: HeartPulse, title: "Preventive Care", desc: "Long-term oral health", color: "text-emerald-500", bg: "bg-emerald-50" },
                { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle care for children", color: "text-sky-500", bg: "bg-sky-50" },
              ].map((service, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-white flex flex-col items-start">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.bg} ${service.color}`}>
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="px-4 py-16 bg-blue-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl -ml-20 -mb-20" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Why 817+ Patients Trust Us</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "5.0 Star Rating", desc: "Consistently excellent reviews" },
                { title: "Dr. Mitesh N. Jain", desc: "Expert, experienced dentist" },
                { title: "Soft Hands", desc: "Gentle, comfortable treatments" },
                { title: "Affordable Pricing", desc: "Quality without compromise" },
                { title: "Conservative Approach", desc: "Only necessary treatments" },
                { title: "Ethical Practice", desc: "Your health is our priority" },
                { title: "Empathetic Care", desc: "We understand your concerns" },
                { title: "Convenient Location", desc: "Freshville Mall, Parel" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="text-teal-300 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-blue-100 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEET DR JAIN */}
        <section id="about" className="px-4 py-16 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-2/5">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl relative">
                  <img 
                    src="https://picsum.photos/seed/dentist-portrait/600/800" 
                    alt="Dr. Mitesh N. Jain" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                    <h3 className="text-white font-bold text-2xl">Dr. Mitesh N. Jain</h3>
                    <p className="text-blue-200 font-medium">Lead Dental Surgeon</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-3/5">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Care by Dr. Mitesh N. Jain</h2>
                <div className="prose prose-lg text-gray-600 mb-8">
                  <p>
                    Dr. Mitesh N. Jain brings expertise and compassion to every patient interaction at Mitrasen Dental & Health Clinic. Known for his soft hands and gentle approach, Dr. Jain specializes in conservative dental treatments with a strong ethical foundation.
                  </p>
                  <p className="mt-4">
                    His patient-centric philosophy has earned the trust of 817+ satisfied patients, making him one of the most trusted dental professionals in Parel, Mumbai.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                      <Stethoscope size={20} />
                    </div>
                    <span className="font-medium text-sm">Conservative Treatments</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
                      <Syringe size={20} />
                    </div>
                    <span className="font-medium text-sm">Wisdom Tooth Extraction</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 shrink-0">
                      <Star size={20} />
                    </div>
                    <span className="font-medium text-sm">5.0 Star Rated Practice</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                      <Smile size={20} />
                    </div>
                    <span className="font-medium text-sm">Restorative Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="reviews" className="px-4 py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
              <div className="flex items-center justify-center gap-2 text-amber-500 mb-2">
                <Star size={24} fill="currentColor" />
                <Star size={24} fill="currentColor" />
                <Star size={24} fill="currentColor" />
                <Star size={24} fill="currentColor" />
                <Star size={24} fill="currentColor" />
              </div>
              <p className="text-gray-600 font-medium">Based on 817+ Google Reviews</p>
            </div>

            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar gap-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:px-0 md:mx-0">
              {[
                { name: "Savan Dagare", text: "Overall happy with service, treatment with doctors and staff" },
                { name: "Ansh Mehta", text: "I had been for 2 wisdom tooth extraction, 2 tooth filling and cleaning." },
                { name: "Harish Maurya", text: "Soft hands, affordable pricing without compromising on any work." }
              ].map((review, idx) => (
                <div key={idx} className="min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                  <div className="flex text-amber-400 mb-4">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6 flex-grow">"{review.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-xs text-gray-500">Verified Patient</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPOINTMENT BOOKING */}
        <section id="appointment" className="px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-blue-600 p-8 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Book Your Appointment</h2>
                <p className="text-blue-100 mb-8">Get expert care from Dr. Jain today. We'll get back to you promptly to confirm your slot.</p>
                
                <div className="flex flex-col gap-4">
                  <a href={WHATSAPP_LINK} className="bg-[#25D366] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#20bd5a] active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-h-[56px] shadow-lg shadow-[#25D366]/30">
                    <MessageCircle size={22} />
                    WhatsApp Dr. Jain
                  </a>
                  <a href={CALL_LINK} className="bg-white text-blue-600 py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-h-[56px]">
                    <Phone size={22} />
                    Call Now
                  </a>
                </div>
              </div>
              
              <div className="md:col-span-3 p-8 bg-gray-50">
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 py-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 text-gray-500 text-sm">
                        +91
                      </span>
                      <input type="tel" className="w-full px-4 py-3 rounded-r-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white" placeholder="10-digit number" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                      <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white appearance-none">
                        <option>General Checkup</option>
                        <option>Wisdom Tooth</option>
                        <option>Cleaning</option>
                        <option>Root Canal</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white resize-none" placeholder="Any specific concerns?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-700 active:scale-[0.98] transition-all mt-2 min-h-[56px]">
                    Request Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION & HOURS */}
        <section id="contact" className="px-4 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Us at Freshville Mall, Parel</h2>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Clinic Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Mitrasen Dental & Health Clinic<br/>
                      Dr. Mitesh N. Jain<br/>
                      Freshville Mall, CRESCENT BAY, 3<br/>
                      Ground Floor, Dimple Apartments<br/>
                      Opp T.B. Hospital, Between Jerbai Wadia Rd<br/>
                      Bhoiwada, Parel, Mumbai 400012
                    </p>
                    <p className="text-sm font-medium text-blue-600 mt-2">Landmark: Inside Freshville Mall, opposite T.B. Hospital</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Opening Hours</h3>
                    <p className="text-gray-600 font-medium">Open Daily</p>
                    <p className="text-gray-500">Closes at 9:30 PM</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Mitrasen+Dental+Health+Clinic+Freshville+Mall+Parel+Mumbai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white text-gray-900 border border-gray-200 py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-h-[56px] shadow-sm"
              >
                <MapPin size={20} className="text-blue-600" />
                Get Directions
              </a>
            </div>

            <div className="h-[400px] md:h-auto rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-200 relative">
              {/* Placeholder for Google Maps iframe to keep it lightweight */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.979148005391!2d72.8406143!3d19.0206198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced4c2a55555%3A0x123456789abcdef!2sFreshville%20Mall!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-24 md:pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Mitrasen Dental & Health Clinic</h3>
            <p className="text-gray-400 mb-2">Dr. Mitesh N. Jain</p>
            <p className="text-gray-400 italic text-sm">"Conservative & Ethical Dental Care"</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Dr. Jain</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a></li>
              <li><a href="#appointment" className="hover:text-white transition-colors">Book Appointment</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>Wisdom Tooth Extraction</li>
              <li>Tooth Fillings</li>
              <li>Dental Cleaning</li>
              <li>Root Canal</li>
              <li>Cosmetic Dentistry</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <a href={CALL_LINK} className="hover:text-white transition-colors">+91 80800 09944</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-[#25D366] shrink-0 mt-0.5" />
                <a href={WHATSAPP_LINK} className="hover:text-white transition-colors">+91 80800 09944</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gray-400 shrink-0 mt-0.5" />
                <a href="mailto:info@mitrasendentalclinic.com" className="hover:text-white transition-colors break-all">info@mitrasendentalclinic.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-400 shrink-0 mt-0.5" />
                <span>Freshville Mall, Parel<br/>Open till 9:30 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-sm text-gray-500 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 Mitrasen Dental & Health Clinic. All rights reserved.</p>
          <p>Dr. Mitesh N. Jain • Parel, Mumbai</p>
        </div>
      </footer>

      {/* STICKY BOTTOM NAV (MOBILE ONLY) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:hidden z-50 flex gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <a 
          href={CALL_LINK}
          className="flex-1 bg-blue-50 text-blue-600 py-3.5 px-2 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform min-h-[44px]"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a 
          href={WHATSAPP_LINK}
          className="flex-1 bg-[#25D366] text-white py-3.5 px-2 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm shadow-[#25D366]/20 active:scale-[0.98] transition-transform min-h-[44px]"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
