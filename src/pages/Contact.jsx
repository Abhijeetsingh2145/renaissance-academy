import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { supabase } from '../lib/supabase';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Please enter a valid 10-digit phone number.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      if (!supabase) {
        throw new Error("Database not connected. (Missing Supabase keys in environment)");
      }

      const { error } = await supabase
        .from('contact_inquiries')
        .insert([
          { 
            name: data.name, 
            email: data.email, 
            subject: data.subject, 
            message: `Phone: ${data.phone}\n\n${data.message}` 
          }
        ]);

      if (error) throw error;
      
      alert("Message sent successfully! We will get back to you soon.");
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error.message || "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-sm font-medium">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> <span className="mx-2">&raquo;</span> Contact
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Get in Touch</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We'd love to hear from you. Whether you have a question about admissions, academics, or anything else, our team is ready to answer all your questions.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6">
              <Card className="border-none shadow-md bg-card">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-bold text-primary mb-2">Visit Us</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Baijnathpur, Balapar Road,<br/>Landmark Omkar Ashram,<br/>Gorakhpur, Uttar Pradesh</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-card">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-bold text-primary mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-1">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43211</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-card">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-bold text-primary mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-1">info@renaissanceacademy.edu.in</p>
                  <p className="text-sm text-muted-foreground">admissions@renaissanceacademy.edu.in</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-card">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-bold text-primary mb-2">Working Hours</h3>
                  <p className="text-sm text-muted-foreground mb-1">Mon - Sat: 8:00 AM - 3:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-primary/10 h-full">
              <CardHeader className="bg-primary/5 pb-6 border-b border-primary/10">
                <CardTitle className="text-2xl font-serif font-bold text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Email</FormLabel>
                          <FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Phone</FormLabel>
                          <FormControl><Input type="tel" placeholder="+91 XXXXXXXXXX" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl><Input placeholder="How can we help?" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <textarea 
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Type your message here..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button type="submit" className="w-full mt-4" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
