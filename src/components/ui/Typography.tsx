import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function H1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h1>
  )
}

export function H2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-3xl md:text-4xl font-bold tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export function H3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-2xl md:text-3xl font-semibold tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function H4({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn("text-xl md:text-2xl font-semibold tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h4>
  )
}

export function Text({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-base md:text-lg text-neutral-600 leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  )
}
