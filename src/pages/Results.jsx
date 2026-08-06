import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Card, CardContent } from '../components/ui/card';

export default function Results() {
  const toppers = [
    { name: "Aarav Sharma", score: "98.2%", grade: "Class XII", stream: "Science" },
    { name: "Priya Singh", score: "97.8%", grade: "Class X", stream: "General" },
    { name: "Rohan Verma", score: "97.5%", grade: "Class XII", stream: "Commerce" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold mb-4">Results & Achievements</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-sm font-medium">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> <span className="mx-2">&raquo;</span> Results
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div 
            className="lg:col-span-2 space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">A Tradition of Excellence</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Renaissance Academy takes immense pride in the outstanding achievements of its students across academic and co-curricular domains. Our continuous focus on excellence is reflected in our board results year after year.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our students have consistently delivered 100% pass results in both Class X and Class XII CBSE examinations, with a significant number scoring above 90% aggregate.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-serif font-bold text-primary mb-8">Recent Board Toppers</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {toppers.map((topper, index) => (
                  <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow bg-card text-center pt-8">
                    <CardContent>
                      <div className="w-24 h-24 rounded-full bg-muted border-4 border-background shadow-inner mx-auto mb-4 overflow-hidden relative">
                         <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-xs">Photo</div>
                      </div>
                      <h4 className="text-lg font-bold text-primary">{topper.name}</h4>
                      <p className="text-sm font-medium text-muted-foreground mb-1">{topper.grade} {topper.stream !== 'General' ? `- ${topper.stream}` : ''}</p>
                      <div className="inline-block mt-2 px-3 py-1 bg-secondary/10 text-secondary-foreground font-bold rounded-full">{topper.score}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-muted rounded-2xl p-8 border">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Co-Curricular Achievements</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Beyond academics, our students have represented the school and won accolades at state and national level sports tournaments, science Olympiads, and inter-school cultural festivals. We believe true education encompasses the holistic development of every child.
              </p>
            </motion.div>
          </motion.div>
          
          <aside className="lg:col-span-1 space-y-8">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card shadow-sm border rounded-2xl p-8 sticky top-32">
              <h3 className="text-xl font-bold text-primary mb-6">School Recognition</h3>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1 border-b border-border/50 pb-4">
                  <span className="font-medium text-foreground">Best Emerging School Award</span>
                  <span className="text-sm text-muted-foreground">Education Excellence Awards, 2023</span>
                </li>
                <li className="flex flex-col gap-1 border-b border-border/50 pb-4">
                  <span className="font-medium text-foreground">Excellence in Sports</span>
                  <span className="text-sm text-muted-foreground">District Level Championship, 2024</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="font-medium text-foreground">Eco-Friendly Campus Initiative</span>
                  <span className="text-sm text-muted-foreground">Green School Program, 2025</span>
                </li>
              </ul>
            </motion.div>
          </aside>
        </div>
      </section>
    </div>
  );
}
