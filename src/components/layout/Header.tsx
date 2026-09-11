'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from './Container'
import { Button } from '../ui/Button'
import { ChevronDown, Menu, X } from 'lucide-react'

const navGroups = [
  {
    name: 'About Us',
    links: [
      { name: 'About Renaissance', href: '/about' },
      { name: 'Vision & Mission', href: '/vision-mission' },
      { name: 'Meet Our Leadership', href: '/principal-message' },
      { name: 'School Policies', href: '/policies' },
    ],
  },
  {
    name: 'Academics',
    links: [
      { name: 'Curriculum', href: '/academics' },
      { name: 'Faculty', href: '/faculty' },
      { name: 'CBSE Disclosure', href: '/cbse-disclosure' },
    ],
  },
  {
    name: 'Campus Life',
    links: [
      { name: 'Facilities', href: '/campus' },
      { name: 'Activities & Sports', href: '/activities' },
      { name: 'Events / News', href: '/events' },
      { name: 'Gallery', href: '/gallery' },
    ],
  },
  {
    name: 'Admissions',
    links: [
      { name: 'Enquiry Form', href: '/admissions' },
      { name: 'Fee Structure', href: '/fees' },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/95 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 shrink-0">
          <Image 
            src="/logo.png" 
            alt="Renaissance Academy Logo" 
            width={48} 
            height={48}
            className="h-12 w-auto"
          />
          <span className="hidden xl:inline-block font-bold text-lg text-brand-primary">
            Renaissance Academy
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 font-medium text-sm text-neutral-700">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
          
          {navGroups.map((group) => (
            <div key={group.name} className="relative group h-20 flex items-center">
              <button className="flex items-center hover:text-brand-primary transition-colors">
                {group.name}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-20 left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                <div className="bg-white border border-neutral-100 shadow-lg rounded-md overflow-hidden py-1">
                  {group.links.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="block px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-brand-primary"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <Link href="/achievements" className="hover:text-brand-primary transition-colors">Achievements</Link>
          <Link href="/careers" className="hover:text-brand-primary transition-colors">Careers</Link>
          <Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4 shrink-0">
          <Link href="/admissions" className="hidden sm:inline-flex">
            <Button variant="primary" size="sm" className="shadow-md shadow-brand-200 hover:shadow-brand-300">
              Enquire Now
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-neutral-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-100 shadow-lg h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-6 space-y-6">
            <Link href="/" className="block font-semibold text-lg text-neutral-900" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            
            {navGroups.map((group) => (
              <div key={group.name} className="space-y-3">
                <h3 className="font-semibold text-lg text-neutral-900">{group.name}</h3>
                <div className="flex flex-col space-y-2 pl-4 border-l-2 border-neutral-100">
                  {group.links.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="text-neutral-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <Link href="/achievements" className="block font-semibold text-lg text-neutral-900" onClick={() => setMobileMenuOpen(false)}>Achievements</Link>
            <Link href="/careers" className="block font-semibold text-lg text-neutral-900" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
            <Link href="/contact" className="block font-semibold text-lg text-neutral-900" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            
            <div className="pt-6 mt-6 border-t border-neutral-100 sm:hidden">
              <Link href="/admissions" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full">Enquire Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
