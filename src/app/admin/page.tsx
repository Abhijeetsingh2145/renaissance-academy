import React from 'react'
import Link from 'next/link'
import { FileText, Bell } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-5xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">Welcome to Admin Dashboard</h1>
        <p className="text-neutral-600 text-xs sm:text-sm mt-1">Manage school admission enquiries and public notices from this control panel.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Link href="/admin/enquiries" className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs hover:shadow-md active:scale-[0.99] transition-all group flex items-start gap-4">
          <div className="bg-brand-50 text-brand-700 p-3.5 sm:p-4 rounded-xl group-hover:bg-brand-600 group-hover:text-white transition-colors shrink-0">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-800 mb-1 group-hover:text-brand-primary transition-colors">Admission Enquiries</h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">View submitted student admission applications & quick contact messages.</p>
          </div>
        </Link>
        
        <Link href="/admin/notices" className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs hover:shadow-md active:scale-[0.99] transition-all group flex items-start gap-4">
          <div className="bg-emerald-50 text-emerald-700 p-3.5 sm:p-4 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
            <Bell className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-800 mb-1 group-hover:text-emerald-700 transition-colors">Notice Board</h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">Create, publish, edit, and manage public notices for parents & students.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
