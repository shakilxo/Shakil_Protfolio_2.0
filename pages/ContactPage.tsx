
import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Currently Available for Hire
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold">Get In <span className="text-gradient">Touch</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            Have a project in mind or want to discuss a role? I'm usually responsive within 24 hours.
          </p>
        </div>
        
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
