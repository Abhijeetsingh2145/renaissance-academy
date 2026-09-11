'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Bell, Calendar, Search, AlertCircle, Sparkles, FileText, CheckCircle2 } from 'lucide-react'
import { format } from 'date-fns'

interface Notice {
  id: string
  title: string
  description: string
  created_at: string
  expiry_date?: string
}

export function EventsNoticeList() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchNotices() {
      try {
        setLoading(true)
        const supabase = createClient()
        const { data, error: fetchError } = await supabase
          .from('notices')
          .select('id, title, description, created_at, expiry_date')
          .eq('is_published', true)
          .gte('expiry_date', new Date().toISOString().split('T')[0])
          .order('created_at', { ascending: false })

        if (fetchError) throw fetchError
        setNotices(data || [])
      } catch (err: unknown) {
        console.error('Error fetching notices for events page:', err)
        setError('Unable to load live notices at this time.')
      } finally {
        setLoading(false)
      }
    }

    fetchNotices()
  }, [])

  const filteredNotices = useMemo(() => {
    return notices.filter(
      (n) =>
        n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        n.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [notices, searchTerm])

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1B2559] to-[#2B3674] p-5 sm:p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-amber-400/20 border border-amber-300/40 p-2.5 rounded-xl">
              <Bell className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-extrabold text-lg sm:text-xl text-white">Live Official Notices</h3>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-xs text-blue-100/90 mt-0.5">
                All official notices published by school administration are listed live below.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/15 backdrop-blur-xs shrink-0 self-start sm:self-auto">
            <Sparkles className="h-3.5 w-3.5 text-amber-300 mr-1.5" />
            <span>{notices.length} Active {notices.length === 1 ? 'Notice' : 'Notices'}</span>
          </div>
        </div>

        {/* Search Input when 3 or more notices exist */}
        {notices.length >= 3 && (
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-200" />
            <input
              type="text"
              placeholder="Search published notices by title or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/10 text-white placeholder:text-blue-200/70 text-xs sm:text-sm rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
            />
          </div>
        )}
      </div>

      {/* Notice Cards List */}
      <div className="p-5 sm:p-6 bg-neutral-50/50 space-y-4">
        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 bg-white rounded-xl border border-neutral-200/60 p-6">
            <div className="animate-spin rounded-full h-8 w-8 border-3 border-brand-primary border-t-transparent"></div>
            <p className="text-xs sm:text-sm font-medium text-neutral-600">Syncing live notices...</p>
          </div>
        ) : error ? (
          <div className="py-10 flex flex-col items-center justify-center text-center space-y-2 bg-rose-50/60 border border-rose-200/80 rounded-xl p-6 text-rose-700">
            <AlertCircle className="h-8 w-8 text-rose-500" />
            <p className="text-sm font-semibold">{error}</p>
            <p className="text-xs text-rose-600">Please check your internet connection or refresh the page.</p>
          </div>
        ) : filteredNotices.length === 0 ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 bg-white rounded-xl border border-dashed border-neutral-300 p-6">
            <div className="bg-neutral-100 p-3 rounded-full">
              <FileText className="h-6 w-6 text-neutral-400" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-800 text-sm">No Active Notices Found</h4>
              <p className="text-xs text-neutral-500 max-w-sm mt-1">
                {searchTerm ? 'No notices match your search criteria. Try clearing the search query.' : 'There are currently no new published notices. Newly issued notices will automatically appear here.'}
              </p>
            </div>
          </div>
        ) : (
          filteredNotices.map((notice, index) => (
            <div
              key={notice.id}
              className="bg-white rounded-xl border border-neutral-200/80 p-5 shadow-2xs hover:shadow-md hover:border-brand-300 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div className="flex items-start space-x-2.5">
                  <span className="bg-brand-50 text-brand-700 text-[11px] font-extrabold px-2.5 py-0.5 rounded-md border border-brand-200/60 shrink-0 mt-0.5">
                    Notice {filteredNotices.length - index}
                  </span>
                  <h4 className="font-bold text-neutral-900 text-base leading-snug group-hover:text-brand-700 transition-colors">
                    {notice.title}
                  </h4>
                </div>

                <div className="flex items-center space-x-1.5 text-xs text-neutral-500 font-medium shrink-0 bg-neutral-100/80 px-2.5 py-1 rounded-lg">
                  <Calendar className="h-3.5 w-3.5 text-brand-primary" />
                  <span>{format(new Date(notice.created_at), 'PPP')}</span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed whitespace-pre-wrap bg-neutral-50/70 p-3.5 rounded-lg border border-neutral-100">
                {notice.description}
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 font-medium pt-2 border-t border-neutral-100">
                <span className="flex items-center text-emerald-700 font-semibold">
                  <CheckCircle2 className="h-3 w-3 mr-1 text-emerald-600" />
                  Official Announcement
                </span>
                {notice.expiry_date && (
                  <span>Valid until: {format(new Date(notice.expiry_date), 'PP')}</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
