
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! This is a simulation.");
    setFormState({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail size={24} />, label: "Email", value: "shakilinfo91@gmail.com", href: "mailto:shakilinfo91@gmail.com" },
    { icon: <Phone size={24} />, label: "Call", value: "+88 01722773191", href: "tel:+8801722773191" },
    { icon: <MapPin size={24} />, label: "Location", value: "Pabna, Bangladesh", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div className="liquid-glass rounded-[4rem] p-10 md:p-20 grid lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.4em]">Connection</h2>
            <p className="text-5xl font-display font-bold leading-tight">Ready for <br />the <span className="text-gradient">Next Big Thing?</span></p>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Whether it's a new startup vision or an enterprise scale solution, I'm here to bring it to life.
            </p>
          </div>

          <div className="space-y-8">
            {contactInfo.map((item, i) => (
              <a key={i} href={item.href} className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.5rem] liquid-glass flex items-center justify-center text-brand-500 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-lg group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">{item.label}</span>
                  <span className="text-xl font-bold font-display group-hover:text-brand-500 transition-colors">{item.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 liquid-glass p-8 md:p-12 rounded-[3rem] shadow-2xl bg-white/5 dark:bg-black/10 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-4">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Steve Rogers"
                  className="w-full bg-white/10 dark:bg-black/20 border border-white/10 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 rounded-[1.5rem] p-5 transition-all outline-none backdrop-blur-md"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-4">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="steve@avengers.com"
                  className="w-full bg-white/10 dark:bg-black/20 border border-white/10 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 rounded-[1.5rem] p-5 transition-all outline-none backdrop-blur-md"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-4">Project Overview</label>
              <textarea 
                required
                rows={5}
                placeholder="Briefly describe what we are building..."
                className="w-full bg-white/10 dark:bg-black/20 border border-white/10 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 rounded-[1.5rem] p-5 transition-all outline-none backdrop-blur-md"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-6 bg-brand-600 hover:bg-brand-500 text-white rounded-[1.5rem] font-bold text-lg transition-all shadow-2xl shadow-brand-500/30 flex items-center justify-center gap-3 active:scale-95 group"
            >
              Submit Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
