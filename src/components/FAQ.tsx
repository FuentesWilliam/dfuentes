import React from 'react';

const faqs = [
  {
    question: "¿Cuánto tiempo toma el desarrollo?",
    answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Típicamente, un sitio web básico puede estar listo en 2-3 semanas, mientras que proyectos más complejos pueden tomar 4-8 semanas."
  },
  {
    question: "¿Qué información necesitas para empezar?",
    answer: "Necesitamos tu brief del proyecto, contenido (textos e imágenes), preferencias de diseño y cualquier referencia visual que tengas. Te guiaremos en el proceso."
  },
  {
    question: "¿Los precios incluyen mantenimiento?",
    answer: "Ofrecemos planes de mantenimiento opcionales que incluyen actualizaciones, respaldos y soporte técnico. El precio base incluye 1 mes de soporte post-lanzamiento."
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}