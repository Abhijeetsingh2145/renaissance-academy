import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, BookOpen, Monitor, FlaskConical, Trophy } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const locations = [
  { id: 'academic', name: 'Academic Block', icon: <BookOpen className="w-5 h-5" />, x: '40%', y: '30%', desc: 'State-of-the-art smart classrooms and administrative offices.' },
  { id: 'labs', name: 'Science & Tech Labs', icon: <FlaskConical className="w-5 h-5" />, x: '65%', y: '25%', desc: 'Fully equipped physics, chemistry, biology, and computer labs.' },
  { id: 'sports', name: 'Sports Complex', icon: <Trophy className="w-5 h-5" />, x: '30%', y: '60%', desc: 'Expansive playgrounds, basketball courts, and indoor sports arena.' },
  { id: 'library', name: 'Central Library', icon: <Monitor className="w-5 h-5" />, x: '60%', y: '50%', desc: 'A vast collection of books, journals, and digital resources.' }
];

export function InteractiveCampusMap() {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif text-primary font-bold mb-4">Interactive Campus Map</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our expansive, modern campus designed to foster academic excellence and holistic development.
        </p>
      </div>
      
      <div className="relative w-full max-w-4xl mx-auto aspect-video bg-muted rounded-2xl overflow-hidden shadow-sm border">
        {/* Actual map graphic */}
        <div className="absolute inset-0">
          <img src="https://renaissanceacademy.org.in/assets/images/video-tour.jpg" alt="Campus Map Background" className="w-full h-full object-cover opacity-50 dark:opacity-40" />
        </div>
        
        {locations.map((loc) => (
          <motion.div
            key={loc.id}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: loc.x, top: loc.y }}
            whileHover={{ scale: 1.1 }}
          >
            <button
              onClick={() => setActiveLocation(loc.id === activeLocation?.id ? null : loc)}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors ${
                activeLocation?.id === loc.id ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'
              }`}
            >
              {loc.icon}
            </button>
          </motion.div>
        ))}

        <AnimatePresence>
          {activeLocation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-20"
            >
              <Card className="shadow-lg border-primary/20">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                    {activeLocation.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{activeLocation.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{activeLocation.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
