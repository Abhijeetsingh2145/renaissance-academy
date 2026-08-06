import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Tag, ChevronRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/animations';
import noticesData from '../data/noticesData.json';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function ParentsStudents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(noticesData.map(n => n.category))];

  const filteredNotices = noticesData.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold mb-4">Notice Board</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-sm font-medium">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> <span className="mx-2">&raquo;</span> Parents & Students
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar with Search and Filters */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-card shadow-sm border rounded-2xl p-6 sticky top-32">
              <h3 className="text-lg font-bold text-primary mb-4">Search Notices</h3>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  type="text" 
                  placeholder="Type to search..." 
                  className="pl-9 bg-background"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <h3 className="text-lg font-bold text-primary mb-4 border-t pt-6">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <Badge 
                    key={cat} 
                    variant={selectedCategory === cat ? 'default' : 'secondary'}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>

          {/* Notices Feed */}
          <motion.div 
            className="lg:col-span-3 space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence mode="popLayout">
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice) => (
                  <motion.div 
                    key={notice.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="hover:shadow-md transition-shadow border-border/60">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">{notice.category}</Badge>
                          <span className="flex items-center text-xs text-muted-foreground"><Calendar className="w-3 h-3 mr-1" /> {notice.date}</span>
                        </div>
                        <CardTitle className="text-xl text-primary">{notice.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{notice.content}</p>
                        <Button variant="link" className="px-0 mt-4 h-auto text-secondary font-semibold group">
                          Read Full Notice <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center py-20 bg-muted/50 rounded-2xl border border-dashed"
                >
                  <Tag className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-muted-foreground">No notices found.</h3>
                  <p className="text-sm text-muted-foreground mt-2">Try adjusting your search terms or filters.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
