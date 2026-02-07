
import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';
import { User, Target, Coffee, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              Engineering <span className="text-gradient">Experience</span> 
              <br />Through Code.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Based in Pabna, Bangladesh, I've spent the last 4+ years mastering the art of web development. My journey from a curious diploma student to a Senior Developer at Sopno IT Solutions has been driven by a relentless pursuit of excellence and clean architecture.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-500/20 blur-3xl group-hover:bg-brand-500/30 transition-all rounded-full"></div>
            <div className="relative rounded-[3rem] overflow-hidden gradient-border">
              <img src="https://picsum.photos/seed/shakil-about/800/800" alt="Md Shakil Hosen" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Globe />, label: "Global Projects", val: "20+" },
            { icon: <Target />, label: "Client Success", val: "100%" },
            { icon: <Coffee />, label: "Coffee Consumed", val: "∞" },
            { icon: <User />, label: "Years Experience", val: "4+" },
          ].map((stat, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] text-center space-y-2 group hover:border-brand-500 transition-colors">
              <div className="text-brand-500 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold font-display">{stat.val}</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Detailed Bio */}
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">My Philosophy</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I believe that a senior developer's job isn't just to write code, but to solve problems in a way that is maintainable, scalable, and intuitive. I prioritize <strong>Performance</strong>, <strong>Accessibility</strong>, and <strong>User Experience</strong> above all else.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether I'm architecting a new e-commerce platform like the DJI Drone Store or optimizing health services for Delmont, I treat every project as a piece of digital craftsmanship.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Education</h2>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-brand-500">{edu.institution}</p>
                <p className="text-sm text-slate-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
