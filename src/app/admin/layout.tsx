import React from 'react'
import Link from 'next/link'
import { Bell, FileText, LayoutDashboard, LogOut, Globe } from 'lucide-react'

export const metadata = {
  title: 'Admin Dashboard | Renaissance Academy',
  description: 'Private administration panel for Renaissance Academy.',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col md:flex-row">
      {/* Sidebar Desktop & Topbar Mobile */}
      <aside className="bg-brand-primary text-white w-full md:w-64 shrink-0 flex flex-col md:min-h-screen">
        <div className="p-4 md:p-6 border-b border-brand-deep">
          <h1 className="text-xl font-bold tracking-tight">Renaissance Admin</h1>
        </div>
        
        <nav className="flex-1 p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
          <Link href="/admin" className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-brand-deep transition-colors shrink-0">
            <LayoutDashboard className="h-5 w-5 text-brand-sky" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/admin/enquiries" className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-brand-deep transition-colors shrink-0">
            <FileText className="h-5 w-5 text-accent-gold" />
            <span className="font-medium">Enquiries</span>
          </Link>
          <Link href="/admin/notices" className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-brand-deep transition-colors shrink-0">
            <Bell className="h-5 w-5 text-accent-mint" />
            <span className="font-medium">Notices</span>
          </Link>
          
          <div className="md:mt-auto space-y-1">
            <Link
              href="/"
              className="flex items-center space-x-3 px-4 py-3 w-full text-left rounded-xl hover:bg-brand-deep transition-colors text-blue-200 hover:text-white"
            >
              <Globe className="h-5 w-5 text-brand-sky" />
              <span className="font-medium">Main Website</span>
            </Link>
            <form action="/admin/logout" method="POST">
              <button type="submit" className="flex items-center space-x-3 px-4 py-3 w-full text-left rounded-xl hover:bg-brand-deep transition-colors text-rose-300 hover:text-rose-200">
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Sign Out</span>
              </button>
            </form>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
