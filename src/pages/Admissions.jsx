import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/animations';
import { FAQSection } from '../components/admissions/FAQSection';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

import { supabase } from '../lib/supabase';

// Add this above the component or inside it
export default function Admissions() {
  const [formData, setFormData] = React.useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([{
          name: formData.name,
          email: formData.email,
          subject: 'Admissions Inquiry',
          message: `Phone Number: ${formData.phone}`
        }]);

      if (error) throw error;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '' });
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { title: "Inquiry & Registration", desc: "Fill out the online inquiry form or visit the school campus to register your interest." },
    { title: "Assessment & Interaction", desc: "Depending on the grade applied for, students may be required to take a brief assessment." },
    { title: "Document Submission", desc: "Submit the required documents including birth certificate and previous school reports." },
    { title: "Fee Payment & Enrollment", desc: "Complete the enrollment process by paying the necessary admission fees." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold mb-4">Admissions</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-sm font-medium">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> <span className="mx-2">&raquo;</span> Admissions
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div 
            className="lg:col-span-2 space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Welcome to the Admissions Office</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Choosing the right school for your child is one of the most important decisions you will make. At Renaissance Academy, we are committed to making the admission process as smooth, transparent, and informative as possible.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-serif font-bold text-primary mb-8">Admission Process</h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <Card key={index} className="border-none shadow-sm bg-muted/50">
                    <CardContent className="p-6 flex gap-6 items-start">
                      <div className="shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold font-serif shadow-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-card shadow-sm border rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Eligibility & Required Documents</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {['Birth Certificate (Copy)', 'Transfer Certificate (Original)', 'Previous Report Card', 'Passport size photographs', 'Aadhar Card copy'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="text-primary shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          
          <aside className="lg:col-span-1 space-y-8">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card shadow-md border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-2">Apply Now</h3>
              <p className="text-sm text-muted-foreground mb-6">Submit your initial details and our admissions team will contact you shortly.</p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Parent's Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                  required 
                />
                <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
                {submitStatus === 'success' && <p className="text-green-600 text-sm mt-2 font-medium text-center">Inquiry submitted successfully!</p>}
                {submitStatus === 'error' && <p className="text-red-500 text-sm mt-2 text-center">Failed to submit. Please try again.</p>}
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-bold text-primary mb-6">Downloads</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <FileText size={20} className="text-secondary" />
                  <span className="font-medium">Admission Brochure</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <FileText size={20} className="text-secondary" />
                  <span className="font-medium">Fee Structure 2026-27</span>
                </a>
              </div>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30 border-t">
        <div className="container">
          <FAQSection />
        </div>
      </section>
    </div>
  );
}
