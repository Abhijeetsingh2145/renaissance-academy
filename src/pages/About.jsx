import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';
import { AnimatedTimeline } from '../components/about/AnimatedTimeline';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-sm font-medium">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> <span className="mx-2">&raquo;</span> About Us
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
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Established in 2014, Renaissance Academy has emerged as a beacon of quality education in Gorakhpur. Located at Baijnathpur, Balapar Road, near the landmark Omkar Ashram, our institution was founded with a vision to nurture young minds into responsible, capable, and compassionate global citizens.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As a CBSE-affiliated, English-medium, co-educational school, we believe in providing a holistic learning environment. Our approach blends traditional academic rigor with modern, innovative teaching methodologies to ensure that every student reaches their full potential.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card shadow-sm border rounded-2xl p-8 border-l-4 border-l-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Our Vision</h4>
                <p className="text-muted-foreground">To create an educational ecosystem that fosters intellectual curiosity, emotional intelligence, and ethical leadership, empowering students to excel in a rapidly changing world.</p>
              </div>
              <div className="bg-card shadow-sm border rounded-2xl p-8 border-l-4 border-l-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Our Mission</h4>
                <p className="text-muted-foreground">To provide accessible, high-quality education through dedicated faculty, state-of-the-art infrastructure, and a curriculum that balances academic excellence with co-curricular prowess.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-muted rounded-2xl p-8 md:p-12 relative">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Principal's Message</h2>
              <blockquote className="text-lg italic text-foreground mb-6 leading-relaxed relative z-10">
                <span className="text-6xl text-primary/20 absolute -top-6 -left-4 -z-10 font-serif">"</span>
                At Renaissance Academy, we don't just teach; we inspire. Our dedicated educators work tirelessly to discover the unique talents within each child. We invite you to be a part of this transformative journey.
              </blockquote>
              <cite className="font-bold text-secondary-foreground block">- Principal, Renaissance Academy</cite>
            </motion.div>
          </motion.div>
          
          <aside className="lg:col-span-1 space-y-8">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card shadow-sm border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary border-b pb-4 mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-border/50 pb-2"><span className="text-muted-foreground">Established:</span> <span className="font-medium text-foreground">2014</span></li>
                <li className="flex justify-between border-b border-border/50 pb-2"><span className="text-muted-foreground">Affiliation:</span> <span className="font-medium text-foreground">CBSE</span></li>
                <li className="flex justify-between border-b border-border/50 pb-2"><span className="text-muted-foreground">Type:</span> <span className="font-medium text-foreground">Co-Educational</span></li>
                <li className="flex justify-between border-b border-border/50 pb-2"><span className="text-muted-foreground">Medium:</span> <span className="font-medium text-foreground">English</span></li>
                <li className="flex justify-between pb-2"><span className="text-muted-foreground">Location:</span> <span className="font-medium text-foreground">Gorakhpur</span></li>
              </ul>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* Animated Timeline Section */}
      <section className="py-20 bg-muted/30 border-t">
        <div className="container">
          <AnimatedTimeline />
        </div>
      </section>
    </div>
  );
}
