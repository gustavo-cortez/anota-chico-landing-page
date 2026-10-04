export const SITE_CONFIG = {
  name: "Anota Chico!",
  tagline: "O Fim do Caderno Molhado na Lavoura",
  whatsappNumber: "5511999999999", // Altere aqui para o número de WhatsApp oficial
  defaultMessage: "Olá Chico! Quero ver como funciona a anotação de colheita na prática.",
  demoVideoDuration: "1 minuto",
  
  // Equipe do Trabalho Acadêmico
  academicInfo: {
    course: "Empreendedorismo e Inovação",
    phase: "Fase 3 — Módulo 3 (Plano de Negócio)",
    professor: "Tamires Sousa Araujo",
    members: [
      "Gustavo Cortez De Paula",
      "João Victor Godoy De Souza",
      "Mayara Marques De Oliveira Gonçalves",
      "Ray Santiago Del Negro"
    ]
  },

  // Planos extraídos diretamente da Seção 1 e Seção 4 do Plano de Negócio
  plans: [
    {
      id: "essencial",
      name: "Plano Essencial",
      price: "189,90",
      period: "mês",
      users: "Até 3 usuários",
      idealFor: "Pequenas propriedades e lavouras familiares",
      features: [
        "Registro ilimitado de colheita por áudio ou texto",
        "Até 3 pessoas na equipe (campo e sede)",
        "Transcrições com IA inteligente no WhatsApp",
        "Relatórios semanais de fechamento por talhão",
        "Exportação para PDF e planilha",
        "Suporte humanizado no WhatsApp"
      ],
      popular: false,
      ctaText: "Testar Essencial Grátis"
    },
    {
      id: "intermediario",
      name: "Plano Intermediário",
      price: "249,90",
      period: "mês",
      users: "Até 5 usuários",
      idealFor: "Propriedades de 50 a 150 hectares com operadores",
      features: [
        "Tudo do Plano Essencial",
        "Até 5 usuários ativos no mesmo número",
        "Relatórios automáticos para cooperativa e banco",
        "Rateio por operador de colheitadeira/trator",
        "Alertas de divergência de carga",
        "Onboarding assistido por especialista"
      ],
      popular: true,
      badge: "Mais Escolhido pelo Produtor",
      ctaText: "Testar 7 Dias Sem Compromisso"
    },
    {
      id: "avancado",
      name: "Plano Avançado",
      price: "329,90",
      period: "mês",
      users: "Até 7 usuários",
      idealFor: "Médias propriedades ou múltiplos polos de plantio",
      features: [
        "Tudo do Plano Intermediário",
        "Até 7 operadores e gestores",
        "Múltiplas safras simultâneas (Soja, Milho, Trigo)",
        "Envio direto ao e-mail do seu contador/agrônomo",
        "Prioridade máxima no atendimento",
        "Treinamento direto para a equipe de campo"
      ],
      popular: false,
      ctaText: "Falar com Consultor Chico"
    }
  ]
};

/**
 * Gera o link direto oficial para o WhatsApp com mensagem codificada para URL
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || SITE_CONFIG.defaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
}
