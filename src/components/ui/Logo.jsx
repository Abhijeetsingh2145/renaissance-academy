import React from 'react';

export function Logo({ className = "", isDark = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Renaissance Academy Logo" 
        className="h-14 w-auto object-contain shrink-0" 
      />
      <span className={`text-xl md:text-2xl font-serif font-bold leading-tight ${isDark ? 'text-white' : 'text-primary'}`}>
        Renaissance Academy
      </span>
    </div>
  );
}
