'use client'

import React, { useState } from 'react'
import { Plus, Edit } from 'lucide-react'
import { format } from 'date-fns'
import { NoticeForm } from './NoticeForm'
import { DeleteNoticeButton } from './DeleteNoticeButton'

interface Notice {
  id: string
  title: string
  description: string
  expiry_date: string
  is_published: boolean
  created_at: string
}

export function NoticeManagerClient({ initialNotices }: { initialNotices: Notice[] }) {
  const [view, setView] = useState<'list' | 'create' | 'edit'>('list')
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null)

  const handleCreate = () => {
    setEditingNotice(null)
    setView('create')
  }

  const handleEdit = (notice: Notice) => {
    setEditingNotice(notice)
    setView('edit')
  }

  const handleSuccess = () => {
    setView('list')
    setEditingNotice(null)
  }

  const handleCancel = () => {
    setView('list')
    setEditingNotice(null)
  }

  if (view === 'create' || view === 'edit') {
    return (
      <NoticeForm 
        initialData={editingNotice} 
        onSuccess={handleSuccess} 
        onCancel={handleCancel} 
      />
    )
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">Manage Notices</h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">Create, edit, and control public announcements on the website.</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center justify-center space-x-2 bg-brand-primary text-white px-4 py-2.5 rounded-xl hover:bg-brand-800 transition-colors font-semibold text-xs sm:text-sm shadow-xs w-full sm:w-auto"
        >
          <Plus className="h-4 w-4" />
          <span>Create New Notice</span>
        </button>
      </div>

      {!initialNotices || initialNotices.length === 0 ? (
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-neutral-200 text-center shadow-xs">
          <p className="text-neutral-500 text-sm mb-4">No notices found in database.</p>
          <button
            onClick={handleCreate}
            className="text-brand-primary font-bold text-sm hover:underline"
          >
            Create your first notice
          </button>
        </div>
      ) : (
        <>
          {/* Mobile Notice Cards (< md) */}
          <div className="space-y-3.5 md:hidden">
            {initialNotices.map((notice) => {
              const isExpired = new Date(notice.expiry_date) < new Date()
              return (
                <div
                  key={notice.id}
                  className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-2.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {notice.is_published ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800">
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-neutral-100 text-neutral-800">
                          Hidden
                        </span>
                      )}
                      {isExpired && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-800">
                          Expired
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleEdit(notice)}
                        className="text-neutral-600 hover:text-brand-600 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                        title="Edit Notice"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <DeleteNoticeButton id={notice.id} title={notice.title} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-neutral-900 text-sm">{notice.title}</h3>
                    <p className="text-neutral-600 text-xs mt-1 leading-relaxed">{notice.description}</p>
                  </div>

                  <div className="text-[11px] text-neutral-500 pt-1 border-t border-neutral-100">
                    Expires on: <span className="font-semibold text-neutral-700">{format(new Date(notice.expiry_date), 'MMM d, yyyy')}</span>
                  </div>
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
                    <th className="px-6 py-4 whitespace-nowrap">Status</th>
                    <th className="px-6 py-4">Title & Description</th>
                    <th className="px-6 py-4 whitespace-nowrap">Expiry Date</th>
                    <th className="px-6 py-4 whitespace-nowrap text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {initialNotices.map((notice) => {
                    const isExpired = new Date(notice.expiry_date) < new Date()
                    return (
                      <tr key={notice.id} className="hover:bg-neutral-50/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          {notice.is_published ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Published
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
                              Hidden
                            </span>
                          )}
                          {isExpired && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 ml-2">
                              Expired
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-neutral-900">{notice.title}</div>
                          <div className="text-neutral-500 text-xs mt-1 line-clamp-2 max-w-md">{notice.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-neutral-600">
                          {format(new Date(notice.expiry_date), 'MMM d, yyyy')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => handleEdit(notice)}
                              className="text-neutral-500 hover:text-brand-600 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                              title="Edit Notice"
                            >
                              <Edit className="h-5 w-5" />
                            </button>
                            <DeleteNoticeButton id={notice.id} title={notice.title} />
                          </div>
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
    </>
  )
}
