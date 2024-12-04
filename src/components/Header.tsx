import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import clsx from 'clsx'; // Instalar con `npm install clsx`

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false); // Cierra el menú en móviles al hacer clic
  };

  const NavLinks = () => (
    <nav className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
      {[
        { id: 'inicio', label: 'Inicio' },
        { id: 'servicios', label: 'Servicios' },
        { id: 'planes', label: 'Planes' },
        { id: 'contacto', label: 'Contacto' },
      ].map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={clsx(
            'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400',
            activeSection === link.id && 'font-bold text-blue-600 dark:text-blue-400'
          )}
          onClick={() => handleNavClick(link.id)}
          aria-current={activeSection === link.id ? 'page' : undefined}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            MiLogo
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            'md:hidden transition-all duration-300 overflow-hidden',
            isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
          )}
        >
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
