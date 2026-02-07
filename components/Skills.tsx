import React from 'react';
import { SKILLS } from '../constants';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em]">Expertise</h2>
          <p className="text-4xl md:text-5xl font-display font-bold">Technical Skillset</p>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((category) => (
            <div key={category.title} className="liquid-glass p-8 rounded-[2.5rem] space-y-8 transform transition-all hover:-translate-y-2 border border-white/20">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill) => {
                  const IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.HelpCircle;
                  return (
                    <div key={skill.name} className="flex flex-col items-center gap-3 group">
                      <div className="w-14 h-14 rounded-2xl liquid-glass flex items-center justify-center text-slate-400 group-hover:text-brand-500 group-hover:bg-white/50 dark:group-hover:bg-slate-800 transition-all duration-300 shadow-sm">
                        <IconComponent size={28} strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-semibold text-center text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors uppercase tracking-tight">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;