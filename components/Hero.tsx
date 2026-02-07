
import React from 'react';
import { ArrowRight, Terminal, Box, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass border border-brand-500/20 text-brand-600 dark:text-brand-300 text-xs font-bold tracking-widest uppercase">
            <Sparkles size={14} className="text-brand-500" />
            Available for Senior Roles
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight">
            Md Shakil <br />
            <span className="text-gradient">Hosen</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-xl leading-relaxed">
            Senior <span className="font-semibold text-slate-900 dark:text-white">MERN Stack</span> Specialist architecting high-end digital solutions from Bangladesh.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link to="/contact" className="px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl font-bold shadow-2xl shadow-brand-500/30 transition-all hover:scale-[1.03] active:scale-95 flex items-center gap-2">
              Start a Conversation <ArrowRight size={18} />
            </Link>
            <a href="#projects" className="px-10 py-5 liquid-glass hover:bg-white/30 dark:hover:bg-slate-800/40 rounded-2xl font-bold transition-all border border-white/20 dark:border-white/10 active:scale-95">
              Explore Projects
            </a>
          </div>

          <div className="flex items-center gap-10 pt-4 opacity-70">
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-display">04+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Years Experience</span>
            </div>
            <div className="h-8 w-px bg-slate-300 dark:bg-slate-700"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-display">25+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Global Success</span>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in lg:block">
          <div className="relative group">
            {/* The "Liquid Glass" Main Preview Area */}
            <div className="liquid-glass p-4 rounded-[3.5rem] relative z-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] overflow-hidden">
               <div className="rounded-[2.5rem] overflow-hidden bg-white/5 dark:bg-black/20 aspect-square relative group-hover:scale-[1.01] transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Code Showcase" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent"></div>
               </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-6 -right-6 liquid-glass p-5 rounded-3xl shadow-2xl z-20 animate-float">
               <Terminal className="text-brand-500" size={32} strokeWidth={1.5} />
            </div>
            
            <div className="absolute -bottom-8 -left-8 liquid-glass p-6 rounded-[2.5rem] shadow-2xl z-20 flex items-center gap-4 border border-white/40">
               <div className="w-12 h-12 bg-brand-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Box size={24} />
               </div>
               <div>
                 <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Stack</div>
                 <div className="font-bold">MERN-Full</div>
               </div>
            </div>
          </div>
          
          {/* Decorative Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-500/10 rounded-full -z-10 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
