import React from 'react';
import { Quote, Star, CheckCircle, MapPin, Tractor } from 'lucide-react';

export const TestimonialPersona: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-agro-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-surface-offwhite rounded-3xl p-8 sm:p-12 border border-agro-forest/15 shadow-agro-card relative overflow-hidden">
          
          <div className="absolute top-6 right-8 text-agro-forest/10 pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            {/* Persona Avatar / Badge */}
            <div className="flex flex-col items-center text-center shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-agro-forest flex items-center justify-center text-wheat font-bold text-3xl shadow-md border-4 border-wheat/30">
                👨‍🌾
              </div>
              <h4 className="font-extrabold text-base text-agro-forest mt-3">Antônio Carlos</h4>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-agro-primary" /> 54 anos • 48 hectares
              </p>
              <span className="mt-2 text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                Produtor de Soja e Milho
              </span>
            </div>

            {/* Testimonial Quote */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
                <span className="text-xs font-bold text-slate-600 ml-2">Validação de Campo • Pesquisa Fase 2</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-bold text-agro-forest leading-relaxed italic">
                “Eu já tentei colocar aqueles programas caros no computador aqui da fazenda. Em duas semanas larguei mão porque chegava cansado da lida e não ia ficar digitando planilha. Com o Anota Chico, eu mando o áudio de dentro da colheitadeira pelo zap e no fim do dia meu contador tá com o relatório pronto na mesa.”
              </blockquote>

              <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-semibold text-agro-forest">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Fim das anotações em papel molhado
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-agro-forest">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Zero treinamento necessário
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-agro-forest">
                  <Tractor className="w-4 h-4 text-wheat-dark" /> Funciona onde a internet oscila
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
