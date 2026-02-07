
import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em]">Career Path</h2>
              <p className="text-4xl font-display font-bold">Work Experience</p>
            </div>

            <div className="space-y-8 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800 ml-4 pl-8">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative group">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-white dark:border-slate-950 group-hover:scale-125 transition-transform"></div>
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-brand-500 bg-brand-500/10 px-3 py-1 rounded-full">{exp.period}</span>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-lg font-medium text-slate-600 dark:text-slate-400">{exp.company} — <span className="italic">{exp.location}</span></p>
                    <ul className="space-y-2">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-500">
                          <span className="text-brand-500 mr-2 mt-1">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Philosophy */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em]">Academic</h2>
              <p className="text-4xl font-display font-bold">Education</p>
            </div>

            <div className="glass p-8 rounded-3xl space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-brand-500 font-medium">{edu.institution}</p>
                  <p className="text-sm text-slate-500">{edu.period}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-8">
               <h3 className="text-2xl font-display font-bold">Professional Philosophy</h3>
               <div className="p-8 bg-brand-600 rounded-3xl text-white relative overflow-hidden group">
                  <svg className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.2386 16.7784 9 14.017 9V7C17.883 7 21.017 10.134 21.017 14V21H14.017ZM3.01702 21L3.01702 18C3.01702 16.8954 3.91245 16 5.01702 16H8.01702V14C8.01702 11.2386 5.77845 9 3.01702 9V7C6.88302 7 10.017 10.134 10.017 14V21H3.01702Z" /></svg>
                  <p className="relative text-lg italic leading-relaxed">
                    "Enthusiastic developer focused on clean coding, elegant UI design, real-world problem solving, and continuous learning. I believe code should be as expressive as poetry and as efficient as a Swiss watch."
                  </p>
                  <p className="relative mt-4 font-bold">— Md Shakil Hosen</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
