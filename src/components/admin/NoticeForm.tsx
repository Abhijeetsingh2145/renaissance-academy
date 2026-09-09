'use client'

import React, { useState, useRef } from 'react'
import { createNotice, updateNotice } from '@/lib/actions/notices'

interface Notice {
  id: string
  title: string
  description: string
  expiry_date: string
  is_published: boolean
}

interface NoticeFormProps {
  initialData?: Notice | null
  onSuccess: () => void
  onCancel: () => void
}

export function NoticeForm({ initialData, onSuccess, onCancel }: NoticeFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Format initial date for date input (YYYY-MM-DD)
  const defaultDate = initialData?.expiry_date 
    ? new Date(initialData.expiry_date).toISOString().split('T')[0] 
    : ''

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    
    setLoading(true)
    setError(null)
    
    const formData = new FormData(formRef.current)
    
    // Checkbox edge case (if not checked, it doesn't appear in FormData)
    const isPublished = formRef.current.is_published.checked
    formData.set('is_published', isPublished.toString())

    try {
      let result
      if (initialData?.id) {
        result = await updateNotice(initialData.id, formData)
      } else {
        result = await createNotice(formData)
      }

      if (result.success) {
        onSuccess()
      } else {
        setError(result.error || 'An error occurred.')
      }
    } catch {
      setError('An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
      <h2 className="text-xl font-bold text-neutral-900 mb-6">
        {initialData ? 'Edit Notice' : 'Create New Notice'}
      </h2>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-6 border border-red-200 text-sm">
          {error}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-1">
            Notice Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={initialData?.title}
            disabled={loading}
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
            placeholder="e.g. Summer Vacation Dates"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            defaultValue={initialData?.description}
            disabled={loading}
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
            placeholder="Enter the details of the notice..."
          />
        </div>

        <div>
          <label htmlFor="expiry_date" className="block text-sm font-medium text-neutral-700 mb-1">
            Expiry Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="expiry_date"
            name="expiry_date"
            required
            defaultValue={defaultDate}
            disabled={loading}
            className="w-full md:w-64 px-4 py-2 border border-neutral-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
          />
          <p className="text-xs text-neutral-500 mt-1">The notice will automatically hide from the public website after this date.</p>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="is_published"
            name="is_published"
            defaultChecked={initialData ? initialData.is_published : true}
            disabled={loading}
            className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-neutral-300 rounded"
          />
          <label htmlFor="is_published" className="ml-2 block text-sm text-neutral-700 font-medium">
            Publish immediately
          </label>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-4 border-t border-neutral-200">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="px-6 py-2 border border-neutral-300 rounded-md text-neutral-700 font-medium hover:bg-neutral-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-brand-primary text-white rounded-md font-medium hover:bg-brand-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : (initialData ? 'Update Notice' : 'Create Notice')}
          </button>
        </div>
      </form>
    </div>
  )
}
