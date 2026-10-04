import React from 'react';
import { Sprout, ShieldCheck, Heart, MessageSquare } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-agro-forest text-white pt-16 pb-12 border-t-4 border-wheat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-wheat flex items-center justify-center text-agro-dark shadow">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-wheat">
                Anota Chico!
              </span>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              O assistente de registro de colheita no WhatsApp. O fim do caderno molhado, da perda de anotação e da dor de cabeça na hora de prestar contas.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-wheat hover:bg-wheat-dark text-agro-dark font-extrabold text-xs px-4 py-2.5 rounded-xl transition shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Testar 7 Dias Sem Compromisso</span>
              </a>
            </div>
          </div>

          {/* Academic Info & Credits */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-wheat">
              Projeto Acadêmico
            </h4>
            <div className="text-xs text-slate-300 space-y-1.5 bg-emerald-950/40 p-4 rounded-xl border border-emerald-800/40">
              <p>
                <strong>Disciplina:</strong> {SITE_CONFIG.academicInfo.course}
              </p>
              <p>
                <strong>Módulo:</strong> {SITE_CONFIG.academicInfo.phase}
              </p>
              <p>
                <strong>Docente:</strong> {SITE_CONFIG.academicInfo.professor}
              </p>
              <div className="pt-2 mt-2 border-t border-emerald-900/80">
                <p className="font-semibold text-wheat-light mb-1">Integrantes da Equipe:</p>
                <ul className="grid grid-cols-1 gap-1 text-[11px] text-slate-300">
                  {SITE_CONFIG.academicInfo.members.map((member, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-wheat"></span>
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Compliance & Security */}
          <div className="md:col-span-3 space-y-3 text-xs text-slate-300">
            <h4 className="text-sm font-bold uppercase tracking-wider text-wheat">
              Segurança & Privacidade
            </h4>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p>Em conformidade com a LGPD e criptografia de ponta a ponta na API Oficial do WhatsApp.</p>
            </div>
            <p className="text-slate-400 text-[11px]">
              Seus dados de colheita e produtividade pertencem 100% à sua propriedade rural.
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Anota Chico! — Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com carinho para o homem do campo <Heart className="w-3.5 h-3.5 text-wheat fill-wheat inline" />
          </p>
        </div>

      </div>
    </footer>
  );
};
