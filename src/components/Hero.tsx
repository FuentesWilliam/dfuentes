import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-800 dark:from-blue-950 dark:to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Impulsa tu negocio con una página web profesional y funcional.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-blue-100">
            Desde sitios de una sola página hasta soluciones de comercio electrónico personalizadas: diseñamos la web que tu negocio necesita.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <button className="bg-white text-blue-900 dark:bg-blue-100 dark:text-blue-900 px-8 py-4 rounded-full 
              font-semibold text-lg flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-200 transition-colors">
              ¡Descubre nuestros planes! <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-blue-700 dark:bg-blue-800 text-white px-8 py-4 rounded-full 
              font-semibold text-lg flex items-center gap-2 hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors">
              Agenda una consulta gratuita <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}