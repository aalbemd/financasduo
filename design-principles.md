# 🎨 FinançasDuo Pro — Design Principles

> Documento canônico da identidade visual e princípios de design do FinançasDuo Pro.
> **Toda nova tela, componente ou refinamento DEVE respeitar este documento.**
>
> Versão: 1.0 · Última atualização: 30/04/2026

---

## 1. 🎯 Filosofia de produto

O FinançasDuo Pro é uma plataforma de **finanças relacionais** — não é um app frio de transações. É o lugar onde **vocês dois** (ou três, ou uma família inteira) constroem uma vida financeira juntos, com clareza, intimidade e confiança.

### 1.1 Tom de voz

Acolhedor, íntimo, presente. Falamos como quem está sentado ao lado, não como um banco distante.

**Sempre usamos:**
- "vocês dois", "nós", "nossa casa", "nossos sonhos"
- "vamos cuidar disso juntos"
- "como vocês estão hoje?"

**Nunca usamos:**
- "usuário", "cliente", "conta corrente"
- "transação processada com sucesso"
- "saldo disponível para débito"
- Jargão financeiro frio ou bancário corporativo

### 1.2 Públicos atendidos

A plataforma serve **8 tipos de grupos relacionais** e **6 perfis universais**:

**Grupos:** casais, mãe/filho, amigos, sócios, grupos de viagem, cuidando de pais, pais e filhos adultos, customizados.

**Perfis:** Solo, Casal, Família com Filhos, Família Estendida, MEI/Freelancer, Pai/Mãe Solo.

A linguagem visual e textual deve ser **inclusiva** o suficiente para servir a todos esses contextos sem favorecer apenas casais.

---

## 2. 🌿 Paleta de cores

A paleta é **terrosa, quente e analógica** — inspirada em papel cremoso, tinta natural, cerâmica artesanal e plantas de jardim. Nunca digital, nunca neon, nunca corporativa.

### 2.1 Cores base (cremes e tintas)

| Token | Hex | Uso |
|---|---|---|
| `--cream` | `#f6f1e8` | Background principal — cor de papel cremoso |
| `--cream-soft` | `#faf5ec` | Background mais claro, hover suave |
| `--cream-deep` | `#ede5d4` | Background mais profundo, divisões sutis |
| `--paper` | `#fffdf8` | Branco-quente para cartões e modais |
| `--ink` | `#2a2420` | Texto principal — tinta marrom-escura, **nunca preto puro** |
| `--ink-soft` | `#4a3f37` | Texto secundário |
| `--ink-mute` | `#7a6d63` | Texto terciário, legendas |
| `--ink-whisper` | `#b5a89b` | Texto fantasma, placeholders |

### 2.2 Acentos (terracota, sálvia, mostarda)

| Token | Hex | Uso semântico |
|---|---|---|
| `--terracotta` | `#c67b5c` | **Ações primárias**, CTAs, links, destaques afetivos |
| `--terracotta-deep` | `#a55f42` | Hover/pressed do terracota |
| `--terracotta-soft` | `#e5b8a4` | Backgrounds de destaque, seleção |
| `--sage` | `#6b8e6f` | **Sucesso, crescimento, sustentabilidade financeira** |
| `--sage-deep` | `#4e6f54` | Hover/pressed do sage |
| `--sage-soft` | `#b8cfbb` | Backgrounds positivos, badges de progresso |
| `--mustard` | `#c89b3f` | **Atenção, alerta suave, marcos importantes** |
| `--mustard-deep` | `#9e7525` | Hover/pressed do mustard |
| `--mustard-soft` | `#e8d4a0` | Backgrounds de aviso |

### 2.3 ❌ Cores PROIBIDAS

- **Roxo / violeta** (qualquer tom) — vibe "AI startup genérica"
- **Gradientes neon** (rosa → azul, verde → ciano)
- **Preto puro** (`#000`) — usar `--ink` no lugar
- **Branco puro** (`#fff`) para fundos grandes — usar `--cream` ou `--paper`
- **Vermelhos saturados** para erros — usar `--terracotta-deep` em contexto

---

## 3. ✍️ Tipografia

Duas famílias, escolhidas com propósito:

### 3.1 Fraunces (Display)

- **Uso:** títulos, headlines, números grandes (KPIs), citações
- **Pesos:** 300, 400, 500
- **Itálico:** sim — usar com expressividade em palavras-chave ("vocês *dois*", "*nossa* casa")
- **Optical sizing:** habilitado (Fraunces tem variação ótica natural)
- **Caráter:** humanista, levemente serifada, acolhedora

### 3.2 Manrope (Body)

- **Uso:** corpo de texto, formulários, navegação, dados tabulares
- **Pesos:** 400, 500, 600, 700
- **Feature obrigatória:** `font-feature-settings: 'tnum' 1` (números tabulares)
- **Por que Manrope (e não Inter):** Manrope tem suporte nativo a números tabulares, crítico para alinhamento de valores financeiros em colunas

### 3.3 ❌ Fontes PROIBIDAS

- **Inter** — visual frio, ubíquo em produtos genéricos
- **Roboto, Open Sans, Lato** — sem caráter próprio
- Qualquer **serifa pesada tradicional** (Times, Georgia)
- Qualquer **monospace** fora de blocos de código

### 3.4 Escala tipográfica

| Token | Tamanho | Uso |
|---|---|---|
| `text-xs` | 0.75rem (12px) | Legendas, metadados |
| `text-sm` | 0.875rem (14px) | Texto secundário |
| `text-base` | 1rem (16px) | Corpo padrão |
| `text-lg` | 1.125rem (18px) | Texto destacado |
| `text-xl` | 1.5rem (24px) | Subtítulos |
| `text-2xl` | 2rem (32px) | Títulos de seção |
| `text-3xl` | 2.75rem (44px) | Títulos de página (Fraunces) |
| `text-hero` | 4rem (64px) | Hero (Fraunces 300, itálico) |

---

## 4. 📐 Forma e espaço

### 4.1 Border radius

A plataforma é **suave, orgânica, jamais quadrada**.

| Token | Valor | Uso |
|---|---|---|
| `--r-sm` | 14px | Inputs pequenos, badges |
| `--r-md` | 20px | Botões, inputs padrão |
| `--r-lg` | 24px | Cartões |
| `--r-xl` | 28px | Cartões hero, modais |
| `--r-hero` | 36px | Containers principais, dashboards |

❌ **PROIBIDO:** raios de 4px, 6px, 8px ou cantos retos. Mesmo em campos pequenos, mínimo 14px.

### 4.2 Sombras

Sombras **difusas, com tom de tinta**, jamais pretas duras.

```css
--shadow-sm: 0 2px 8px -2px rgba(42, 36, 32, 0.08);
--shadow-md: 0 8px 24px -6px rgba(42, 36, 32, 0.12);
--shadow-lg: 0 20px 48px -12px rgba(42, 36, 32, 0.16);
--shadow-soft: 0 4px 20px rgba(198, 123, 92, 0.08);  /* terracota suave */
```

❌ **PROIBIDO:** `box-shadow: 0 0 10px black` ou qualquer sombra com `rgba(0,0,0,*)`.

### 4.3 Espaçamento

Sistema baseado em múltiplos de 4px, com preferência por respirações generosas:

`4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px`

Cartões nunca colados — mínimo 24px entre eles. Containers sempre com padding interno mínimo de 24px.

---

## 5. 🌊 Movimento

Animações **orgânicas, lentas o suficiente para serem percebidas**, jamais robóticas.

```css
--ease-organic: cubic-bezier(0.25, 0.1, 0.25, 1);
--t-fast: 300ms var(--ease-organic);
--t-med: 400ms var(--ease-organic);
--t-slow: 500ms var(--ease-organic);
```

**Princípios:**
- Hover sempre com transição (mínimo 300ms)
- Aparição de elementos: fade + leve translateY (8–16px)
- Nada de bounces exagerados, nada de spin instantâneo
- Loading: pulsos suaves de opacidade, jamais spinners agressivos

❌ **PROIBIDO:** transições `linear`, durações abaixo de 200ms, animações de "shake" ou "bounce" agressivos.

---

## 6. 🗣️ Linguagem (microcopy)

### 6.1 Sempre relacional

| ❌ Frio | ✅ Relacional |
|---|---|
| "Bem-vindo, usuário" | "Olá! Que bom ter vocês aqui" |
| "Adicionar despesa" | "Registrar um gasto nosso" |
| "Saldo: R$ 1.250" | "Vocês têm R$ 1.250 disponíveis" |
| "Erro: campo obrigatório" | "Esse campo é importante para começar" |
| "Confirmar transação" | "Tudo certo? Vamos registrar" |
| "Logout" | "Até depois" |

### 6.2 Erros gentis

Erros **nunca culpam o usuário**. São convites a tentar de novo.

❌ "Senha inválida"
✅ "Hmm, essa senha não bateu. Vamos tentar de novo?"

### 6.3 Estados vazios acolhedores

Estados vazios **convidam à ação**, não dizem "Nenhum item encontrado".

❌ "Sem registros"
✅ "Vocês ainda não registraram nada por aqui — que tal começar pelo primeiro gasto da semana?"

---

## 7. 🧩 Padrões de componente

### 7.1 Botões

- **Primário:** background `--terracotta`, texto `--paper`, radius `--r-md`, padding `12px 24px`
- **Secundário:** background `--cream-deep`, texto `--ink`, radius `--r-md`
- **Ghost:** sem background, texto `--terracotta`, hover com background `--terracotta-soft`
- **Hover:** sempre com `transition: all var(--t-fast)`, `transform: translateY(-1px)`, sombra mais profunda

### 7.2 Inputs

- Background `--paper`, border `1px solid --cream-deep`
- Radius `--r-sm` (14px) ou `--r-md` (20px)
- Padding `14px 18px`
- Focus: border `--terracotta`, sombra `--shadow-soft`
- Placeholder em `--ink-whisper`

### 7.3 Cartões

- Background `--paper` ou `--cream-soft`
- Radius `--r-lg` (24px) padrão, `--r-xl` (28px) para destaque
- Sombra `--shadow-md` em repouso, `--shadow-lg` em hover
- Padding interno mínimo `24px`, ideal `32px`

### 7.4 Dados financeiros

- **Sempre** com `font-variant-numeric: tabular-nums`
- Valores positivos importantes em `--sage-deep`
- Valores negativos críticos em `--terracotta-deep` (nunca vermelho saturado)
- Moeda sempre formatada com `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`

---

## 8. ♿ Acessibilidade

- Contraste mínimo **AA** em todos os textos (verificar `--ink` sobre `--cream` = OK)
- `--ink-mute` sobre `--cream` deve ser usado **apenas para texto auxiliar**, nunca para informações críticas
- Focus visível **sempre** — nada de `outline: none` sem substituto
- Áreas clicáveis mínimo 44×44px em mobile
- Suporte a `prefers-reduced-motion` — desabilitar animações orgânicas se solicitado

---

## 9. 🌓 Dark mode (futuro — Fase 3)

Quando o dark mode for implementado:

- Background base: `#1a1612` (tinta profunda, jamais preto puro)
- Texto principal: `#ede5d4` (creme suave invertido)
- Acentos mantêm matiz, mas com saturação reduzida 10–15%
- Sombras ficam mais difusas, com leve blur de luz

**Não implementar dark mode antes da Fase 3.** Por enquanto, foco total no modo claro.

---

## 10. 🤖 Diretrizes para IA (Claude Design + Claude Code)

Quando um agente de IA gerar código ou design para este projeto:

1. **SEMPRE** consultar este arquivo antes de tomar decisões visuais
2. **NUNCA** introduzir cores, fontes ou raios fora dos tokens definidos aqui
3. **NUNCA** usar bibliotecas de UI que tragam estilos próprios fortes (Material UI, Chakra, Ant) — apenas Tailwind + tokens deste documento
4. Se houver dúvida entre duas opções, escolher a mais **acolhedora, orgânica e relacional**
5. Se algo precisar fugir destas regras, **pedir confirmação explícita ao Alexandre antes**

---

## 📚 Referências de inspiração

- **Editorial:** revistas como Cereal, Kinfolk (paleta terrosa, espaços generosos)
- **Produto:** Linear (mas em modo cremoso), Notion (em sua melhor forma calma)
- **Tipografia:** Fraunces como display moderna humanista (Google Fonts)
- **Filosofia:** "slow software" — pensado, não acelerado

---

*Este documento é vivo. Atualizações devem ser versionadas e justificadas.*
