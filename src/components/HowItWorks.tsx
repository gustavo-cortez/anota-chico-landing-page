import React from 'react';
import { Mic, Cpu, CheckSquare, FileText, WifiOff, Smartphone, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white border-y border-agro-forest/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wheat/20 text-wheat-dark text-xs font-bold uppercase tracking-wider">
            Passo a Passo Simples
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-agro-forest tracking-tight">
            Como o Anota Chico funciona na lida diária
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Desenhado para quem não tem tempo a perder na frente de tela de computador e vive com poeira ou chuva na roça.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="bg-surface-offwhite rounded-2xl p-6 border border-agro-forest/15 relative flex flex-col justify-between group hover:shadow-agro-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-agro-forest text-wheat font-bold flex items-center justify-center text-sm mb-4">
              01
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-agro-primary flex items-center justify-center mb-4">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-agro-forest mb-2">Mande um áudio</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Você ou seu operador apertam o microfone do WhatsApp e falam como já conversam: <em>"Chico, fechou mais 140 sacos no talhão da represa"</em>.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <WifiOff className="w-3.5 h-3.5" /> Enfileira sem internet
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-offwhite rounded-2xl p-6 border border-agro-forest/15 relative flex flex-col justify-between group hover:shadow-agro-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-agro-forest text-wheat font-bold flex items-center justify-center text-sm mb-4">
              02
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-wheat/20 text-wheat-dark flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-agro-forest mb-2">IA Especializada</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                O Chico transcreve a fala, identifica o dialeto regional da sua propriedade, separa a safra, o talhão e a quantidade colhida.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs font-semibold text-wheat-dark flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5" /> Em 3 segundos no zap
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-offwhite rounded-2xl p-6 border border-agro-forest/15 relative flex flex-col justify-between group hover:shadow-agro-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-agro-forest text-wheat font-bold flex items-center justify-center text-sm mb-4">
              03
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-agro-primary flex items-center justify-center mb-4">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-agro-forest mb-2">Você Valida com 1 Toque</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                O Chico envia o resumo conferido e você só clica em <strong>[Sim, Salvar]</strong>. A inteligência artificial propõe e o humano confirma.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% sob seu controle
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-surface-offwhite rounded-2xl p-6 border border-agro-forest/15 relative flex flex-col justify-between group hover:shadow-agro-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-agro-forest text-wheat font-bold flex items-center justify-center text-sm mb-4">
              04
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-agro-forest mb-2">Relatórios Prontos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Quando o banco, a cooperativa ou seu contador pedirem o fechamento, o PDF e o arquivo do Excel já estão compilados e prontos para enviar.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs font-semibold text-blue-800 flex items-center gap-1.5">
              📊 Gráficos por Talhão
            </div>
          </div>

        </div>

        {/* Highlight Banner: Por que funciona melhor que aplicativo comum */}
        <div className="mt-16 bg-agro-forest rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-agro-elevated">
          <div className="absolute top-0 right-0 w-80 h-80 bg-wheat/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-wheat">
                Vantagem Competitiva Real
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Por que o WhatsApp vence os softwares corporativos de R$ 500+?
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Softwares pesados foram feitos para empresas com escritório e internet de fibra dedicada. Na roça, o sinal oscila e o operador trabalha com luva e poeira. O WhatsApp funciona offline enfileirando mensagens, aceita áudio sem digitação e não requer login nem senha para esquecer.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-wheat">98%</span>
              <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                De facilidade relatada na pesquisa da Fase 2
              </p>
              <p className="text-xs text-slate-300">
                Todos os produtores entrevistados já tinham o WhatsApp instalado e ativo no bolso.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
