import React from 'react';

export function Logo({ className = "", isDark = false }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* We use the official school logo here. The image itself already contains the text. */}
      <img 
        src="/logo.png" 
        alt="Renaissance Academy Logo" 
        className="h-14 w-auto object-contain" 
      />
    </div>
  );
}
