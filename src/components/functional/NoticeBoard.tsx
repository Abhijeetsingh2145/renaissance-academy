'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Bell, X, Calendar, AlertCircle, Search } from 'lucide-react'
import { format } from 'date-fns'

interface Notice {
  id: string
  title: string
  description: string
  created_at: string
}

export function NoticeBoard() {
  const [isOpen, setIsOpen] = useState(false)
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchNotices() {
      try {
        const supabase = createClient()
        const { data, error: fetchError } = await supabase
          .from('notices')
          .select('id, title, description, created_at')
          .eq('is_published', true)
          .gte('expiry_date', new Date().toISOString().split('T')[0])
          .order('created_at', { ascending: false })

        if (fetchError) throw fetchError
        setNotices(data || [])
      } catch (err: unknown) {
        console.error('Error fetching notices:', err)
        setError('Could not load notices.')
      } finally {
        setLoading(false)
      }
    }

    if (isOpen && notices.length === 0 && !error) {
      fetchNotices()
    }
  }, [isOpen, notices.length, error])

  const filteredNotices = useMemo(() => {
    return notices.filter(
      (n) =>
        n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        n.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [notices, searchTerm])

  return (
    <>
      {/* Notice Board Toggle Button (Right Floating Tab) */}
      <div 
        className={`fixed top-36 right-0 z-40 transition-all duration-300 ${isOpen ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 bg-brand-900 text-white py-2.5 px-4 rounded-l-full shadow-xl hover:bg-brand-800 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 border-l border-t border-b border-white/20 group"
          aria-label="Open Notice Board"
        >
          <div className="relative">
            <Bell className="h-4 w-4 text-amber-300 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
          </div>
          <span className="font-semibold text-xs tracking-wider uppercase text-white">
            Notice Board
          </span>
        </button>
      </div>

      {/* Slide-out Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-neutral-200 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex flex-col bg-brand-primary text-white p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center space-x-2">
                <Bell className="h-5 w-5 text-amber-300" />
                <span>Notice Board</span>
              </h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-brand-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close Notice Board"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Instant Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-200" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-white/10 text-white placeholder:text-brand-200/80 rounded-lg text-xs border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto bg-neutral-50 p-5 space-y-3">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-40 space-y-3 text-neutral-500">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
                <p className="text-sm">Loading notices...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center h-40 space-y-2 text-rose-500 text-center">
                <AlertCircle className="h-8 w-8" />
                <p className="text-sm">{error}</p>
              </div>
            ) : filteredNotices.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 space-y-2 text-neutral-500 text-center">
                <Bell className="h-8 w-8 opacity-20" />
                <p className="text-sm font-medium">No notices found.</p>
                {searchTerm && <p className="text-xs text-neutral-400">Try adjusting your search query.</p>}
              </div>
            ) : (
              filteredNotices.map((notice) => (
                <div key={notice.id} className="bg-white border border-neutral-200 p-4 rounded-xl shadow-2xs hover:shadow-md hover:border-brand-200 transition-all">
                  <h3 className="font-semibold text-neutral-900 text-sm mb-1.5">{notice.title}</h3>
                  <p className="text-xs text-neutral-600 mb-3 whitespace-pre-wrap leading-relaxed">{notice.description}</p>
                  <div className="flex items-center text-[11px] font-medium text-neutral-400 border-t border-neutral-100 pt-2">
                    <Calendar className="h-3 w-3 mr-1 text-brand-primary" />
                    {format(new Date(notice.created_at), 'PPP')}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs sm:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
