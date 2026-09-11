'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, FileText, LayoutDashboard, LogOut, Globe, Menu, X } from 'lucide-react'

export function AdminNavigation({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
      color: 'text-brand-sky',
    },
    {
      name: 'Enquiries',
      href: '/admin/enquiries',
      icon: FileText,
      color: 'text-amber-400',
    },
    {
      name: 'Notices',
      href: '/admin/notices',
      icon: Bell,
      color: 'text-emerald-400',
    },
  ]

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin'
    return pathname.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col md:flex-row">
      {/* Mobile Top Navigation Header */}
      <header className="bg-brand-primary text-white sticky top-0 z-30 md:hidden flex items-center justify-between px-4 py-3 border-b border-brand-deep shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="bg-white/10 p-1.5 rounded-lg border border-white/10">
            <LayoutDashboard className="h-5 w-5 text-brand-sky" />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight leading-none text-white">Renaissance Admin</h1>
            <span className="text-[10px] text-blue-200 uppercase font-semibold tracking-wider">Management Panel</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="p-2 rounded-lg bg-white/10 text-blue-100 hover:text-white hover:bg-white/20 transition-colors"
            title="Open Main Website"
          >
            <Globe className="h-5 w-5" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col bg-brand-primary/95 backdrop-blur-md text-white animate-in fade-in duration-200">
          <div className="flex justify-between items-center px-5 py-4 border-b border-brand-deep">
            <h2 className="text-lg font-bold text-white">Admin Navigation</h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 p-6 space-y-3 overflow-y-auto">
            {navItems.map((item) => {
              const active = isActive(item.href)
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                    active
                      ? 'bg-brand-deep text-white shadow-inner border border-white/10'
                      : 'text-blue-100 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${item.color}`} />
                  <span>{item.name}</span>
                </Link>
              )
            })}

            <hr className="border-brand-deep my-4" />

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3.5 rounded-xl text-base font-medium text-blue-200 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Globe className="h-5 w-5 text-brand-sky" />
              <span>Visit Main Website</span>
            </Link>

            <form action="/admin/logout" method="POST" className="pt-2">
              <button
                type="submit"
                className="flex items-center space-x-3 px-4 py-3.5 w-full text-left rounded-xl text-base font-medium text-rose-300 hover:bg-rose-500/20 hover:text-rose-200 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Desktop Sidebar Navigation */}
      <aside className="bg-brand-primary text-white w-64 shrink-0 hidden md:flex flex-col min-h-screen border-r border-brand-deep">
        <div className="p-6 border-b border-brand-deep flex items-center space-x-3">
          <div className="bg-white/10 p-2 rounded-xl border border-white/10">
            <LayoutDashboard className="h-6 w-6 text-brand-sky" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white leading-tight">Renaissance Admin</h1>
            <span className="text-[11px] text-blue-200 uppercase font-semibold tracking-wider">Dashboard</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 flex flex-col justify-between">
          <div className="space-y-1.5">
            {navItems.map((item) => {
              const active = isActive(item.href)
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                    active
                      ? 'bg-brand-deep text-white shadow-sm font-semibold border border-white/10'
                      : 'text-blue-100 hover:bg-brand-deep/60 hover:text-white font-medium'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${item.color}`} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          <div className="pt-6 border-t border-brand-deep space-y-1">
            <Link
              href="/"
              className="flex items-center space-x-3 px-4 py-3 w-full text-left rounded-xl hover:bg-brand-deep transition-colors text-blue-200 hover:text-white font-medium text-sm"
            >
              <Globe className="h-5 w-5 text-brand-sky" />
              <span>Main Website</span>
            </Link>

            <form action="/admin/logout" method="POST">
              <button
                type="submit"
                className="flex items-center space-x-3 px-4 py-3 w-full text-left rounded-xl hover:bg-brand-deep transition-colors text-rose-300 hover:text-rose-200 font-medium text-sm"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </form>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-8">
        {children}
      </main>

      {/* Mobile Bottom Navigation Bar (Fixed) */}
      <nav className="fixed bottom-0 inset-x-0 z-30 bg-brand-primary text-white border-t border-brand-deep/60 flex items-center justify-around py-1.5 px-2 md:hidden shadow-2xl backdrop-blur-lg">
        {navItems.map((item) => {
          const active = isActive(item.href)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all min-w-[64px] ${
                active
                  ? 'text-white bg-white/15 font-bold shadow-xs'
                  : 'text-blue-200 hover:text-white font-medium'
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? 'text-white' : item.color}`} />
              <span className="text-[11px] mt-0.5 leading-tight">{item.name}</span>
            </Link>
          )
        })}

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all text-blue-200 hover:text-white font-medium min-w-[64px]"
        >
          <Menu className="h-5 w-5 text-neutral-300" />
          <span className="text-[11px] mt-0.5 leading-tight">More</span>
        </button>
      </nav>
    </div>
  )
}
