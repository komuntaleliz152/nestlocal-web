# NestLocal

**Find your home in Uganda — without middlemen.**

NestLocal is a trust-first property platform connecting renters and buyers directly with verified property owners in Uganda. No brokers, no hidden fees, no fake listings.

This repository is the **technical artifact** for the ETDI Capstone hackathon — an **agentic freelancer** submission where a crew of AI agents produced a full client engagement from a single brief.

---

## Hackathon submission

### The problem

Finding housing in Kampala is painful: broker fees (often one month's rent), fake listings, wasted inspection trips, and fragmented search across Facebook, Jiji, and informal agents.

### The solution

An orchestrated agent system that takes one client brief and autonomously delivers:

| Module | Deliverable | Location |
|--------|-------------|----------|
| **0** | Client brief + agent orchestration | [`../deliverables/00-client-brief.md`](../deliverables/00-client-brief.md), [`00-agent-orchestration.md`](../deliverables/00-agent-orchestration.md) |
| **A** | Strategy & scope document | [`../deliverables/01-strategy-scope.md`](../deliverables/01-strategy-scope.md) |
| **B** | Landing page (this repo) | `src/` |
| **C** | Brand & content package | [`../deliverables/02-brand-content.md`](../deliverables/02-brand-content.md) |
| **D** | Proposal & handover | [`../deliverables/03-proposal-handover.md`](../deliverables/03-proposal-handover.md) |

### Agent orchestration

```
Client brief → Strategy Agent → Build Agent → Brand Agent → Proposal Agent → Package
                    ↑ Human review gates at each handoff
```

**Tools used:** Cursor, Next.js, MUI, TypeScript, Supabase (planned), Vercel (planned)

Human effort was limited to quality gates and approval — not manual copywriting or coding from scratch.

---

## Live app

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, how it works, features, testimonials |
| `/contact` | Contact page — form and business details |

> **Live site:** [https://nestlocal-web.vercel.app](https://nestlocal-web.vercel.app)

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | MUI 9 + Emotion |
| Language | TypeScript |
| Backend | Supabase (waitlist — pending) |
| Hosting | Vercel (pending) |

---

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials from [Supabase Dashboard](https://supabase.com/dashboard) → **nestlocal** → Settings → API.

```env
NEXT_PUBLIC_SUPABASE_URL=https://zzukwqohlopnfbjnvbab.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Also add these same variables in **Vercel** → Project Settings → Environment Variables, then redeploy.

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
npm run build
npm start
```

---

## Project structure

```
nestlocal-web/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Landing page
│   │   ├── contact/page.tsx  # Contact page
│   │   ├── layout.tsx
│   │   └── ThemeRegistry.tsx # MUI theme (#4B5320)
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── HowItWorks.tsx
│       ├── Feature.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
└── deliverables/             # See parent folder ../deliverables/
```

---

## Brand

| Token | Value |
|-------|-------|
| Primary | `#4B5320` (olive green) |
| Background | `#F5F5F0` |
| Tagline | Find your home in Uganda — without middlemen |

Full brand guidelines: [`../deliverables/02-brand-content.md`](../deliverables/02-brand-content.md)

---

## Roadmap

| Phase | Scope | Status |
|-------|-------|--------|
| **1** | Landing page + waitlist | ✅ Built |
| **1** | Vercel deploy | ✅ Live |
| **1** | Supabase waitlist | ✅ Connected |
| **2** | Property search, listings, owner portal | Planned |
| **3** | Mobile Money, tenant screening, expansion | Planned |

---

## Contact

- **Email:** info@nestlocal.ug
- **Phone:** +256 700 000 000
- **Location:** Kampala, Uganda

---

## License

Private — NestLocal founding team. ETDI Capstone submission, June 2026.

Built for Uganda 🇺🇬
