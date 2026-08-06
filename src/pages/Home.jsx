import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Award, BookOpen, Users, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { InteractiveCampusMap } from '../components/home/InteractiveCampusMap';
import { fadeUp, staggerContainer, fadeIn } from '../lib/animations';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <img src="/hero-image.jpg" alt="Renaissance Academy Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply"></div>
        </div>
        <motion.div 
          className="container relative z-10 max-w-4xl text-center flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-white/20 backdrop-blur-sm">
            CBSE Affiliated | Established 2014
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Welcome to Renaissance Academy
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering Minds, Shaping the Future. A premier co-educational English medium school in Gorakhpur.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Button asChild size="lg" className="rounded-full px-8 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base border-white/30 hover:bg-white/10 hover:text-white bg-transparent">
              <Link to="/about">Discover More</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Quick Highlights */}
      <section className="relative z-20 -mt-16 mb-24">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: BookOpen, title: "CBSE Curriculum", desc: "Comprehensive English-medium education focusing on all-round development." },
              { icon: Users, title: "Co-Educational", desc: "Fostering an inclusive environment where every child thrives and grows." },
              { icon: Award, title: "Excellence since 2014", desc: "A decade of outstanding academic and co-curricular achievements." },
              { icon: MapPin, title: "Prime Location", desc: "Located safely in Baijnathpur, Gorakhpur with easy transport access." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }}>
                <Card className="h-full border-none shadow-lg shadow-black/5 hover:shadow-xl transition-shadow text-center pt-6 bg-card">
                  <CardHeader>
                    <div className="mx-auto w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                      <item.icon size={28} />
                    </div>
                    <CardTitle className="text-xl text-primary font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. About Intro */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted border flex items-center justify-center"
            >
              <img src="https://renaissanceacademy.org.in/assets/images/gallery.jpg" alt="School Gallery" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeUp} className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">About Our School</motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">A Heritage of Modern Education & Strong Values</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Since our inception in 2014, Renaissance Academy has been committed to providing a holistic educational experience. We blend modern teaching methodologies with traditional values to prepare our students for global challenges.
              </motion.p>
              
              <motion.ul variants={fadeUp} className="flex flex-col gap-4 mb-8">
                {['Focus on experiential learning', 'Highly qualified faculty members', 'State-of-the-art learning environment'].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle className="text-secondary shrink-0" size={20} />
                    <span>{text}</span>
                  </li>
                ))}
              </motion.ul>
              
              <motion.div variants={fadeUp}>
                <Button variant="link" asChild className="p-0 text-primary font-semibold text-base hover:text-secondary h-auto">
                  <Link to="/about" className="flex items-center gap-1">Read our full story <ChevronRight size={18} /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Campus Map */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <InteractiveCampusMap />
        </div>
      </section>

      {/* 5. Academics Preview */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">Academics</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Nurturing Bright Minds</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
              Our curriculum is designed to foster curiosity, critical thinking, and a lifelong love for learning across all developmental stages.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { title: "Primary Education", desc: "Building strong foundations with interactive and engaging learning methods." },
              { title: "Middle School", desc: "Encouraging independent thought and deeper understanding of core subjects." },
              { title: "Senior Secondary", desc: "Comprehensive board preparation and career-oriented academic rigor." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                  <div className="h-48 bg-muted flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary">{item.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild className="rounded-full px-8">
              <Link to="/academics">Explore Curriculum</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Admissions CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Join the Renaissance Family</h2>
            <p className="text-lg text-primary-foreground/80">Admissions are now open for the upcoming academic session. Secure your child's future with quality education.</p>
          </div>
          <div className="flex flex-col items-center md:items-end shrink-0">
            <Button asChild size="lg" className="rounded-full px-10 py-6 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-xl">
              <Link to="/admissions">Start Application Process</Link>
            </Button>
            <p className="text-sm font-medium mt-3 opacity-80">Limited seats available.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
