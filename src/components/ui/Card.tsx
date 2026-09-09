import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'surface-neutral' | 'surface-sky' | 'surface-cream' | 'surface-mint' | 'surface-yellow' | 'surface-coral'
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-300",
        {
          'bg-white border border-neutral-200/80 shadow-2xs hover:shadow-md': variant === 'default' || variant === 'surface-neutral',
          'bg-surface-sky border border-blue-200/60 shadow-2xs hover:shadow-md': variant === 'surface-sky',
          'bg-surface-cream border border-amber-200/60 shadow-2xs hover:shadow-md': variant === 'surface-cream',
          'bg-surface-mint border border-emerald-200/60 shadow-2xs hover:shadow-md': variant === 'surface-mint',
          'bg-surface-yellow border border-amber-300/60 shadow-2xs hover:shadow-md': variant === 'surface-yellow',
          'bg-surface-coral border border-rose-200/60 shadow-2xs hover:shadow-md': variant === 'surface-coral',
        },
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 py-5 border-b border-neutral-100/80", className)} {...props} />
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 py-4 bg-neutral-50/50 border-t border-neutral-100/80", className)} {...props} />
}
