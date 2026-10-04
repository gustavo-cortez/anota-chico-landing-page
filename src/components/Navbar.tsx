import React, { useState } from 'react';
import { Sprout, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../config/site';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface-offwhite/90 backdrop-blur-md border-b border-agro-forest/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-agro-forest flex items-center justify-center text-wheat shadow-md group-hover:scale-105 transition-transform duration-200">
              <Sprout className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-agro-forest group-hover:text-agro-primary transition-colors flex items-center gap-1.5">
                Anota Chico!
                <span className="inline-block w-2 h-2 rounded-full bg-wheat animate-pulse"></span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-agro-forest/60 -mt-1">
                Colheita no WhatsApp
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-semibold text-agro-forest/80 hover:text-agro-forest transition-colors">
              Início
            </a>
            <a href="#como-funciona" className="text-sm font-semibold text-agro-forest/80 hover:text-agro-forest transition-colors">
              Como Funciona
            </a>
            <a href="#mockup-whatsapp" className="text-sm font-semibold text-agro-forest/80 hover:text-agro-forest transition-colors">
              Simulador
            </a>
            <a href="#precos" className="text-sm font-semibold text-agro-forest/80 hover:text-agro-forest transition-colors">
              Preços
            </a>
            <button
              onClick={onOpenDemo}
              className="text-sm font-semibold text-wheat-dark hover:text-wheat transition-colors cursor-pointer flex items-center gap-1"
            >
              Demonstração
              <span className="text-xs bg-wheat/20 text-wheat-dark px-1.5 py-0.5 rounded font-bold">1 min</span>
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-agro-forest hover:bg-agro-primary text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-wheat" />
              <span>Testar Grátis</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-agro-forest hover:bg-agro-forest/5 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-agro-forest/10 bg-surface-offwhite px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-agro-forest hover:bg-agro-forest/5"
          >
            Início
          </a>
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-agro-forest hover:bg-agro-forest/5"
          >
            Como Funciona
          </a>
          <a
            href="#mockup-whatsapp"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-agro-forest hover:bg-agro-forest/5"
          >
            Simulador de Áudio
          </a>
          <a
            href="#precos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-agro-forest hover:bg-agro-forest/5"
          >
            Preços
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo();
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-wheat-dark hover:bg-wheat/10 flex items-center justify-between"
          >
            <span>Ver Demonstração de 1 Minuto</span>
            <span className="text-xs bg-wheat/20 px-2 py-0.5 rounded font-bold">1 min</span>
          </button>
          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-agro-forest text-white py-3 rounded-xl font-bold shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-wheat" />
              <span>Testar 7 Dias Grátis no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
