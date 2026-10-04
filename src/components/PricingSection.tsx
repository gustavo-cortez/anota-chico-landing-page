import React from 'react';
import { Check, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';

export const PricingSection: React.FC = () => {
  return (
    <section id="precos" className="py-20 bg-surface-offwhite relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agro-forest/10 text-agro-forest text-xs font-bold uppercase tracking-wider">
            Investimento Justo e Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-agro-forest tracking-tight">
            Planos desenhados para a realidade da sua fazenda
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Não cobramos por licença de software corporativo caro. Nossa mensalidade custa{' '}
            <strong className="text-agro-forest">menos que 1 a 2 sacas de grãos</strong> e evita milhares de reais em perdas de anotação.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SITE_CONFIG.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-white border-2 border-wheat shadow-agro-elevated md:-translate-y-2'
                  : 'bg-white/80 border border-agro-forest/15 shadow-agro-card hover:bg-white hover:border-agro-forest/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-wheat text-agro-dark text-xs font-extrabold uppercase px-4 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.badge || "Mais Escolhido"}</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="border-b border-slate-100 pb-5 mb-6">
                  <h3 className="text-xl font-extrabold text-agro-forest mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">{plan.idealFor}</p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-slate-500">R$</span>
                    <span className="text-4xl font-black text-agro-forest tracking-tight">{plan.price}</span>
                    <span className="text-sm font-semibold text-slate-500">/{plan.period}</span>
                  </div>

                  <div className="mt-3 inline-block bg-agro-forest/5 text-agro-forest text-xs font-bold px-3 py-1 rounded-lg">
                    {plan.users}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 text-sm">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-agro-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={getWhatsAppLink(`Olá Chico! Quero testar o ${plan.name} para a minha propriedade.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-agro-forest hover:bg-agro-primary text-wheat shadow-md hover:shadow-lg'
                      : 'bg-slate-100 hover:bg-agro-forest hover:text-white text-slate-800'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Pix ou Boleto Bancário • Sem multa de cancelamento
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Business comparison callout box */}
        <div className="mt-14 max-w-3xl mx-auto bg-wheat/15 border border-wheat/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-wheat flex items-center justify-center text-agro-dark shrink-0 font-bold text-xl">
            🌾
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-agro-forest text-sm sm:text-base">
              Conta de padaria que o produtor entende:
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Enquanto sistemas tradicionais chegam a custar mais de <strong>R$ 700 mensais</strong> com treinamento obrigatório de semanas, o Anota Chico custa a fração de 1 saca de soja e começa a rodar no mesmo minuto no WhatsApp.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
