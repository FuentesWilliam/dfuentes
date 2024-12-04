import React from 'react';
import { Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <a href="mailto:contacto@ejemplo.com" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                contacto@ejemplo.com
              </a>
              <a href="tel:+1234567890" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
                +123 456 7890
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}