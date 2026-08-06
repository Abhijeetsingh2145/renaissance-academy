import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

export default function Academics() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold mb-4">Academics</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-sm font-medium">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> <span className="mx-2">&raquo;</span> Academics
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
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Curriculum Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Renaissance Academy follows the comprehensive curriculum prescribed by the Central Board of Secondary Education (CBSE). Our academic framework is designed to provide a seamless progression of learning, ensuring that students develop a deep understanding of core concepts while exploring their individual interests.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-8">
              <h2 className="text-2xl font-serif font-bold text-primary border-b pb-4">Stage-Wise Learning</h2>
              
              <div className="bg-card shadow-sm border rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">Primary Education (Classes I - V)</h3>
                <p className="text-muted-foreground">The primary years focus on building a strong foundation in literacy, numeracy, and environmental awareness. We employ activity-based learning and interactive methods to keep young minds engaged and curious.</p>
              </div>

              <div className="bg-card shadow-sm border rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">Middle School (Classes VI - VIII)</h3>
                <p className="text-muted-foreground">In the middle years, students transition to more structured academic disciplines. We emphasize logical reasoning, scientific inquiry, and independent research skills. Projects and collaborative work form a significant part of the evaluation.</p>
              </div>

              <div className="bg-card shadow-sm border rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">Secondary & Senior Secondary (Classes IX - XII)</h3>
                <p className="text-muted-foreground">Our senior students undergo rigorous academic preparation for their board examinations. We offer specialized streams (Science, Commerce, Humanities) guided by expert faculty to prepare them for higher education and professional careers.</p>
              </div>
            </motion.div>
          </motion.div>
          
          <aside className="lg:col-span-1 space-y-8">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card shadow-md border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Academic Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors font-medium border-b border-border/50 pb-2">Academic Calendar</a></li>
                <li><a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors font-medium border-b border-border/50 pb-2">Syllabus & Curriculum</a></li>
                <li><a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors font-medium border-b border-border/50 pb-2">Book List & Stationery</a></li>
                <li><a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors font-medium">Examination Schedule</a></li>
              </ul>
            </motion.div>
          </aside>
        </div>
      </section>
    </div>
  );
}
