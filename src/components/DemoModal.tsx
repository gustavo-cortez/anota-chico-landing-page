import React, { useState } from 'react';
import { X, Mic, Cpu, FileSpreadsheet, Check, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
import { getWhatsAppLink } from '../config/site';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS = [
  {
    step: 1,
    title: "1. Você fala no WhatsApp como conversa com a família",
    description: "Sem aplicativo pesado, sem tela cheia de botões. Você está na lavoura, aperta o microfone do WhatsApp e fala natural: 'Chico, colhemos 140 sacos de soja no talhão represa'. Mesmo sem sinal de celular no ponto, o WhatsApp guarda e envia assim que tiver rede.",
    icon: Mic,
    badgeColor: "bg-emerald-100 text-emerald-800",
    visual: {
      type: "audio",
      quote: "Chico, fechou 140 saco no talhão da represa",
      time: "0:08",
      sender: "Produtor no Talhão"
    }
  },
  {
    step: 2,
    title: "2. O Chico transcreve, calcula e devolve para conferência",
    description: "Nossa IA no WhatsApp extrai automaticamente: data, operador, cultura, quantidade de sacas e talhão. O Chico devolve uma mensagem curta: 'Registrado: 140 sacas | Soja | Talhão Represa. Confirma?'. Nada vai pro sistema sem você apertar [Sim, Salvar]. A IA propõe, você valida.",
    icon: Cpu,
    badgeColor: "bg-wheat/20 text-wheat-dark",
    visual: {
      type: "confirmation",
      data: [
        { label: "Cultura", value: "Soja" },
        { label: "Quantidade", value: "140 sacas (8.400 kg)" },
        { label: "Local", value: "Talhão Represa" },
        { label: "Horário", value: "09:42" }
      ]
    }
  },
  {
    step: 3,
    title: "3. Relatórios prontos para seu Contador, Cooperativa ou Banco",
    description: "Chega de passar a noite somando canhoto ou descobrindo número rasurado. No fim do dia ou da quinzena, peça: 'Chico, me dá o fechamento da semana' e receba um PDF limpo e planilha do Excel já calculada por hectare.",
    icon: FileSpreadsheet,
    badgeColor: "bg-blue-100 text-blue-800",
    visual: {
      type: "report",
      title: "Fechamento Safra 2026/1",
      totalSacas: "4.280 sacas",
      mediaHectare: "68,2 sc/ha",
      destinatarios: "Cooperativa Coamo • Contador • Banco"
    }
  }
];

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  if (!isOpen) return null;

  const currentStep = STEPS[currentStepIndex];
  const StepIcon = currentStep.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-agro-forest/20 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-agro-forest px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-wheat flex items-center justify-center text-agro-forest font-bold">
              🌾
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Demonstração Rápida de 1 Minuto</h3>
              <p className="text-xs text-wheat-light">Como o Anota Chico funciona na prática da lavoura</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Navigation Pills */}
        <div className="flex border-b border-slate-100 bg-slate-50 px-6 py-3 gap-2">
          {STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setCurrentStepIndex(idx)}
              className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                currentStepIndex === idx
                  ? 'bg-agro-forest text-wheat shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200'
              }`}
            >
              <span>Passo {step.step}</span>
              {currentStepIndex > idx && <Check className="w-3.5 h-3.5 text-emerald-500" />}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${currentStep.badgeColor}`}>
              <StepIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-agro-forest">{currentStep.title}</h4>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{currentStep.description}</p>
            </div>
          </div>

          {/* Simulated Step Visualization Card */}
          <div className="bg-surface-offwhite rounded-2xl p-4 border border-agro-forest/15">
            {currentStep.visual.type === 'audio' && (
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-agro-forest text-wheat flex items-center justify-center">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 font-semibold">{currentStep.visual.sender}</p>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden mt-1.5">
                      <div className="h-full bg-agro-forest w-3/4 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{currentStep.visual.time}</span>
                </div>
                <p className="text-sm italic font-medium text-slate-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                  {currentStep.visual.quote}
                </p>
              </div>
            )}

            {currentStep.visual.type === 'confirmation' && currentStep.visual.data && (
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-agro-forest">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Extração Automática da IA do Chico</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {currentStep.visual.data.map((item, i) => (
                    <div key={i} className="bg-slate-50 p-2 rounded-lg border border-slate-200/70">
                      <span className="text-slate-500 block text-[10px] font-semibold">{item.label}</span>
                      <span className="font-bold text-slate-800 text-xs">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-agro-forest/10 text-agro-forest text-xs font-bold p-2 rounded-lg text-center">
                  Humano valida: [ Sim, Salvar ] garante 100% de precisão
                </div>
              </div>
            )}

            {currentStep.visual.type === 'report' && (
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold text-sm text-agro-forest">{currentStep.visual.title}</span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">PDF Gerado</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-emerald-50 p-2.5 rounded-lg">
                    <span className="text-slate-500 block text-[10px]">Total Colhido</span>
                    <span className="text-base font-extrabold text-agro-forest">{currentStep.visual.totalSacas}</span>
                  </div>
                  <div className="bg-wheat/10 p-2.5 rounded-lg">
                    <span className="text-slate-500 block text-[10px]">Produtividade Média</span>
                    <span className="text-base font-extrabold text-wheat-dark">{currentStep.visual.mediaHectare}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600">
                  <b>Destino:</b> {currentStep.visual.destinatarios}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {currentStepIndex > 0 && (
              <button
                onClick={() => setCurrentStepIndex((prev) => prev - 1)}
                className="px-3 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>
            )}
            {currentStepIndex < STEPS.length - 1 && (
              <button
                onClick={() => setCurrentStepIndex((prev) => prev + 1)}
                className="px-4 py-2 bg-agro-forest hover:bg-agro-primary text-white text-xs font-bold rounded-xl flex items-center gap-1 cursor-pointer"
              >
                Próximo Passo <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wheat hover:bg-wheat-dark text-agro-dark font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Testar no WhatsApp Agora</span>
          </a>
        </div>
      </div>
    </div>
  );
};
