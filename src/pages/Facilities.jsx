import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Monitor, FlaskConical, Trophy, Bus } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

export default function Facilities() {
  const facilities = [
    { icon: Monitor, title: "Smart Classrooms", desc: "Spacious, well-ventilated classrooms equipped with smart boards and digital learning tools to make education interactive." },
    { icon: FlaskConical, title: "Science Laboratories", desc: "Fully equipped Physics, Chemistry, and Biology labs that encourage hands-on experimentation and scientific inquiry." },
    { icon: Monitor, title: "Computer Lab", desc: "Modern computer labs with high-speed internet, ensuring students are proficient in essential digital skills." },
    { icon: BookOpen, title: "Library", desc: "A well-stocked library with a vast collection of books, periodicals, and digital resources to foster a love for reading." },
    { icon: Trophy, title: "Sports Infrastructure", desc: "Expansive playgrounds and courts for basketball, volleyball, badminton, and athletics to promote physical fitness." },
    { icon: Bus, title: "Transport", desc: "A fleet of safe, well-maintained buses covering major routes in and around Gorakhpur with trained staff." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Facilities</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-sm font-medium">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> <span className="mx-2">&raquo;</span> Facilities
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
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">A Campus Designed for Excellence</motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            We provide state-of-the-art infrastructure to ensure that every student has the resources they need to succeed academically, physically, and creatively.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {facilities.map((facility, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow bg-card">
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center mb-4">
                    <facility.icon size={28} />
                  </div>
                  <CardTitle className="text-xl text-primary font-bold">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{facility.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
