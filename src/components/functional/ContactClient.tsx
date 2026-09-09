'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Container } from '@/components/layout/Container'
import { H1, Text } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input, Label, Textarea } from '@/components/ui/Forms'
import { MapPin, PhoneCall, Mail, Clock, ExternalLink, Send, CheckCircle2, Map, AlertCircle } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/ui/Motion'
import { submitContactMessage } from '@/lib/actions/enquiry'

const NAME_REGEX = /^[a-zA-Z\s.'-]{2,50}$/
const PHONE_REGEX = /^[6-9]\d{9}$/

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .regex(NAME_REGEX, 'Name should only contain letters, spaces, or dots.'),
  phone: z
    .string()
    .min(10, 'Phone number must be 10 digits.')
    .regex(PHONE_REGEX, 'Please enter a valid 10-digit Indian mobile number starting with 6-9.'),
  subject: z
    .string()
    .min(2, 'Subject must be at least 2 characters.')
    .max(100, 'Subject cannot exceed 100 characters.'),
  message: z
    .string()
    .min(5, 'Message must be at least 5 characters.')
    .max(1000, 'Message cannot exceed 1000 characters.'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  async function onFormSubmit(data: ContactFormData) {
    setLoading(true)
    setServerError(null)

    const res = await submitContactMessage(data)
    setLoading(false)

    if (res.success) {
      setSubmitted(true)
      reset()
    } else {
      setServerError(res.error || 'Failed to send message. Please try again.')
    }
  }

  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* 1. Header Banner */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-yellow relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <Container className="relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-accent-yellow/20 text-accent-yellow text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-accent-yellow/30">
            <MapPin className="h-3.5 w-3.5 text-accent-yellow" /> Visit & Connect
          </span>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">Contact Us</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            We are always delighted to assist parents, prospective students, and visitors.
          </Text>
        </Container>
      </div>

      <Container className="mt-8 max-w-6xl">
        <Breadcrumb items={[{ label: 'Contact' }]} />

        {/* 2. Top Row: 3 Organized Contact Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-12">
          {/* Card 1: Address */}
          <StaggerItem>
            <Card variant="surface-yellow" className="h-full flex flex-col justify-between p-6 hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-amber-200 shadow-xs">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="font-bold text-text-primary text-lg mb-2">Campus Address</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Baijnathpur, Balapar Road,<br />
                  Gorakhpur, Uttar Pradesh - 273007
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/ar62HEUrWTtHgtnQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-brand-primary hover:underline gap-1 mt-2"
              >
                Get Google Maps Directions <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Card>
          </StaggerItem>

          {/* Card 2: Phone & Admissions Desk */}
          <StaggerItem>
            <Card variant="surface-sky" className="h-full flex flex-col justify-between p-6 hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 bg-white text-brand-sky rounded-xl flex items-center justify-center mb-4 border border-blue-200 shadow-xs">
                  <PhoneCall className="h-6 w-6 text-brand-sky" />
                </div>
                <h3 className="font-bold text-text-primary text-lg mb-2">Admissions & Office Desk</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-1 font-semibold text-brand-primary">
                  +91-98-3886-3886
                </p>
                <p className="text-xs text-text-secondary mb-4">
                  Mon – Sat: 8:00 AM – 3:00 PM
                </p>
              </div>
              <a
                href="tel:+919838863886"
                className="inline-flex items-center text-xs font-bold text-brand-sky hover:underline gap-1 mt-2"
              >
                Call Admission Desk <PhoneCall className="h-3.5 w-3.5" />
              </a>
            </Card>
          </StaggerItem>

          {/* Card 3: Email */}
          <StaggerItem>
            <Card variant="surface-mint" className="h-full flex flex-col justify-between p-6 hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 bg-white text-emerald-600 rounded-xl flex items-center justify-center mb-4 border border-emerald-200 shadow-xs">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-text-primary text-lg mb-2">Official Email</h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4 break-all font-semibold text-emerald-900">
                  renaissance.academy14@gmail.com
                </p>
              </div>
              <a
                href="mailto:renaissance.academy14@gmail.com"
                className="inline-flex items-center text-xs font-bold text-emerald-700 hover:underline gap-1 mt-2"
              >
                Send Email <Mail className="h-3.5 w-3.5" />
              </a>
            </Card>
          </StaggerItem>
        </StaggerContainer>

        {/* 3. Bottom Grid: Location Map (7 cols) + Contact Form (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): Map + Visiting Hours */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <div className="flex items-center gap-2">
                  <Map className="h-4 w-4 text-brand-primary" />
                  <span className="font-bold text-sm text-brand-primary">Campus Location Map</span>
                </div>
                <span className="text-xs font-medium text-neutral-500">Balapar Road, Gorakhpur</span>
              </div>
              
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-neutral-200 shadow-inner bg-neutral-100">
                <iframe
                  title="Renaissance Academy Baijnathpur Balapar Road Gorakhpur Location Map"
                  src="https://maps.google.com/maps?q=Renaissance+Academy,+Baijnathpur,+Balapar+Road,+Gorakhpur,+Uttar+Pradesh+273007&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-3 p-3 bg-brand-50/60 rounded-xl border border-brand-100 flex items-center justify-between text-xs text-brand-900">
                <span className="font-medium">Baijnathpur, Balapar Road, Gorakhpur, UP - 273007</span>
                <a
                  href="https://maps.app.goo.gl/ar62HEUrWTtHgtnQ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-primary hover:underline flex items-center gap-1"
                >
                  Open Map <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </Card>

            {/* Visiting Hours Card */}
            <Card variant="surface-cream" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white text-amber-600 rounded-xl flex items-center justify-center font-bold border border-amber-200 shadow-xs">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary text-base">Office & Visiting Hours</h4>
                  <p className="text-xs text-text-secondary">Administrative office schedule for parents and visitors</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2 border-t border-amber-200/60">
                <div>
                  <span className="font-bold text-brand-primary block mb-0.5">School Office Hours:</span>
                  <span className="text-text-secondary">Monday – Saturday: 8:00 AM – 3:00 PM</span>
                </div>
                <div>
                  <span className="font-bold text-brand-primary block mb-0.5">Principal Meeting Timings:</span>
                  <span className="text-text-secondary">10:00 AM – 1:00 PM (By prior appointment)</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column (5 cols): Quick Message Form */}
          <div className="lg:col-span-5">
            <Card className="p-6 md:p-8 bg-white border border-neutral-200 rounded-2xl shadow-sm">
              <div className="mb-6">
                <h3 className="font-bold text-xl text-brand-primary mb-1">Send Us a Quick Message</h3>
                <p className="text-xs text-neutral-600">
                  Have a question regarding admissions, transport, or facilities? Fill out the form below.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-xl text-center space-y-3 my-6">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-base">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-800">
                    Thank you for contacting Renaissance Academy. Our office desk will review your inquiry and get back to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 text-xs border-emerald-300 text-emerald-900 hover:bg-emerald-100"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4" noValidate>
                  <div className="space-y-1">
                    <Label htmlFor="contact-name" className="text-xs font-semibold">Your Name *</Label>
                    <Input id="contact-name" {...register('name')} placeholder="Parent or Visitor Name" className="text-xs" />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="contact-phone" className="text-xs font-semibold">Phone Number *</Label>
                    <Input id="contact-phone" type="tel" {...register('phone')} placeholder="10-digit mobile number" className="text-xs" />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="contact-subject" className="text-xs font-semibold">Subject / Topic *</Label>
                    <Input id="contact-subject" {...register('subject')} placeholder="e.g. Admission Enquiry for Class V" className="text-xs" />
                    {errors.subject && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="contact-message" className="text-xs font-semibold">Your Message *</Label>
                    <Textarea id="contact-message" {...register('message')} rows={4} placeholder="Write your query here..." className="text-xs" />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {serverError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <Button type="submit" disabled={loading} variant="accent" className="w-full text-xs font-bold py-3 mt-2">
                    {loading ? 'Sending Message...' : 'Send Message'} <Send className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
