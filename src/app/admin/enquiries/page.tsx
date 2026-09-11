import React from 'react'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { EnquiriesFilterTable, EnquiryItem } from '@/components/admin/EnquiriesFilterTable'
import { Inbox } from 'lucide-react'

export const metadata = {
  title: 'Enquiries & Messages | Admin Dashboard',
}

export default async function EnquiriesPage() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
      },
    }
  )

  const { data: enquiries, error } = await supabase
    .from('enquiries')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">Enquiries & Messages</h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">Filter, search, and manage all admission enquiries and website contact form submissions.</p>
        </div>
        <div className="bg-brand-primary text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs w-fit shrink-0">
          Total Submissions: {enquiries?.length || 0}
        </div>
      </div>

      {error ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200">
          <p className="font-semibold">Failed to load enquiries from database.</p>
          <p className="text-sm mt-1">{error.message}</p>
        </div>
      ) : !enquiries || enquiries.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-neutral-200 text-center shadow-xs">
          <div className="inline-flex bg-neutral-100 p-4 rounded-full text-neutral-400 mb-4">
            <Inbox className="h-8 w-8 text-neutral-500" />
          </div>
          <h2 className="text-xl font-bold text-neutral-800 mb-2">No Enquiries Received Yet</h2>
          <p className="text-neutral-500 text-sm">Submissions from the Contact form and Admission Enquiry form will appear here in real-time.</p>
        </div>
      ) : (
        <EnquiriesFilterTable initialEnquiries={enquiries as EnquiryItem[]} />
      )}
    </div>
  )
}
