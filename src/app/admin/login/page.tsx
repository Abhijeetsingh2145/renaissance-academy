'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Image from 'next/image'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.refresh()
      router.push('/admin')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden border border-neutral-200">
        <div className="p-8 bg-brand-900 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 p-3 rounded-full inline-block">
              <Image src="/logo.png" alt="Logo" width={48} height={48} className="h-12 w-auto" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Renaissance Academy</h1>
          <p className="text-brand-200 text-sm mt-2">Administrative Dashboard</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded text-sm border border-red-200">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                placeholder="admin@renaissanceacademy.org.in"
                disabled={loading}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-brand-500 focus:border-brand-500"
                placeholder="••••••••"
                disabled={loading}
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-primary text-white py-2.5 px-4 rounded-md font-medium hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
