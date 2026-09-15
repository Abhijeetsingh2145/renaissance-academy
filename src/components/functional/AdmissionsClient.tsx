'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { Input, Label } from '@/components/ui/Forms'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { submitEnquiry } from '@/lib/actions/enquiry'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const NAME_REGEX = /^[a-zA-Z\s.'-]{2,50}$/
const PHONE_REGEX = /^[6-9]\d{9}$/
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Zod Form Validation Schema
const enquirySchema = z.object({
  parent_name: z
    .string()
    .min(2, 'Parent name must be at least 2 characters.')
    .regex(NAME_REGEX, 'Parent name should only contain letters, spaces, or dots.'),
  student_name: z
    .string()
    .min(2, 'Student name must be at least 2 characters.')
    .regex(NAME_REGEX, 'Student name should only contain letters, spaces, or dots.'),
  dob: z.string().min(1, 'Date of birth is required.'),
  class_seeking: z.string().min(1, 'Please specify the class seeking admission.'),
  phone: z
    .string()
    .min(10, 'Mobile number must be 10 digits.')
    .regex(PHONE_REGEX, 'Please enter a valid 10-digit mobile number starting with 6-9.'),
  email: z
    .string()
    .min(1, 'Email address is required.')
    .regex(EMAIL_REGEX, 'Please enter a valid email address (e.g. name@domain.com).'),
  previous_school: z.string().optional(),
})

type EnquiryFormData = z.infer<typeof enquirySchema>

export function AdmissionsClient() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      parent_name: '',
      student_name: '',
      dob: '',
      class_seeking: '',
      phone: '',
      email: '',
      previous_school: '',
    },
  })

  async function onFormSubmit(data: EnquiryFormData) {
    setLoading(true)
    setServerError(null)

    const formData = new FormData()
    Object.entries(data).forEach(([key, val]) => {
      formData.append(key, val || '')
    })

    const result = await submitEnquiry(formData)

    if (result.success) {
      setSuccess(true)
      reset()
    } else {
      setServerError(result.error || 'Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-yellow">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">Admissions Enquiry</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            Join the dynamic community at Renaissance Academy. Admissions for Nursery to Class IX are currently open.
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'Admissions' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <Card className="shadow-sm border border-neutral-200 rounded-2xl bg-white">
              <CardContent className="p-8">
                <H2 className="mb-2 text-2xl text-brand-900">Enquiry Form</H2>
                <Text className="mb-8 text-sm text-neutral-600">
                  Please fill out the form below and our admissions team will get back to you shortly.
                </Text>

                {success ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-xl text-center space-y-4">
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Enquiry Submitted Successfully!</h3>
                      <p className="text-sm text-emerald-800">
                        Thank you for reaching out to Renaissance Academy. Our admissions officer will contact you on your registered phone number shortly.
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-emerald-300 text-emerald-900 hover:bg-emerald-100"
                      onClick={() => setSuccess(false)}
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6" noValidate>
                    {serverError && (
                      <div className="bg-rose-50 border border-rose-200 text-rose-800 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <Label htmlFor="parent_name">Parent/Guardian Name *</Label>
                        <Input 
                          id="parent_name" 
                          placeholder="Full Name" 
                          {...register('parent_name')}
                          className={errors.parent_name ? 'border-rose-400 focus:ring-rose-200' : ''}
                        />
                        {errors.parent_name && (
                          <p className="text-xs text-rose-600 font-medium">{errors.parent_name.message}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="student_name">Student Name *</Label>
                        <Input 
                          id="student_name" 
                          placeholder="Student's Full Name" 
                          {...register('student_name')}
                          className={errors.student_name ? 'border-rose-400 focus:ring-rose-200' : ''}
                        />
                        {errors.student_name && (
                          <p className="text-xs text-rose-600 font-medium">{errors.student_name.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <Input 
                          id="dob" 
                          type="date" 
                          {...register('dob')}
                          className={errors.dob ? 'border-rose-400 focus:ring-rose-200' : ''}
                        />
                        {errors.dob && (
                          <p className="text-xs text-rose-600 font-medium">{errors.dob.message}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="class_seeking">Class Seeking Admission *</Label>
                        <Input 
                          id="class_seeking" 
                          placeholder="e.g. Class V" 
                          {...register('class_seeking')}
                          className={errors.class_seeking ? 'border-rose-400 focus:ring-rose-200' : ''}
                        />
                        {errors.class_seeking && (
                          <p className="text-xs text-rose-600 font-medium">{errors.class_seeking.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+91 98388 63886" 
                          {...register('phone')}
                          className={errors.phone ? 'border-rose-400 focus:ring-rose-200' : ''}
                        />
                        {errors.phone && (
                          <p className="text-xs text-rose-600 font-medium">{errors.phone.message}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="email@example.com" 
                          {...register('email')}
                          className={errors.email ? 'border-rose-400 focus:ring-rose-200' : ''}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-600 font-medium">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="previous_school">Previous School (if any)</Label>
                      <Input 
                        id="previous_school" 
                        placeholder="Name of previous school attended" 
                        {...register('previous_school')}
                      />
                    </div>

                    <Button type="submit" variant="accent" className="w-full h-12 text-base font-bold shadow-md" disabled={loading}>
                      {loading ? 'Submitting Form...' : 'Submit Admission Enquiry'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Info & Photo */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
              <H2 className="text-xl text-brand-900 font-bold">Admission Information</H2>
              <Text className="text-sm text-neutral-600 leading-relaxed">
                We accept admission inquiries throughout the year subject to seat availability. Our admission process is transparent, straightforward, and parent-friendly.
              </Text>
              
              <div className="border-t border-neutral-100 pt-4 space-y-3">
                <div className="flex items-center text-xs text-neutral-700 font-semibold gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Classes Open: Nursery to Class XII (K-12 CBSE)</span>
                </div>
                <div className="flex items-center text-xs text-neutral-700 font-semibold gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Affiliation: CBSE Curriculum, New Delhi</span>
                </div>
                <div className="flex items-center text-xs text-neutral-700 font-semibold gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Campus Location: Baijnathpur, Balapar Road, Gorakhpur</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[240px] md:h-[280px] shadow-md rounded-2xl overflow-hidden group border border-neutral-200">
              <Image 
                src="/desk.jpeg"
                alt="Student Learning & Admission Helpdesk"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}
