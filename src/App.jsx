import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ThemeProvider } from './components/ThemeProvider';
import SmoothScroll from './components/SmoothScroll';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Facilities from './pages/Facilities';
import StudentLife from './pages/StudentLife';
import Results from './pages/Results';
import ParentsStudents from './pages/ParentsStudents';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SmoothScroll>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="academics" element={<Academics />} />
              <Route path="admissions" element={<Admissions />} />
              <Route path="facilities" element={<Facilities />} />
              <Route path="student-life" element={<StudentLife />} />
              <Route path="results" element={<Results />} />
              <Route path="parents" element={<ParentsStudents />} />
              <Route path="careers" element={<Careers />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
