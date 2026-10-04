# Anota Chico! 🌾 — Landing Page Hero & Protótipo Interativo

> **Projeto de Empreendedorismo e Inovação — Fase 3 / Módulo 3 (Plano de Negócio)**  
> **Docente:** Tamires Sousa Araujo  
> **Integrantes da Equipe:**  
> - Gustavo Cortez De Paula  
> - João Victor Godoy De Souza  
> - Mayara Marques De Oliveira Gonçalves  
> - Ray Santiago Del Negro  

---

## 🚜 Sobre o Projeto

O **Anota Chico!** é um assistente inteligente de registro de colheita que funciona 100% dentro do **WhatsApp**. O produtor rural grava um áudio de 10 segundos diretamente da lavoura ou do trator, a inteligência artificial transcreve, separa as informações (cultura, quantidade de sacas, talhão e data) e devolve uma confirmação simples. Após o aceite com um toque no botão **[Sim, Salvar]**, o dado é gravado e relatórios consolidados em PDF e planilha ficam prontos para o banco, cooperativa ou contador.

Esta landing page foi construída especificamente com foco em **alta conversão para o público do agronegócio**, priorizando:
- Contraste visual sob sol intenso com fundo off-white (`#F8F9FA`).
- Paleta profissional verde floresta (`#1B4332`) e amarelo trigo dourado (`#DDA15E`).
- Copywriting emocional e direto abordando as dores reais do homem do campo (*"O Fim do Caderno Molhado na Lavoura"*).
- Quebra de objeções: funciona sem internet na lavoura (enfileiramento nativo do WhatsApp), sem senhas e sem download de aplicativos pesados.
- **Mockup Interativo do WhatsApp** com reprodução de áudio, ondas sonoras, status de digitação da IA, dados estruturados e botão clicável com feedback sonoro e comemoração visual de confirmação.

---

## 🛠️ Tecnologias Utilizadas

- **React 18** + **TypeScript**
- **Vite 8** (bundler ultra-rápido)
- **Tailwind CSS v3** (design system agro customizado)
- **Lucide React** (ícones consistentes e limpos)
- **Web Audio API** (efeitos sonoros nativos do WhatsApp e confirmação de safra)
- **Canvas Confetti** (celebração interativa ao confirmar o registro)

---

## 📁 Estrutura de Arquivos

```
Empreendedorismo/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Cabeçalho responsivo com logo e CTAs
│   │   ├── HeroSection.tsx        # Dobra principal (Hero) de alta conversão
│   │   ├── WhatsAppMockup.tsx     # Smartphone interativo com simulação de áudio e confirmação
│   │   ├── DemoModal.tsx          # Modal interativo de demonstração guiada de 1 minuto
│   │   ├── HowItWorks.tsx         # Seção "Como Funciona" detalhada em 4 etapas
│   │   ├── PricingSection.tsx     # Tabela com os 3 planos reais do Plano de Negócio
│   │   ├── TestimonialPersona.tsx # Prova social com a persona Antônio Carlos (54 anos, 50 ha)
│   │   ├── FloatingWhatsApp.tsx   # Botão fixo com link direto wa.me pré-preenchido
│   │   └── Footer.tsx             # Rodapé institucional, LGPD e créditos acadêmicos
│   ├── config/
│   │   └── site.ts                # Configuração centralizada (telefone do WhatsApp, textos, planos)
│   ├── utils/
│   │   └── audioSimulation.ts     # Síntese de áudio realista via Web Audio API
│   ├── App.tsx                    # Orquestrador da página
│   ├── main.tsx                   # Ponto de entrada React
│   └── index.css                  # Diretivas Tailwind e animações
├── tailwind.config.js             # Configuração da paleta de cores (agro, trigo, whatsapp)
├── vite.config.ts                 # Configuração do Vite + React
├── package.json                   # Dependências e scripts
└── README.md                      # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

No terminal do PowerShell, dentro desta pasta:

```powershell
# 1. Iniciar o servidor de desenvolvimento
npm run dev

# Acesse no navegador:
# http://localhost:5173/
```

Para gerar a versão otimizada de produção:

```powershell
# Compilar TypeScript e gerar pacote estático
npm run build

# Pré-visualizar a build de produção
npm run preview
```

---

## 📲 Como Configurar o Número do WhatsApp

Para apontar o link de conversão para o WhatsApp oficial de teste ou de demonstração da equipe, basta editar o arquivo [src/config/site.ts](file:///C:/Users/Gustavo%20Cortez/Documents/Faculdade/Empreendedorismo/src/config/site.ts):

```typescript
export const SITE_CONFIG = {
  name: "Anota Chico!",
  tagline: "O Fim do Caderno Molhado na Lavoura",
  whatsappNumber: "5511999999999", // <-- Substitua pelo seu DDD + número aqui
  defaultMessage: "Olá Chico! Quero ver como funciona a anotação de colheita na prática.",
  ...
}
```

---

## 💰 Planos Estruturados (Fase 3 — Plano de Negócio)

- **Plano Essencial:** R$ 189,90/mês (Até 3 usuários)
- **Plano Intermediário:** R$ 249,90/mês (Até 5 usuários — *Mais Escolhido*)
- **Plano Avançado:** R$ 329,90/mês (Até 7 usuários)
