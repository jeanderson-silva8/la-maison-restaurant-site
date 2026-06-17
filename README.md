# 🍽️ LA MAISON — Alta Gastronomia

> Site institucional premium para o Restaurante La Maison. Uma experiência digital cinematográfica com design refinado, scroll suave e animações de alta performance que transmitem o conceito e a exclusividade da culinária gourmet.

[![Acessar App](https://img.shields.io/badge/🌐_ACESSAR_APP-la--maison.vercel.app-9C8E7C?style=for-the-badge)](https://sitemd-sooty.vercel.app)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-Animation-green?style=for-the-badge&logo=greensock&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Core-purple?style=for-the-badge&logo=framer&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)

🟢 **LIVE DEMO:** [Acesse o Restaurante La Maison Ao Vivo Aqui](https://sitemd-sooty.vercel.app)

<div align="center">
  <div style="max-width: 800px; background-color: #161b22; border: 1px solid #30363d; border-bottom: none; border-top-left-radius: 8px; border-top-right-radius: 8px; padding: 10px; font-family: monospace; font-size: 13px; color: #8b949e; text-align: left;">
    🔴 &nbsp; 🟡 &nbsp; 🟢 &nbsp;&nbsp;&nbsp; <b>~/la-maison-restaurant-site</b>
  </div>
  <div style="max-width: 800px; border: 1px solid #30363d; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; overflow: hidden; line-height: 0;">
    <img src="assets/la-maison.gif" width="100%" height="auto" alt="La Maison Demo" />
  </div>
</div>

---

## 💻 Sobre o Projeto

A alta gastronomia é vendida pela atmosfera e pela experiência sensorial. O site do **La Maison** foi desenvolvido com uma abordagem cinematográfica: cada seção é revelada como uma cena e cada transição acompanha um ritmo elegante.

Utilizando **GSAP ScrollTrigger** e **Framer Motion**, o site proporciona scroll suave e coreografia de animações de ponta a ponta. O visual é enriquecido com um sutil efeito de granulado de filme (*film-grain*) e vinheta (*vignette*) para criar uma atmosfera de cinema de época, enquanto a tipografia refinada e imagens premium traduzem o valor do menu.

---

## ✨ Principais Funcionalidades

- 🎥 **Efeitos Cinematográficos** — Filtros de granulado de filme e vinheta dinâmicos que dão uma textura luxuosa à interface.
- ⚙️ **GSAP ScrollTrigger** — Timeline de animações controlada pelo scroll do usuário, com efeitos de paralaxe e revelação suave de pratos.
- 🛍️ **Carrinho e Reserva de Pratos** — Sistema de gerenciamento de pedidos (Cart Drawer) com estado controlado via **Zustand**.
- 📖 **Menu Interativo** — Exibição das criações exclusivas do chef categorizadas com imagens de altíssima definição.
- 📱 **Mobile First & Responsive** — Layout adaptável que garante o mesmo requinte visual em smartphones, tablets ou desktops.

---

## 🛠️ Stack Tecnológico

- **React 18** + **TypeScript**
- **Vite** — Build e dev server de alta performance
- **GSAP (GreenSock)** + **ScrollTrigger** — Core de animações e timelines baseadas em scroll
- **Framer Motion** — Micro-interações e animações de componentes
- **Zustand** — Gerenciamento de estado leve e rápido (carrinho de reservas)
- **TailwindCSS** — Estilização moderna com utilitários otimizados

---

## 🚀 Como Executar Localmente

### Requisitos
- Node.js 20+
- npm 10+

### Rodando

1. Instale todas as dependências do restaurante (incluindo GSAP, Framer Motion e Zustand):
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento Vite localmente:
   ```bash
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:5173` para visualização e desenvolvimento interativo.

### Build de Produção

Para compilar o código TypeScript e gerar os arquivos otimizados para deploy:

```bash
npm run build      # compila TypeScript e roda vite build
npm run preview    # visualiza localmente o build compilado
```
