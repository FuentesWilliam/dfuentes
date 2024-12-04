import React from 'react';
import { MessageSquare, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8" aria-hidden="true" />,
    title: '1. Contacto Inicial',
    description: 'Reunión para entender tus necesidades y objetivos del proyecto. Definimos alcance, funcionalidades y plazos.',
    color: 'bg-blue-100 text-blue-600 border-blue-600',
  },
  {
    icon: <Palette className="w-8 h-8" aria-hidden="true" />,
    title: '2. Diseño y Prototipo',
    description: 'Creamos mockups y prototipos interactivos para visualizar el resultado final antes del desarrollo.',
    color: 'bg-purple-100 text-purple-600 border-purple-600',
  },
  {
    icon: <Code className="w-8 h-8" aria-hidden="true" />,
    title: '3. Desarrollo y Pruebas',
    description: 'Implementamos tu proyecto con las mejores prácticas y realizamos pruebas exhaustivas de calidad.',
    color: 'bg-green-100 text-green-600 border-green-600',
  },
  {
    icon: <Rocket className="w-8 h-8" aria-hidden="true" />,
    title: '4. Lanzamiento y Soporte',
    description: 'Desplegamos tu sitio y te capacitamos en su uso. Brindamos soporte continuo post-lanzamiento.',
    color: 'bg-orange-100 text-orange-600 border-orange-600',
  },
];


export function WorkProcess() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un enfoque estructurado y transparente para llevar tu proyecto al éxito
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative text-center"
            >
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4 mx-auto border-2`}>
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            aria-label="Comienza tu proyecto hoy"
          >
            Comienza tu proyecto hoy <Rocket className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}