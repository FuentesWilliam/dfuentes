import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Plans } from './components/Plans';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { WorkProcess } from './components/WorkProcess';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main className="pt-16">
          <Hero />
          <WorkProcess />
          <ValueProposition />
          <Plans />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;