import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

const timelineData = [
  { year: '2014', title: 'Foundation', desc: 'Renaissance Academy was established with a vision to provide quality education.' },
  { year: '2016', title: 'CBSE Affiliation', desc: 'Achieved official CBSE affiliation up to the secondary level.' },
  { year: '2018', title: 'Senior Secondary Expansion', desc: 'Upgraded to Senior Secondary level, adding Science and Commerce streams.' },
  { year: '2021', title: 'Infrastructure Upgrade', desc: 'Inaugurated the new smart campus with advanced labs and digital classrooms.' },
  { year: '2024', title: 'Decade of Excellence', desc: 'Celebrated 10 years of empowering students and achieving 100% board results.' },
];

export function AnimatedTimeline() {
  return (
    <div className="py-12 w-full max-w-4xl mx-auto px-4 md:px-0">
      <h2 className="text-3xl font-serif text-primary font-bold mb-16 text-center">Our Journey</h2>
      
      <div className="relative">
        {/* The center line */}
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 md:-translate-x-1/2"></div>
        
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-center mb-12 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              {/* Timeline marker */}
              <div className="absolute left-[24px] md:left-1/2 w-5 h-5 bg-secondary rounded-full border-4 border-background transform -translate-x-1/2 z-10" />
              
              {/* Desktop Empty Spacer */}
              <div className="hidden md:block md:w-1/2"></div>
              
              {/* Content Card */}
              <div className={`w-full pl-[56px] md:pl-0 md:w-1/2 flex ${isEven ? 'md:pr-12 md:justify-end' : 'md:pl-12 md:justify-start'}`}>
                <div className={`bg-card shadow-sm border rounded-2xl p-6 hover:shadow-md transition-shadow w-full md:max-w-md ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                  <span className="text-sm font-bold text-secondary mb-1 block">{item.year}</span>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
