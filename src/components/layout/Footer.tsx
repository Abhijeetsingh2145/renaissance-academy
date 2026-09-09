import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-primary text-blue-100 pt-16 pb-8 border-t-4 border-accent-yellow">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 bg-white/5 p-2 rounded-lg w-max">
              <Image 
                src="/logo.png" 
                alt="Renaissance Academy Logo" 
                width={40} 
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold text-white text-lg">Renaissance Academy</span>
            </div>
            <p className="text-sm leading-relaxed mt-4">
              A co-educational English-medium school committed to providing quality education by combining traditional moral values with modern learning methods.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=100057387973333" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-brand-300 transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-brand-300 transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-brand-300 transition-colors">Admissions</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-300 transition-colors">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-brand-300 transition-colors">FAQ</Link></li>
              <li><Link href="/careers" className="hover:text-brand-300 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Important Docs */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cbse-disclosure" className="hover:text-brand-300 transition-colors">CBSE Mandatory Disclosure</Link></li>
              <li><Link href="/policies" className="hover:text-brand-300 transition-colors">School Policies</Link></li>
              <li><Link href="/fees" className="hover:text-brand-300 transition-colors">Fee Structure</Link></li>
              <li><Link href="/admin/login" className="hover:text-brand-300 transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-brand-500 shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/ar62HEUrWTtHgtnQ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Baijnathpur, Balapar Road,<br />
                  Gorakhpur, Uttar Pradesh - 273007
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-500 shrink-0" />
                <span>+91-98-3886-3886</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-500 shrink-0" />
                <a href="mailto:renaissance.academy14@gmail.com" className="hover:text-white transition-colors">
                  renaissance.academy14@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-800 text-sm flex flex-col md:flex-row justify-between items-center text-neutral-500">
          <p>© {new Date().getFullYear()} Renaissance Academy, Gorakhpur. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Affiliated to Central Board of Secondary Education (CBSE)</p>
        </div>
      </Container>
    </footer>
  )
}
