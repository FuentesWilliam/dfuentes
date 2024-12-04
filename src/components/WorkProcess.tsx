import React from 'react';
import { MessageSquare, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "1. Contacto Inicial",
    description: "Reunión para entender tus necesidades y objetivos del proyecto. Definimos alcance, funcionalidades y plazos.",
    color: "blue"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "2. Diseño y Prototipo",
    description: "Creamos mockups y prototipos interactivos para visualizar el resultado final antes del desarrollo.",
    color: "purple"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "3. Desarrollo y Pruebas",
    description: "Implementamos tu proyecto con las mejores prácticas y realizamos pruebas exhaustivas de calidad.",
    color: "green"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "4. Lanzamiento y Soporte",
    description: "Desplegamos tu sitio y te capacitamos en su uso. Brindamos soporte continuo post-lanzamiento.",
    color: "orange"
  }
];

export function WorkProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestro Proceso de Trabajo</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un enfoque estructurado y transparente para llevar tu proyecto al éxito
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full bg-${step.color}-100 flex items-center justify-center mb-4
                  text-${step.color}-600`}>
                  {step.icon}
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
                )}
                
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold
            hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            Comienza tu proyecto hoy <Rocket className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}