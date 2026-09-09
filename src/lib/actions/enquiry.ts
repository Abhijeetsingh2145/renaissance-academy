'use server'

import { createClient } from '@supabase/supabase-js'

function parseToIsoDate(dobStr: string): string {
  if (!dobStr) return new Date().toISOString().split('T')[0]
  
  const trimmed = dobStr.trim()
  // If already YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed

  // If DD/MM/YYYY or DD-MM-YYYY
  const parts = trimmed.split(/[\/\-]/)
  if (parts.length === 3) {
    if (parts[0].length === 4) {
      // YYYY/MM/DD
      const [y, m, d] = parts
      return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`
    } else if (parts[2].length === 4) {
      // DD/MM/YYYY
      const [d, m, y] = parts
      return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`
    }
  }

  // Fallback Date parser
  const parsed = new Date(trimmed)
  if (!isNaN(parsed.getTime())) {
    return parsed.toISOString().split('T')[0]
  }

  return new Date().toISOString().split('T')[0]
}

// Service Role Key is used on the server to ensure reliable database insertion.
export async function submitEnquiry(formData: FormData) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    return { success: false, error: 'Database configuration missing. Please try again later.' }
  }

  const rawName = (formData.get('parent_name') || formData.get('name') || '').toString().trim()
  const rawStudentName = (formData.get('student_name') || rawName || 'General Contact').toString().trim()
  const rawDob = (formData.get('dob') || '').toString().trim()
  const rawClassSeeking = (formData.get('class_seeking') || formData.get('subject') || 'General Inquiry').toString().trim()
  const rawPhone = (formData.get('phone') || '').toString().trim()
  const rawEmail = (formData.get('email') || 'not-provided@renaissanceacademy.org.in').toString().trim()
  const rawMessageOrSchool = (formData.get('previous_school') || formData.get('message') || '').toString().trim()

  if (!rawName || !rawPhone) {
    return { success: false, error: 'Please fill in all required contact fields.' }
  }

  const formattedDob = parseToIsoDate(rawDob)

  try {
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      }
    })

    const { error } = await supabaseAdmin
      .from('enquiries')
      .insert([
        {
          parent_name: rawName || 'N/A',
          student_name: rawStudentName || rawName || 'N/A',
          dob: formattedDob,
          class_seeking: rawClassSeeking || 'General Inquiry',
          phone: rawPhone || 'N/A',
          email: rawEmail || 'not-provided@renaissanceacademy.org.in',
          previous_school: rawMessageOrSchool || '',
        }
      ])

    if (error) {
      console.error('Supabase insert error:', error)
      return { success: false, error: `Database insert failed: ${error.message}` }
    }

    return { success: true }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'An unexpected error occurred.'
    console.error('Action error:', err)
    return { success: false, error: errorMsg }
  }
}

export async function submitContactMessage(data: { name: string; phone: string; subject: string; message: string }) {
  const formData = new FormData()
  formData.append('parent_name', data.name)
  formData.append('student_name', `Contact Form: ${data.name}`)
  formData.append('phone', data.phone)
  formData.append('class_seeking', data.subject)
  formData.append('previous_school', data.message)
  formData.append('dob', new Date().toISOString().split('T')[0])
  formData.append('email', 'contact-form@renaissanceacademy.org.in')

  return await submitEnquiry(formData)
}
