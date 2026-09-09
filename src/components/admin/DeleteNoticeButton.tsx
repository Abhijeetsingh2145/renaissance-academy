'use client'

import React, { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { deleteNotice } from '@/lib/actions/notices'

export function DeleteNoticeButton({ id, title }: { id: string, title: string }) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete the notice: "${title}"? This cannot be undone.`)) {
      setIsDeleting(true)
      const res = await deleteNotice(id)
      if (!res.success) {
        alert(res.error || 'Failed to delete notice')
        setIsDeleting(false)
      }
    }
  }

  return (
    <button 
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors disabled:opacity-50"
      title="Delete Notice"
    >
      <Trash2 className="h-5 w-5" />
    </button>
  )
}
