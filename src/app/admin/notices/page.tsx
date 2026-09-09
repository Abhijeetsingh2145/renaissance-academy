import React from 'react'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NoticeManagerClient } from '@/components/admin/NoticeManagerClient'

export const metadata = {
  title: 'Notices | Admin Dashboard',
}

export default async function NoticesPage() {
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

  const { data: notices, error } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {error ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200">
          <p className="font-semibold">Failed to load notices.</p>
          <p className="text-sm mt-1">{error.message}</p>
        </div>
      ) : (
        <NoticeManagerClient initialNotices={notices || []} />
      )}
    </div>
  )
}
