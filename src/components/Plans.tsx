import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: "Plan Básico",
    subtitle: "One-Page",
    price: "499",
    delivery: "3-5 días",
    features: [
      "Diseño único y responsivo",
      "Integración con Google Analytics",
      "Optimización para móviles",
      "Formulario de contacto",
      "1 mes de soporte post-lanzamiento"
    ],
    highlight: false,
    tech: "HTML o React"
  },
  {
    name: "Plan Multi-Page",
    subtitle: "Sitio Completo",
    price: "999",
    delivery: "5-10 días",
    features: [
      "Hasta 5 páginas personalizadas",
      "Panel de administración",
      "SEO básico incluido",
      "Integración con redes sociales",
      "Blog administrable",
      "2 meses de soporte"
    ],
    highlight: true,
    tech: "React o WordPress"
  },
  {
    name: "Plan eCommerce",
    subtitle: "Tienda Online",
    price: "1499",
    delivery: "10-15 días",
    features: [
      "Catálogo de productos",
      "Pasarela de pagos integrada",
      "Panel de administración",
      "Gestión de inventario",
      "Capacitación incluida",
      "3 meses de soporte"
    ],
    highlight: false,
    tech: "PrestaShop o WooCommerce"
  },
  {
    name: "Plan Personalizado",
    subtitle: "Solución a Medida",
    price: "Consultar",
    delivery: "A definir",
    features: [
      "Análisis personalizado",
      "Desarrollo a medida",
      "Funcionalidades avanzadas",
      "Integraciones específicas",
      "Soporte premium",
      "Mantenimiento incluido"
    ],
    highlight: false,
    tech: "React, WordPress o PrestaShop"
  }
];

export function Plans() {
  return (
    <section 
    id="planes"
    className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Selecciona el plan que mejor se adapte a tus necesidades. Todos incluyen diseño profesional y soporte técnico.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 transform ${plan.highlight ? 'ring-2 ring-blue-500' : ''}`}
            >
              {plan.highlight && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                  Más Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 text-gray-800 dark:text-gray-100">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.subtitle}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {typeof plan.price === 'string' ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.price !== 'Consultar' && <span className="text-gray-600 dark:text-gray-400"> USD</span>}
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  Tiempo estimado: {plan.delivery}
                </div>
                
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Tecnologías: {plan.tech}
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  Solicitar Plan <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}