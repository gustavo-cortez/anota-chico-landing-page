import React, { useState } from 'react';
import { MessageSquare, Sparkles, X } from 'lucide-react';
import { getWhatsAppLink } from '../config/site';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      
      {/* Floating Prompt Bubble */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3.5 shadow-agro-elevated border border-emerald-100 max-w-xs text-xs animate-in slide-in-from-bottom-2 duration-300 relative group">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-[10px] cursor-pointer"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-start gap-2.5">
            <span className="text-xl">🌾</span>
            <div>
              <p className="font-bold text-agro-forest">Quer testar com seu próprio áudio?</p>
              <p className="text-slate-600 mt-0.5">Clique aqui e fale direto com o Chico pelo WhatsApp agora mesmo.</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none ring-4 ring-whatsapp/30"
        aria-label="Abrir conversa no WhatsApp com o Anota Chico"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wheat opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-wheat"></span>
        </span>

        <MessageSquare className="w-6 h-6 fill-white" />

        <span className="font-extrabold text-sm tracking-wide hidden sm:inline">
          Testar no WhatsApp
        </span>

        <Sparkles className="w-4 h-4 text-wheat animate-pulse hidden sm:inline" />
      </a>
    </div>
  );
};
