import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Check, 
  CheckCheck, 
  RotateCcw, 
  Sparkles, 
  Mic, 
  Phone, 
  Video, 
  MoreVertical, 
  Smile, 
  Paperclip, 
  Sprout, 
  CheckCircle2, 
  FileSpreadsheet
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/audioSimulation';

interface Scenario {
  id: string;
  label: string;
  audioDuration: number;
  producerText: string;
  audioSeconds: string;
  chicoResponse: {
    summary: string;
    details: { sacas?: string; cultura?: string; talhao?: string; item?: string; qtd?: string; local?: string };
  };
  successMessage: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'soja',
    label: '🌾 Colheita de Soja (Talhão Represa)',
    audioDuration: 8,
    audioSeconds: '0:08',
    producerText: '"Chico, fechou 140 saco no talhão da represa"',
    chicoResponse: {
      summary: 'Entendido! Registrado:',
      details: {
        sacas: '140 sacas',
        cultura: 'Soja',
        talhao: 'Talhão Represa'
      }
    },
    successMessage: 'Registro #842 gravado com sucesso! Relatório atualizado no painel da safra.'
  },
  {
    id: 'diesel',
    label: '🚜 Abastecimento (Trator 6110)',
    audioDuration: 6,
    audioSeconds: '0:06',
    producerText: '"Chico, trator JD 6110 pegou 180 litros de diesel agora"',
    chicoResponse: {
      summary: 'Anotado no custo operacional:',
      details: {
        item: 'Diesel S10',
        qtd: '180 Litros',
        talhao: 'Trator JD 6110'
      }
    },
    successMessage: 'Custo de maquinário registrado e vinculado à safra vigente!'
  },
  {
    id: 'chuva',
    label: '🌧️ Pluviômetro (Sede)',
    audioDuration: 5,
    audioSeconds: '0:05',
    producerText: '"Chico, deu 35 milímetros de chuva no pluviômetro da sede"',
    chicoResponse: {
      summary: 'Registro pluviométrico efetuado:',
      details: {
        item: 'Precipitação',
        qtd: '35 mm',
        talhao: 'Sede Principal'
      }
    },
    successMessage: 'Histórico climático atualizado com data e geolocalização!'
  }
];

export const WhatsAppMockup: React.FC = () => {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const scenario = SCENARIOS[activeScenarioIndex];

  // Simulation states
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(0); // 0 to 100
  const [elapsedTime, setElapsedTime] = useState('0:00');
  const [isTyping, setIsTyping] = useState(false);
  const [chicoReplied, setChicoReplied] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const timerRef = useRef<number | null>(null);

  // Reset state when switching scenario
  const handleSelectScenario = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveScenarioIndex(index);
    setIsPlaying(false);
    setPlaybackProgress(0);
    setElapsedTime('0:00');
    setIsTyping(false);
    setChicoReplied(false);
    setIsConfirmed(false);
    soundEffects.playPop();
  };

  const handlePlayAudio = () => {
    if (isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsPlaying(false);
      return;
    }

    soundEffects.playVoiceVoiceNoteEffect();
    setIsPlaying(true);
    let currentSeconds = 0;
    const duration = scenario.audioDuration;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      currentSeconds += 0.2;
      const progress = Math.min((currentSeconds / duration) * 100, 100);
      setPlaybackProgress(progress);
      
      const displaySec = Math.floor(currentSeconds);
      setElapsedTime(`0:0${Math.min(displaySec, duration)}`);

      if (currentSeconds >= duration) {
        if (timerRef.current) clearInterval(timerRef.current);
        setIsPlaying(false);
        setPlaybackProgress(100);
        
        // Chico begins typing after listening to the audio
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setChicoReplied(true);
          soundEffects.playPop();
        }, 1200);
      }
    }, 200);
  };

  const handleConfirmSave = () => {
    soundEffects.playSuccessChime();
    setIsConfirmed(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#1B4332', '#DDA15E', '#25D366', '#52B788']
    });
  };

  const handleReset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
    setPlaybackProgress(0);
    setElapsedTime('0:00');
    setIsTyping(false);
    setChicoReplied(false);
    setIsConfirmed(false);
    soundEffects.playPop();
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto" id="mockup-whatsapp">
      {/* Scenario Pill Selector */}
      <div className="mb-3 flex items-center justify-center gap-1.5 overflow-x-auto pb-1 px-1">
        {SCENARIOS.map((sc, idx) => (
          <button
            key={sc.id}
            onClick={() => handleSelectScenario(idx)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeScenarioIndex === idx
                ? 'bg-agro-forest text-wheat shadow-sm ring-1 ring-wheat/50 font-bold'
                : 'bg-white/80 text-agro-forest/80 hover:bg-white hover:text-agro-forest border border-agro-forest/15'
            }`}
          >
            {sc.label}
          </button>
        ))}
      </div>

      {/* Realistic Smartphone Frame */}
      <div className="relative rounded-[40px] p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-agro-elevated border-4 border-slate-700/80">
        
        {/* Subtle camera punch hole */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end pr-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800"></div>
        </div>

        {/* Inner Phone Screen */}
        <div className="rounded-[30px] overflow-hidden bg-whatsapp-chatBg border border-slate-600/40 flex flex-col h-[540px] select-none text-slate-800 relative">
          
          {/* Status Bar */}
          <div className="bg-whatsapp-dark text-white px-6 pt-3 pb-1 flex justify-between items-center text-[11px] font-semibold tracking-wider">
            <span>09:42</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px]">4G</span>
              <div className="flex gap-0.5 items-end h-2.5">
                <div className="w-0.5 h-1 bg-white"></div>
                <div className="w-0.5 h-1.5 bg-white"></div>
                <div className="w-0.5 h-2 bg-white"></div>
                <div className="w-0.5 h-2.5 bg-white"></div>
              </div>
              <div className="w-4 h-2 rounded-sm border border-white p-0.5 flex items-center">
                <div className="w-2.5 h-1 bg-white rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* WhatsApp Chat Header */}
          <div className="bg-whatsapp text-white px-3 py-2.5 flex items-center justify-between shadow-sm z-10">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-agro-forest flex items-center justify-center text-wheat font-bold text-sm border-2 border-white/20 shadow">
                  🌾
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-whatsapp-light ring-1 ring-white"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-tight flex items-center gap-1">
                  Anota Chico! 🚜
                </span>
                <span className="text-[11px] text-emerald-100 flex items-center gap-1">
                  {isTyping ? (
                    <span className="text-wheat-light font-semibold animate-pulse">digitando...</span>
                  ) : (
                    <>online • assistente de safra</>
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Video className="w-4 h-4" />
              <Phone className="w-4 h-4" />
              <MoreVertical className="w-4 h-4" />
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3.5 bg-whatsapp-chatBg bg-opacity-95 text-xs">
            
            {/* Timestamp Pill */}
            <div className="flex justify-center">
              <span className="bg-white/80 shadow-2xs backdrop-blur-2xs text-[10px] text-slate-600 px-2.5 py-0.5 rounded-md font-medium uppercase tracking-wider">
                Hoje • Talhão
              </span>
            </div>

            {/* Produtor Audio Bubble */}
            <div className="flex flex-col items-end animate-in fade-in duration-300">
              <div className="bg-whatsapp-outgoing rounded-2xl rounded-tr-xs p-3 shadow-2xs max-w-[85%] border border-emerald-200/40">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handlePlayAudio}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm ${
                      isPlaying
                        ? 'bg-agro-forest text-wheat scale-105'
                        : 'bg-whatsapp-dark text-white hover:bg-agro-forest'
                    }`}
                    aria-label={isPlaying ? "Pausar áudio" : "Tocar áudio do produtor"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <div className="flex-1">
                    {/* Simulated Waveform Bars */}
                    <div className="flex items-center gap-0.5 h-6">
                      {[14, 26, 18, 30, 22, 10, 28, 20, 16, 26, 12, 28, 16, 22, 14, 20].map((h, i) => {
                        const isBarActive = (i / 16) * 100 <= playbackProgress;
                        return (
                          <div
                            key={i}
                            style={{ height: `${h}px` }}
                            className={`w-1 rounded-full transition-all duration-150 ${
                              isBarActive 
                                ? 'bg-agro-forest' 
                                : 'bg-slate-400/60'
                            }`}
                          />
                        );
                      })}
                    </div>
                    
                    <div className="flex justify-between items-center text-[10px] text-slate-500 mt-1">
                      <span>{isPlaying ? elapsedTime : scenario.audioSeconds}</span>
                      <span className="flex items-center gap-1 font-semibold text-slate-600">
                        Seu Antônio (Produtor)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtitle / Transcription of audio */}
                <div className="mt-2 pt-2 border-t border-emerald-300/40 text-[11px] text-slate-700 italic flex items-center justify-between">
                  <span>{scenario.producerText}</span>
                  <CheckCheck className="w-3.5 h-3.5 text-blue-500 shrink-0 ml-1" />
                </div>
              </div>

              {!isPlaying && !chicoReplied && !isTyping && (
                <button
                  onClick={handlePlayAudio}
                  className="mt-1 text-[10px] text-agro-forest font-semibold flex items-center gap-1 hover:underline cursor-pointer bg-emerald-100/70 px-2 py-0.5 rounded-full"
                >
                  <Play className="w-2.5 h-2.5 fill-agro-forest" /> Clique para ouvir a simulação
                </button>
              )}
            </div>

            {/* Chico is typing bubble */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-2xl rounded-tl-xs shadow-2xs w-fit animate-pulse border border-slate-200">
                <span className="text-[11px] text-slate-500 font-medium">Chico processando áudio...</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-whatsapp-dark rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-whatsapp-dark rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-whatsapp-dark rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}

            {/* Chico Smart Response Bubble */}
            {chicoReplied && (
              <div className="flex flex-col items-start animate-in zoom-in-95 duration-200">
                <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-2xs max-w-[92%] border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-agro-forest font-bold text-[12px] pb-1.5 border-b border-slate-100">
                    <Sprout className="w-4 h-4 text-agro-forest" />
                    <span>{scenario.chicoResponse.summary}</span>
                  </div>

                  {/* Extracted harvest structured data */}
                  <div className="my-2 bg-emerald-50/70 p-2 rounded-lg border border-emerald-200/60 space-y-1">
                    {scenario.chicoResponse.details.sacas && (
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-600 font-medium">Quantidade:</span>
                        <span className="font-bold text-agro-forest">{scenario.chicoResponse.details.sacas}</span>
                      </div>
                    )}
                    {scenario.chicoResponse.details.cultura && (
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-600 font-medium">Cultura:</span>
                        <span className="font-bold text-slate-800">{scenario.chicoResponse.details.cultura}</span>
                      </div>
                    )}
                    {scenario.chicoResponse.details.talhao && (
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-600 font-medium">Localização:</span>
                        <span className="font-bold text-wheat-dark">{scenario.chicoResponse.details.talhao}</span>
                      </div>
                    )}
                    {scenario.chicoResponse.details.item && (
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-600 font-medium">Item:</span>
                        <span className="font-bold text-agro-forest">{scenario.chicoResponse.details.item}</span>
                      </div>
                    )}
                    {scenario.chicoResponse.details.qtd && (
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-600 font-medium">Volume:</span>
                        <span className="font-bold text-slate-800">{scenario.chicoResponse.details.qtd}</span>
                      </div>
                    )}
                  </div>

                  {/* Confirmation Query */}
                  {!isConfirmed ? (
                    <div>
                      <p className="text-[11px] text-slate-700 font-medium mb-2.5">
                        Confirma o lançamento para o relatório da safra?
                      </p>
                      
                      {/* Interactive Confirmation Action */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleConfirmSave}
                          className="flex-1 bg-agro-forest hover:bg-agro-primary active:scale-95 text-white font-bold py-2 px-3 rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer ring-2 ring-wheat/60 hover:ring-wheat"
                        >
                          <Check className="w-4 h-4 text-wheat" />
                          <span>Sim, Salvar</span>
                        </button>
                        <button
                          onClick={handleReset}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-600 py-2 px-2.5 rounded-xl text-[11px] font-semibold transition cursor-pointer"
                        >
                          Corrigir
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-emerald-100/90 text-agro-forest p-2.5 rounded-xl border border-emerald-300 text-[11px] space-y-1 animate-in fade-in">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>Confirmado e Gravado!</span>
                      </div>
                      <p className="text-[10px] text-slate-700">
                        {scenario.successMessage}
                      </p>
                      <div className="pt-1 flex items-center justify-between text-[9px] text-emerald-800/80 border-t border-emerald-200">
                        <span className="flex items-center gap-1">
                          <FileSpreadsheet className="w-3 h-3" /> Relatório pronto
                        </span>
                        <button
                          onClick={handleReset}
                          className="font-bold underline text-agro-forest hover:text-agro-primary cursor-pointer flex items-center gap-0.5"
                        >
                          <RotateCcw className="w-2.5 h-2.5" /> Replay
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="text-[9px] text-slate-400 text-right mt-1.5 flex justify-end items-center gap-1">
                    <span>09:42</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* WhatsApp Message Input Bar */}
          <div className="bg-[#f0f2f5] px-2.5 py-2 flex items-center gap-1.5 border-t border-slate-200">
            <Smile className="w-5 h-5 text-slate-500 cursor-pointer" />
            <Paperclip className="w-5 h-5 text-slate-500 cursor-pointer" />
            <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[11px] text-slate-400 border border-slate-200">
              {isConfirmed ? "Toque no microfone para nova anotação" : "Mensagem..."}
            </div>
            <button
              onClick={handlePlayAudio}
              className="w-8 h-8 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-white flex items-center justify-center transition cursor-pointer shadow"
              title="Gravar áudio"
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Home Indicator bar */}
        <div className="w-32 h-1 bg-slate-500/60 rounded-full mx-auto mt-2"></div>
      </div>

      {/* Interactive Helper Hint under Mockup */}
      <div className="mt-3 text-center">
        <p className="text-xs text-agro-forest/80 font-medium inline-flex items-center gap-1.5 bg-wheat/20 px-3 py-1 rounded-full border border-wheat/40">
          <Sparkles className="w-3.5 h-3.5 text-wheat-dark" />
          <span>Interativo: dê Play no áudio e clique em <b>[Sim, Salvar]</b></span>
        </p>
      </div>
    </div>
  );
};
