'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

// Helper to create authenticated client
async function getClient() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Ignore in server actions
          }
        },
      },
    }
  )
}

export async function createNotice(formData: FormData) {
  const supabase = await getClient()
  
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const expiry_date = formData.get('expiry_date') as string
  const is_published = formData.get('is_published') === 'true'

  if (!title || !description || !expiry_date) {
    return { success: false, error: 'Title, description, and expiry date are required.' }
  }

  const { error } = await supabase
    .from('notices')
    .insert([
      {
        title,
        description,
        expiry_date,
        is_published,
      }
    ])

  if (error) {
    console.error('Create notice error:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin/notices')
  revalidatePath('/')
  revalidatePath('/events')
  return { success: true }
}

export async function updateNotice(id: string, formData: FormData) {
  const supabase = await getClient()
  
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const expiry_date = formData.get('expiry_date') as string
  const is_published = formData.get('is_published') === 'true'

  if (!id || !title || !description || !expiry_date) {
    return { success: false, error: 'All fields are required.' }
  }

  const { error } = await supabase
    .from('notices')
    .update({
      title,
      description,
      expiry_date,
      is_published,
    })
    .eq('id', id)

  if (error) {
    console.error('Update notice error:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin/notices')
  revalidatePath('/')
  revalidatePath('/events')
  return { success: true }
}

export async function deleteNotice(id: string) {
  const supabase = await getClient()
  
  const { error } = await supabase
    .from('notices')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Delete notice error:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin/notices')
  revalidatePath('/')
  revalidatePath('/events')
  return { success: true }
}
