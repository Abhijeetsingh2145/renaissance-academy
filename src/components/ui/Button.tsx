import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'sky' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          {
            // Variants
            'bg-brand-primary text-white hover:bg-brand-deep shadow-sm': variant === 'primary',
            'bg-surface-sky text-brand-primary hover:bg-blue-100/80 border border-blue-200/60': variant === 'secondary',
            'bg-accent-gold text-brand-deep hover:bg-amber-400 shadow-md border border-amber-400/60 font-bold': variant === 'accent',
            'bg-brand-sky text-white hover:bg-blue-600 shadow-sm': variant === 'sky',
            'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white': variant === 'outline',
            'hover:bg-brand-50 text-brand-primary': variant === 'ghost',
            // Sizes
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
