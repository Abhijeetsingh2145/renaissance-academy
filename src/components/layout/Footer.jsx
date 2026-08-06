import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Logo } from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="lg:col-span-2">
            <Logo isDark={true} className="mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Empowering students through modern education blended with strong academic values since 2014.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Website" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-secondary hover:text-slate-900 transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-slate-400 hover:text-secondary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/academics" className="text-slate-400 hover:text-secondary transition-colors text-sm">Academics</Link></li>
              <li><Link to="/admissions" className="text-slate-400 hover:text-secondary transition-colors text-sm">Admissions</Link></li>
              <li><Link to="/facilities" className="text-slate-400 hover:text-secondary transition-colors text-sm">Facilities</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-secondary transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>Baijnathpur, Balapar Road, Landmark Omkar Ashram, Gorakhpur, UP</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>info@renaissanceacademy.edu.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-900 py-6 text-center border-t border-white/5">
        <div className="container">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Renaissance Academy, Gorakhpur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
