import React from 'react'
import { AdminNavigation } from '@/components/admin/AdminNavigation'

export const metadata = {
  title: 'Admin Dashboard | Renaissance Academy',
  description: 'Private administration panel for Renaissance Academy.',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminNavigation>{children}</AdminNavigation>
}

