import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

export default function StudentLife() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold mb-4">Student Life</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-sm font-medium">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> <span className="mx-2">&raquo;</span> Student Life
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Beyond the Classroom</motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            At Renaissance Academy, education extends far beyond textbooks. We believe in nurturing well-rounded individuals through a vibrant array of co-curricular activities, clubs, and events.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div 
            className="lg:col-span-2 space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Clubs & Societies</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">Students can explore their passions by joining various clubs, including the Eco Club, Science Innovators, Literary Society, and the Arts & Crafts Club. These platforms encourage leadership and teamwork.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Events & Celebrations</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">Our academic calendar is dotted with cultural events, annual sports days, science exhibitions, and national festivals. These celebrations foster a sense of community and cultural appreciation among students.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Photo Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Annual Sports Day', img: 'https://renaissanceacademy.org.in/images/1542786956.jpg' },
                  { title: 'Cultural Fest', img: 'https://renaissanceacademy.org.in/assets/images/gallery.jpg' },
                  { title: 'Campus Tour', img: 'https://renaissanceacademy.org.in/assets/images/video-tour.jpg' },
                  { title: 'School Building', img: 'https://renaissanceacademy.org.in/images/1542786956.jpg' }
                ].map((item, i) => (
                  <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                      <h3 className="text-white font-bold">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <aside className="lg:col-span-1 space-y-8">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card shadow-sm border rounded-2xl p-8 sticky top-32">
              <h3 className="text-xl font-bold text-primary mb-6">Upcoming Events</h3>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1 border-b border-border/50 pb-4">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">Oct 15, 2026</span>
                  <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">Annual Day Celebration</a>
                </li>
                <li className="flex flex-col gap-1 border-b border-border/50 pb-4">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">Nov 02, 2026</span>
                  <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">Inter-school Debate Competition</a>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">Nov 20, 2026</span>
                  <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">National Science Fair</a>
                </li>
              </ul>
            </motion.div>
          </aside>
        </div>
      </section>
    </div>
  );
}
