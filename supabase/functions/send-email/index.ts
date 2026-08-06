import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const resendApiKey = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const payload = await req.json()
    const { record, table } = payload 

    let subject = ""
    let htmlContent = ""

    if (table === 'contact_inquiries') {
      subject = `New Contact Inquiry: ${record.subject}`
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${record.name}</p>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Message:</strong></p>
        <p>${record.message}</p>
      `
    } else if (table === 'job_applications') {
      subject = `New Job Application from ${record.full_name}`
      htmlContent = `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${record.full_name}</p>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Phone:</strong> ${record.phone}</p>
        <p><strong>Position:</strong> ${record.position}</p>
        <p><strong>Resume Link:</strong> <a href="${record.resume_link}">${record.resume_link}</a></p>
        <p><strong>Cover Letter:</strong></p>
        <p>${record.cover_letter || 'None provided'}</p>
      `
    } else {
      throw new Error(`Unsupported table: ${table}`)
    }

    if (!resendApiKey) {
      throw new Error("Missing RESEND_API_KEY environment variable")
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: 'Renaissance Academy <onboarding@resend.dev>',
        to: ['abhijeetworks07@gmail.com'], // Deliver to the admin's email
        subject: subject,
        html: htmlContent
      })
    })

    if (!res.ok) {
      const errorText = await res.text()
      throw new Error(`Resend API Error: ${errorText}`)
    }

    const data = await res.json()
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
