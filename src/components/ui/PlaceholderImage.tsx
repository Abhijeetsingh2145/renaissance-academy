import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Camera } from 'lucide-react'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
  assetName: string
  aspectRatio?: 'video' | 'square' | 'portrait' | 'landscape' | 'wide'
  themeVariant?: 'royal' | 'sky' | 'mint' | 'coral' | 'cream' | 'gold' | 'neutral'
}

export function PlaceholderImage({ 
  className, 
  assetName, 
  aspectRatio = 'landscape',
  themeVariant = 'royal',
  ...props 
}: PlaceholderImageProps) {
  
  const aspectClass = aspectRatio === 'video' ? 'aspect-video' :
                      aspectRatio === 'square' ? 'aspect-square' :
                      aspectRatio === 'portrait' ? 'aspect-[3/4]' :
                      aspectRatio === 'landscape' ? 'aspect-[4/3]' :
                      aspectRatio === 'wide' ? 'aspect-[21/9]' : '';

  const themeClass = themeVariant === 'sky' 
    ? 'bg-gradient-to-br from-blue-700 via-brand-sky to-blue-900 border-blue-400/40 text-white'
    : themeVariant === 'mint'
    ? 'bg-gradient-to-br from-emerald-700 via-accent-mint to-teal-900 border-emerald-400/40 text-white'
    : themeVariant === 'coral'
    ? 'bg-gradient-to-br from-rose-700 via-accent-coral to-rose-900 border-rose-400/40 text-white'
    : themeVariant === 'gold'
    ? 'bg-gradient-to-br from-amber-700 via-accent-gold to-amber-900 border-amber-400/40 text-white'
    : themeVariant === 'cream'
    ? 'bg-gradient-to-br from-amber-800 via-amber-700 to-brand-deep border-amber-300/40 text-white'
    : themeVariant === 'neutral'
    ? 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 border-slate-600/40 text-white'
    : 'bg-gradient-to-br from-brand-primary via-brand-deep to-slate-950 border-brand-700/50 text-white';

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-2xl flex flex-col items-center justify-center p-8 text-center border shadow-2xs group transition-all duration-300 hover:shadow-md",
        themeClass,
        aspectClass,
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:20px_20px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-xs mx-auto">
        <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-full border border-white/30 mb-3 group-hover:scale-105 transition-transform duration-300 shadow-xs">
          <Camera className="h-6 w-6 text-white" />
        </div>
        
        <span className="text-sm font-semibold tracking-wide uppercase text-xs mb-1">
          {assetName}
        </span>
        <span className="text-[11px] text-white/80 font-medium tracking-wider uppercase">
          Renaissance Academy
        </span>
      </div>
    </div>
  )
}
