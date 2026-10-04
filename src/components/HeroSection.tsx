import React from 'react';
import { 
  CheckCircle, 
  MessageSquare, 
  PlayCircle, 
  ShieldCheck, 
  ArrowRight,
  FileCheck2,
  Users
} from 'lucide-react';
import { WhatsAppMockup } from './WhatsAppMockup';
import { getWhatsAppLink } from '../config/site';

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="hero" className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden">
      {/* Decorative rural gradient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-wheat/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-agro-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct and Emotional Copywriting */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agro-forest/10 border border-agro-forest/20 text-agro-forest">
              <span className="w-2 h-2 rounded-full bg-agro-forest animate-ping"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-agro-forest">
                O FIM DO CADERNO MOLHADO NA LAVOURA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-agro-forest leading-[1.12]">
              Chega de perder número em{' '}
              <span className="relative inline-block text-wheat-dark">
                papel molhado
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-wheat/30 rounded -z-10 transform -rotate-1"></span>
              </span>{' '}
              ou de cabeça.
            </h1>

            {/* Primary Value Proposition */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-bold text-slate-800 leading-snug">
                Sua colheita registrada por áudio no WhatsApp.{' '}
                <span className="text-agro-primary font-extrabold">Sem complicação. Sem aplicativo para baixar.</span>
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                O produtor manda um áudio de 10 segundos do campo e o <strong>Anota Chico</strong> organiza tudo em relatórios prontos para seu banco, cooperativa ou contador.
              </p>
            </div>

            {/* Conversion CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* WhatsApp Main Primary CTA Button */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-wheat hover:bg-wheat-dark text-agro-dark font-extrabold text-base sm:text-lg px-7 py-4 rounded-2xl shadow-cta-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="w-8 h-8 rounded-full bg-agro-forest flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-4 h-4 text-wheat" />
                </div>
                <span>Testar 7 Dias Grátis no WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* 1-Minute Demo Modal Trigger */}
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-agro-forest font-bold text-base px-6 py-4 rounded-2xl border-2 border-agro-forest/20 shadow-sm hover:border-agro-forest/40 transition-all cursor-pointer"
              >
                <PlayCircle className="w-5 h-5 text-wheat-dark" />
                <span>Ver Demonstração de 1 Minuto</span>
              </button>
            </div>

            {/* Agro Proof Checklist (Direct from specification) */}
            <div className="pt-4 space-y-2.5 border-t border-agro-forest/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-agro-primary shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-slate-700">
                  <span className="text-agro-forest font-bold">Funciona mesmo sem internet no talhão:</span>{' '}
                  o WhatsApp enfileira a gravação e envia sozinho assim que der sinal na estrada ou na sede.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-agro-primary shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-slate-700">
                  <span className="text-agro-forest font-bold">Não precisa de senha nem instalação:</span>{' '}
                  todo mundo da fazenda já sabe mandar áudio no zap. Zero barreira de adoção.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-agro-primary shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-slate-700">
                  <span className="text-agro-forest font-bold">Aceita o seu jeito de falar:</span>{' '}
                  entende gírias do campo, apelidos dos talhões (“pasto fundo”, “beira da represa”) e pesos locais.
                </p>
              </div>
            </div>

            {/* Social Trust Metrics Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Sem necessidade de cartão para testar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-agro-forest" />
                <span>Relatórios em PDF e Excel</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-wheat-dark" />
                <span>Feito para a rotina do produtor rural</span>
              </div>
            </div>

          </div>

          {/* Right Column: Smartphone Mockup Simulation */}
          <div className="lg:col-span-5 flex justify-center">
            <WhatsAppMockup />
          </div>

        </div>
      </div>
    </section>
  );
};
