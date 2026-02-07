import React from 'react';
import { SKILLS } from '../constants';
import * as LucideIcons from 'lucide-react';

const SkillsPage: React.FC = () => {
  return (
    <div className="py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold">Technical <span className="text-gradient">Arsenal</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            A deep dive into the technologies I use to build world-class digital products.
          </p>
        </div>

        <div className="space-y-24">
          {SKILLS.map((category) => (
            <div key={category.title} className="space-y-10">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-display font-bold">{category.title}</h2>
                <div className="flex-grow h-px bg-slate-200 dark:bg-slate-800"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => {
                  const IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.HelpCircle;
                  
                  return (
                    <div key={skill.name} className="liquid-glass p-8 rounded-[2rem] flex items-center gap-6 group hover:border-brand-500 transition-all duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 dark:bg-slate-900/50 flex items-center justify-center text-slate-400 group-hover:text-brand-500 group-hover:scale-110 transition-all">
                        <IconComponent size={32} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg">{skill.name}</h3>
                        <div className="w-32 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                           <div className="w-[85%] h-full bg-brand-500 rounded-full"></div>
                        </div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Advanced</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 liquid-glass rounded-[3rem] text-center space-y-6">
          <h2 className="text-2xl font-bold">Development Environment</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            My daily drivers include VS Code with personalized shortcuts, iTerm2 with Zsh, and a robust CI/CD pipeline integrated into every project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;