# 🎯 Briefing de Retomada — FinançasDuo Pro

> Cole este briefing ao iniciar uma nova conversa com o Claude. Anexe junto o `roadmap_v11.html`.

---

Olá! Meu nome é Alexandre e continuo construindo o **FinançasDuo Pro**.

**Stack:** Next.js 16 + Supabase (SP) + Vercel + Tailwind + Design System + Claude Design
📚 **Repo:** github.com/aalbemd/financasduo
🌐 **Site no ar:** https://financasduo.vercel.app
💻 **Projeto local:** `C:\PROJETOS CLAUDE CODE rodar\financasduo`
📄 **Roadmap atualizado:** Roadmap v11 (anexado) — Marco 0 do Design Track concluído

## 🎯 Visão do projeto

Plataforma de finanças **relacionais** — não é só para casais. Serve **8 tipos de grupos** (casais, mãe/filho, amigos, sócios, grupos de viagem, cuidando de pais, pais e filhos adultos, customizados) e **6 perfis universais** (Solo, Casal, Família com Filhos, Família Estendida, MEI/Freelancer, Pai/Mãe Solo).

## 🎨 Linguagem visual (canônica — não desviar)

- **Display:** Fraunces (300–500, itálicos expressivos)
- **Body:** Manrope (400–700, números tabulares — tnum)
- **Paleta:** creme `#f6f1e8`, tinta `#2a2420`, terracota `#c67b5c`, sálvia `#6b8e6f`, mostarda `#c89b3f`
- **Raios:** 14, 20, 24, 28, 36px
- **Sombras:** difusas com tom de tinta (nunca preto puro)
- **Movimento:** 300–500ms ease-out orgânico
- **Linguagem:** "vocês dois", "nossa casa", "nossos sonhos"
- **PROIBIDO:** Inter, roxo, gradientes neon, cantos 4px, sombras pretas duras, vocabulário frio

A constituição visual completa está em **`design-principles.md`** na raiz do repo (289 linhas, foi publicada no commit `513964f`).

## ✅ O que já está concluído

- ✅ **Fase 0:** Protótipo dos 14 módulos
- ✅ **Semana 1:** Setup Next.js + GitHub + Vercel
- ✅ **Semana 2:** Supabase (SP) + 8 tabelas + RLS
- ✅ **Semana 3:** Auth completa + Dashboard básico + Deploy
- ✅ **Semana 4 · Tarefa 1/9:** 🔐 Rotação chaves Supabase (sistema publishable/secret, sem prefixo `NEXT_PUBLIC_`)
- ✅ **Marco 0 do Design Track:** `design-principles.md` publicado no repo (commit `513964f`)

## 🎯 Próximo passo IMEDIATO (onde paramos)

**Marco 1.A do Design Track — Aplicar tokens no Next.js:**

1. ⏳ Instalar **Fraunces + Manrope via `next/font`** no `app/layout.tsx`
2. ⏳ Atualizar **`app/globals.css`** com TODAS as variáveis CSS do design system (cores, raios, sombras, transições)
3. ⏳ Verificar com `npm run dev` se as fontes estão carregando
4. ⏳ Commit + push

**Já começamos a Etapa A.1 (verificar layout.tsx)** mas precisamos retomar daí.

## 🗺️ Sequência das próximas tarefas (ordem da Semana 4)

1. **🎨 Marco 1.A:** next/font + globals.css ← **AQUI**
2. **✨ Onboarding Claude Design** (apontar para o repo, validar leitura do design-principles)
3. **✨ Tarefa 2/9:** Captura de nome (prototipar primeiro no Claude Design)
4. **✨ Tarefa 3/9:** Formulário de transação
5. **✨ Tarefa 4/9:** Listagem de transações
6. **✨ Tarefa 5/9:** KPIs reais no dashboard
7. **✨ Tarefa 6/9:** Realtime
8. **✨ Tarefa 7/9:** Mobile polish
9. **✨ Tarefa 8/9:** PWA
10. **✨ Tarefa 9/9:** Dark mode (preview)

## 🛠️ Configurações importantes

- **Email noreply do GitHub:** `268404324+aalbemd@users.noreply.github.com` (já configurado no projeto via `git config user.email`)
- **PowerShell Windows** — não Linux/bash. Caminhos com backslash. `mkdir` com aspas.

## 📝 Como prefiro trabalhar

Sou **iniciante**, trabalho no **Itaú**, sou assinante **Claude Pro/Max**. Por favor:

- ✅ Me guie **passo a passo**, um comando de cada vez
- ✅ **Confirme antes de avançar** — não execute vários passos de uma vez
- ✅ Use **analogias do Itaú/banco** quando possível (eu absorvo melhor assim)
- ✅ **Explique o "porquê"**, não só o "como"
- ✅ Avise quando a conversa estiver longa para eu pedir um novo briefing

---

**Vamos retomar do Marco 1.A?** Se sim, comece me pedindo para verificar o `app/layout.tsx` atual com `Get-Content app\layout.tsx` no PowerShell.
