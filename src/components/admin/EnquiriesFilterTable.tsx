'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { format } from 'date-fns'
import { Phone, Mail, User, BookOpen, MessageSquare, Search, Filter, Layers } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export interface EnquiryItem {
  id: string
  created_at: string
  parent_name: string
  student_name: string
  dob: string
  class_seeking: string
  phone: string
  email: string
  previous_school: string | null
}

interface Props {
  initialEnquiries: EnquiryItem[]
}

export function EnquiriesFilterTable({ initialEnquiries }: Props) {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>(initialEnquiries)
  const [filterType, setFilterType] = useState<'all' | 'admission' | 'contact'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Realtime subscription — new enquiries appear instantly without refresh
  useEffect(() => {
    const supabase = createClient()
    const channel = supabase
      .channel('enquiries-realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'enquiries' },
        (payload) => {
          setEnquiries((prev) => [payload.new as EnquiryItem, ...prev])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  // Calculate Counts
  const counts = useMemo(() => {
    const admission = enquiries.filter((item) => !item.student_name?.startsWith('Contact Form:')).length
    const contact = enquiries.filter((item) => item.student_name?.startsWith('Contact Form:')).length
    return {
      all: enquiries.length,
      admission,
      contact,
    }
  }, [enquiries])

  // Filtered List
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      const isContact = item.student_name?.startsWith('Contact Form:')
      
      // Category filter
      if (filterType === 'admission' && isContact) return false
      if (filterType === 'contact' && !isContact) return false

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchName = item.parent_name?.toLowerCase().includes(q)
        const matchStudent = item.student_name?.toLowerCase().includes(q)
        const matchPhone = item.phone?.toLowerCase().includes(q)
        const matchEmail = item.email?.toLowerCase().includes(q)
        const matchClass = item.class_seeking?.toLowerCase().includes(q)
        return matchName || matchStudent || matchPhone || matchEmail || matchClass
      }

      return true
    })
  }, [enquiries, filterType, searchQuery])

  return (
    <div className="space-y-6">
      {/* Top Controls: Filter Tabs & Search Bar */}
      <div className="bg-white p-4 md:p-5 rounded-2xl border border-neutral-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-neutral-100 p-1.5 rounded-xl border border-neutral-200/80 overflow-x-auto">
          <button
            type="button"
            onClick={() => setFilterType('all')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shrink-0 ${
              filterType === 'all'
                ? 'bg-brand-primary text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/60'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>All Submissions</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${
              filterType === 'all' ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-700'
            }`}>
              {counts.all}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setFilterType('admission')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shrink-0 ${
              filterType === 'admission'
                ? 'bg-brand-primary text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/60'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Admission Enquiries</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${
              filterType === 'admission' ? 'bg-white/20 text-white' : 'bg-blue-100 text-brand-primary'
            }`}>
              {counts.admission}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setFilterType('contact')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shrink-0 ${
              filterType === 'contact'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/60'
            }`}
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Quick Messages</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${
              filterType === 'contact' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
            }`}>
              {counts.contact}
            </span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search name, phone, class..."
            className="w-full text-xs pl-9 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* Main View: Mobile Cards + Desktop Table */}
      {filteredEnquiries.length === 0 ? (
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200 text-center shadow-xs">
          <div className="inline-flex bg-neutral-100 p-4 rounded-full text-neutral-400 mb-4">
            <Filter className="h-8 w-8 text-neutral-400" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-neutral-800 mb-2">No Matching Results Found</h2>
          <p className="text-neutral-500 text-xs md:text-sm">
            {searchQuery
              ? `No submissions match "${searchQuery}" in ${filterType === 'all' ? 'any category' : filterType}.`
              : `There are currently no ${filterType === 'admission' ? 'Admission Enquiries' : 'Quick Messages'}.`}
          </p>
        </div>
      ) : (
        <>
          {/* Mobile Card Layout (< md) */}
          <div className="space-y-3.5 md:hidden">
            {filteredEnquiries.map((enquiry) => {
              const isContactForm = enquiry.student_name?.startsWith('Contact Form:')

              return (
                <div
                  key={enquiry.id}
                  className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-xs space-y-3"
                >
                  {/* Header: Date + Type Badge */}
                  <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-2.5">
                    <span className="text-[11px] text-neutral-500 font-medium">
                      {enquiry.created_at ? format(new Date(enquiry.created_at), 'MMM d, yyyy • h:mm a') : '-'}
                    </span>
                    {isContactForm ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <MessageSquare className="h-3 w-3" /> Quick Message
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-brand-primary border border-blue-200">
                        <BookOpen className="h-3 w-3" /> Admission
                      </span>
                    )}
                  </div>

                  {/* Applicant Details */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-brand-primary shrink-0" />
                        <span className="font-bold text-neutral-900 text-sm">{enquiry.parent_name || 'N/A'}</span>
                      </div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200">
                        {enquiry.class_seeking}
                      </span>
                    </div>

                    {!isContactForm && enquiry.student_name && (
                      <p className="text-xs text-neutral-600 mt-1 pl-6">
                        Student: <span className="font-semibold text-neutral-800">{enquiry.student_name}</span>
                        {enquiry.dob && ` (DOB: ${format(new Date(enquiry.dob), 'dd/MM/yyyy')})`}
                      </p>
                    )}
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href={`tel:${enquiry.phone}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-brand-50 text-brand-primary rounded-xl text-xs font-bold border border-blue-200 active:bg-brand-primary active:text-white transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>{enquiry.phone}</span>
                    </a>
                    {enquiry.email && (
                      <a
                        href={`mailto:${enquiry.email}`}
                        className="inline-flex items-center justify-center p-2 bg-neutral-100 text-neutral-700 rounded-xl text-xs font-semibold border border-neutral-200 hover:bg-neutral-200 transition-colors"
                        title={enquiry.email}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  {/* Message Content if available */}
                  {enquiry.previous_school && (
                    <div className="text-xs text-neutral-600 bg-neutral-50 p-2.5 rounded-xl border border-neutral-100 leading-relaxed">
                      <span className="font-semibold text-neutral-700 block mb-0.5">Details/Message:</span>
                      <p className="whitespace-pre-line">{enquiry.previous_school}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Desktop Table View (>= md) */}
          <div className="hidden md:block bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-neutral-50 text-neutral-600 font-bold border-b border-neutral-200 uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="px-6 py-4 whitespace-nowrap">Submission Date</th>
                    <th className="px-6 py-4 whitespace-nowrap">Type</th>
                    <th className="px-6 py-4 whitespace-nowrap">Applicant / Sender</th>
                    <th className="px-6 py-4 whitespace-nowrap">Topic / Class Seeking</th>
                    <th className="px-6 py-4 whitespace-nowrap">Contact Details</th>
                    <th className="px-6 py-4 whitespace-nowrap">Message / Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {filteredEnquiries.map((enquiry) => {
                    const isContactForm = enquiry.student_name?.startsWith('Contact Form:')

                    return (
                      <tr key={enquiry.id} className="hover:bg-neutral-50/60 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-neutral-500 text-xs font-medium">
                          {enquiry.created_at ? format(new Date(enquiry.created_at), 'MMM d, yyyy') : '-'}
                          <div className="text-[11px] text-neutral-400 font-normal">
                            {enquiry.created_at ? format(new Date(enquiry.created_at), 'h:mm a') : ''}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          {isContactForm ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <MessageSquare className="h-3 w-3" /> Quick Message
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-brand-primary border border-blue-200">
                              <BookOpen className="h-3 w-3" /> Admission Enquiry
                            </span>
                          )}
                        </td>

                        <td className="px-6 py-4 font-medium text-neutral-900">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-neutral-400 shrink-0" />
                            <span>{enquiry.parent_name || 'N/A'}</span>
                          </div>
                          {!isContactForm && (
                            <div className="text-xs text-neutral-500 font-normal mt-1 pl-6">
                              Student: <span className="font-semibold text-neutral-700">{enquiry.student_name}</span>
                              {enquiry.dob && ` (DOB: ${format(new Date(enquiry.dob), 'dd/MM/yyyy')})`}
                            </div>
                          )}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200">
                            {enquiry.class_seeking}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-neutral-900 font-medium text-xs">
                            <Phone className="h-3.5 w-3.5 text-neutral-400" />
                            <a href={`tel:${enquiry.phone}`} className="hover:underline text-brand-primary font-bold">
                              {enquiry.phone}
                            </a>
                          </div>
                          {enquiry.email && (
                            <div className="flex items-center gap-1.5 text-neutral-500 text-xs mt-1">
                              <Mail className="h-3.5 w-3.5 text-neutral-400" />
                              <span>{enquiry.email}</span>
                            </div>
                          )}
                        </td>

                        <td className="px-6 py-4 text-neutral-600 text-xs leading-relaxed max-w-xs">
                          {enquiry.previous_school ? (
                            <p className="line-clamp-2 bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                              {enquiry.previous_school}
                            </p>
                          ) : (
                            <span className="text-neutral-400 italic">No additional message</span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
