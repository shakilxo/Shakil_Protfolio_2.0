
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <div className="space-y-16">
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.4em]">Portfolio</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="text-4xl md:text-6xl font-display font-bold max-w-2xl">
              Showcasing <span className="text-gradient">high-end</span> engineering projects.
            </p>
            <a href="https://github.com" target="_blank" className="flex items-center gap-2 font-bold hover:text-brand-500 transition-colors group">
              Explore All <Code size={20} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group liquid-glass rounded-[3.5rem] p-4 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-xl">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <div className="flex gap-4">
                    <a href={project.liveLink} className="bg-white text-slate-900 px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-brand-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2">
                      <ExternalLink size={18} /> Live View
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-10 space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-3xl font-bold font-display tracking-tight">{project.title}</h3>
                </div>
                
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-xl bg-white/5 dark:bg-black/20 border border-white/10 text-slate-500 dark:text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
