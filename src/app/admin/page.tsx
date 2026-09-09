import React from 'react'
import Link from 'next/link'
import { FileText, Bell } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-neutral-900 mb-2">Welcome to the Admin Dashboard</h1>
      <p className="text-neutral-600 mb-8">Manage school enquiries and public notices from this panel.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/admin/enquiries" className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
          <div className="bg-brand-50 text-brand-700 p-4 rounded-lg group-hover:bg-brand-600 group-hover:text-white transition-colors">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-neutral-800 mb-1">Admission Enquiries</h2>
            <p className="text-neutral-500 text-sm">View submitted applications for admission.</p>
          </div>
        </Link>
        
        <Link href="/admin/notices" className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
          <div className="bg-brand-50 text-brand-700 p-4 rounded-lg group-hover:bg-brand-600 group-hover:text-white transition-colors">
            <Bell className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-neutral-800 mb-1">Notice Board</h2>
            <p className="text-neutral-500 text-sm">Create, edit, and manage public notices.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
