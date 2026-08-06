import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Briefcase, Send, Loader2 } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { supabase } from '../lib/supabase';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Please enter a valid 10-digit phone number.'),
  position: z.string().min(2, 'Please specify the position you are applying for.'),
  resumeLink: z.string().url('Please provide a valid URL to your resume.'),
  coverLetter: z.string().optional(),
});

export default function Careers() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      position: '',
      resumeLink: '',
      coverLetter: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      if (!supabase) {
        throw new Error("Database not connected. (Missing Supabase keys in environment)");
      }

      const { error } = await supabase
        .from('job_applications')
        .insert([
          { 
            full_name: data.fullName, 
            email: data.email, 
            phone: data.phone, 
            position: data.position,
            resume_link: data.resumeLink,
            cover_letter: data.coverLetter
          }
        ]);

      if (error) throw error;
      
      alert("Application submitted successfully!");
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error.message || "Failed to submit application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold mb-4">Careers</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-sm font-medium">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> <span className="mx-2">&raquo;</span> Careers
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Shape the Future with Us</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Renaissance Academy is always looking for passionate, dedicated, and innovative educators to join our team. We offer a vibrant, supportive, and dynamic work environment that encourages professional growth and creative teaching methodologies.
              </p>
              <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-xl border border-secondary/20 text-secondary-foreground">
                <Briefcase className="w-6 h-6 shrink-0" />
                <p className="font-medium text-sm">We are currently accepting applications for PGT/TGT positions in all major subjects.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-muted p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-primary mb-4">Why work with us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span className="text-secondary font-bold">•</span> <span className="text-muted-foreground">Competitive compensation package</span></li>
                <li className="flex items-start gap-2"><span className="text-secondary font-bold">•</span> <span className="text-muted-foreground">Continuous professional development</span></li>
                <li className="flex items-start gap-2"><span className="text-secondary font-bold">•</span> <span className="text-muted-foreground">State-of-the-art teaching facilities</span></li>
                <li className="flex items-start gap-2"><span className="text-secondary font-bold">•</span> <span className="text-muted-foreground">Collaborative and inclusive culture</span></li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-primary/10">
              <CardHeader className="bg-primary/5 pb-6 border-b border-primary/10">
                <CardTitle className="text-2xl font-serif font-bold text-primary">Submit Application</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="fullName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl><Input type="tel" placeholder="+91 XXXXXXXXXX" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="position" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position Applied For</FormLabel>
                        <FormControl><Input placeholder="e.g. TGT Mathematics" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="resumeLink" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resume Link (Google Drive / LinkedIn)</FormLabel>
                        <FormControl><Input type="url" placeholder="https://..." {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button type="submit" className="w-full mt-2" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application <Send className="w-4 h-4 ml-2" />
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
