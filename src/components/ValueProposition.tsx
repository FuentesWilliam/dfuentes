import React from 'react';
import { Code, Rocket, Palette } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Desarrollo Profesional",
    description: "Código limpio y optimizado para un rendimiento excepcional"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Rápido y Eficiente",
    description: "Entrega ágil sin comprometer la calidad"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Integración con herramientas",
    description: "Google Analytics map, SEO, redes sociales"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Diseño Personalizado",
    description: "Soluciones únicas adaptadas a tu marca"
  }
];

export function ValueProposition() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tu Éxito es Nuestra Prioridad</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ofrecemos soluciones adaptadas a tu negocio: diseño moderno, rapidez de carga y herramientas que facilitan la administración.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 
              hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-center">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full 
                text-blue-600 dark:text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}