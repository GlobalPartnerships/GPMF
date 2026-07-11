# GPMF — Pre-Migration Content Reference

> **Purpose:** Single source of truth extracted from the original static HTML site (`___pre_migration/`).
> Use this to populate the new Next.js project. Captures copy, structure, services, pricing, team,
> brand identity, contact data, the lead-generation funnel, and technical notes.
>
> **Source:** `___pre_migration/` static site (HTML5 + Tailwind CDN + vanilla JS), GitHub Pages.
> **Extracted:** 2026-06-29

---

## 1. Brand Identity

**Official name:** Global Partnerships & Multidisciplinary Firm (GPMF)
**Legal entity:** GPMF Consulting / Consultoría S.A.S. (operating since 2019)
**Footer line:** "Global Partnerships Multidisciplinary Firm"
**Locations / offices:** Bogotá • Clermont-Ferrand • Montreal
**Copyright:** © 2019 – {current year} GPMF Consulting S.A.S. All rights reserved. (year is JS-dynamic)

### Colors (Tailwind config — repeated in every page)
| Token | Hex | Use |
|---|---|---|
| `burgundy` | `#7A0F32` | Primary / accent (hover: `#5e0b26`) |
| `charcoal` | `#2E2E2E` | Body text |
| `warmgray` | `#F5F5F5` | Backgrounds |
| `black` | `#000000` | Header/footer, accents |
| `amber` | `#FFC857` | Secondary accent (partners, plans "white glove") |
| neutral gray | `#555555` | Secondary service card |

### Typography (Google Fonts)
- **Inter** (300–700) — body / sans
- **Playfair Display** (serif, incl. italic) — headlines

### Logo
- `Assets/GPMF LOGO white.png` (white version, used on dark header/footer)
- Other brand assets: `Assets/GPMF_web.png`, `Assets/GPMF LOGO white.png`

### Voice & values
- Professional but accessible, specialized without excessive jargon, results-oriented.
- Trilingual native (ES/EN/DE) + French.
- Values: technical excellence (methodological rigor), boutique agility (direct senior attention), global vision (multicultural DNA).
- Tagline / compass: **"Global Thinking, Local Execution"**.

---

## 2. Company Positioning (Business Model)

**Who:** Boutique consultancy for international expansion and digital transformation, serving SMEs and corporations.

**Markets:** Latin America ↔ Europe (focus). Specialization in Agro-Tech, Bioeconomy, Construction 4.0.

**ICP (Ideal Customer Profile):** "Frontier" companies in Agro, Real Estate, HealthTech, EdTech.
- Revenue: $1M–$10M USD
- Size: 20–150 employees
- Trait: have cash flow but operational chaos or intercultural friction.

**4 Service Lines:**
1. International B2B (expansion & softlanding)
2. Digital / Data Transformation (applied AI & analytics)
3. Intercultural Training (teams & multicultural leadership)
4. Sectoral Funds / Grants (financing & co-financing)

**Sales model "Land & Expand" (3 tiers):**
- **Tier 1 — Hook / Phase 0:** Quick diagnostic, $1k–$3k USD, low friction.
- **Tier 2 — Implementation:** Projects / softlanding, $5k–$15k USD.
- **Tier 3 — Recurrence:** Fractional C-Level (CXO-as-a-Service), $1.5k–$3k/month (MRR).

> Note: pricing on the live `plans.html` differs slightly from the README model (see §6). Reconcile with the client which figures are canonical.

---

## 3. Site Architecture & Navigation

### Languages (subfolder strategy — the migration target)
```
/            → Spanish (default for LatAm/Spain)   [in pre-migration, root is mostly EN]
/en/         → English (global default)
/de/         → German
/fr/         → French
```
> ⚠️ In the pre-migration site the root pages are mixed (mostly EN, some `lang="es"`). The new
> structure should be clean subfolders with static HTML/route per language, hardcoded
> `<title>`, `meta description`, and `hreflang` (no JS `data-i18n` — it is NOT SEO-friendly).

**Existing translated pages:**
- `de/`: about, contact, data-ai, index, intercultural, internationalization, partners, plans, thank-you-diagnostic, thank-you-retainer, thank-you-sprint (full set)
- `es/`: Intercultural, about, data-ai, index, internationalization, partners, plans, thank-you-* (no contact)
- `fr/`: index only (rest fall back to EN)

### Primary navigation (header, all pages)
`Home (Inicio)` | `Firm (Firma)` | `Partners (Aliados)` | `Services (Servicios)` → `#services`
- Language switcher: EN | ES | DE | FR
- CTA button: **Schedule / Agendar** → `diagnostico.html`

### Footer (all pages)
- Logo + "Global Partnerships Multidisciplinary Firm"
- "Bogotá • Clermont-Ferrand • Montreal"
- "© 2019 – {year} GPMF Consulting S.A.S. All rights reserved."

### Page inventory
| Page | Purpose |
|---|---|
| `index.html` | Home |
| `about.html` | The Firm (leadership + credentials) |
| `partners.html` | Allies & Team (specialist network + associated firms) |
| `internationalization.html` | Service: Internationalization & Alliances |
| `data-ai.html` | Service: AI & Analytics Consulting |
| `Intercultural.html` | Service: Intercultural & Interdisciplinary Management |
| `plans.html` | Productized plans / pricing |
| `diagnostico.html` | Lead-qualification funnel (5-question form) |
| `contact.html` | Contact form |
| `thank-you-diagnostic/sprint/retainer.html` | Post-payment / post-submit confirmations |
| `DACH.html` | Strategic Diagnostic variant for DACH (Germany/Austria/Switzerland) market |
| `casa-normandia/` | Case-study subsite (executive stays near El Dorado Airport, Bogotá) |
| `proposals/` | Corporate proposal documents (UMIP, Optasalud, Data Readiness, IAI, Capabilities) |

---

## 4. Page Content (copy)

### 4.1 Home (`index.html`)
- **Hero H1:** "Navigating global complexity through **strategic intelligence.**"
- **Hero subtext:** "We help SMEs enter Europe and Latam without wasting time on bureaucracy or culture."
- **Hero CTAs:** "Strategic Plans" (→ plans) · "Explore Services" (→ #services)
- **Hero media:** background video (`assets/video/background.mp4`, played at 0.7× rate)

**Practice Areas (services section):** "We unite strategy, intelligent data management and interdisciplinary training to build solid foundations."
1. **Internationalization** — "Expansion with intercultural focus. From benchmarking to operational softlanding." → Strategic Alliances · Trade Missions → `internationalization.html`
2. **Digital Transformation** — "We transform scattered data into strategic assets for informed decisions." → Maturity Diagnosis · Data Architecture → `data-ai.html`
3. **Intercultural Management** — "Strengthening internal capabilities, leadership and organizational culture." → Team Training · Strategic Planning → `intercultural.html`

**Trust banner:** "Trust built in global ecosystems" — logo slider (INRAE, Flordex, Koenigsegg, eToro, + others).

**Philosophy section:**
- Tag: "Strategic Vanguard"
- H2: "We don't bring canned answers. **We co-create solutions.**"
- Body: "In a world saturated with information, value is not in data, but in ability to transform it into strategic and sustainable action."
- Stats: **100%** Boutique Focus · **3+** Active Continents
- Quote: "'Global Thinking, Local Execution' is not just a slogan; it is our operational compass."
- Benefits: **Methodological Rigor** ("Standardized processes validated in Europe and Latam.") · **Boutique Agility** ("Each project is designed and validated by partners.")

**Closing CTA:** "Ready to elevate standard." — "Schedule a 30-minute strategic diagnostic session at no cost." → "Request Diagnosis"

---

### 4.2 The Firm (`about.html`)
- **Hero H1:** "Multidisciplinary DNA. **Borderless.**"
- **Hero body:** "GPMF emerges from real field experience, uniting two forces. We fuse decades of experience in Colombia, Germany, Canada and France, combining engineering rigor with global business agility. We were born to translate complexity into results."

**Senior Leadership** ("Every project is designed and validated by the partners. We guarantee senior vision, executed with agility."):

- **Adriana** — *Engineering & Complexity*
  "Engineer with extensive track record in R&D, public policy and complex systems (INRAE, Colciencias). Her superpower is providing systemic structure and technical credibility to high-level projects."
  - M.Sc. Agricultural Engineering (Univ. Nacional) · Experience in Scientific Diplomacy · Base: Europe / Latam
  - Photo: `Assets/workshop_adr.jpg`

- **Marcela Sánchez Vargas** — *Strategy & Expansion*
  "Expert in Business Development and M&A Sourcing with trilingual vision (ES/EN/DE). She specializes in opening difficult markets and high-ticket B2B/B2G negotiations."
  - European Master in Intercultural Education (Berlin) · 10+ Years in Strategic Alliances · Tech & Business Ecosystem Connector
  - Photo: `Assets/marceperfil.jpg`

**Technical Credentials** — "Proven Execution Capability / Technical evidence of our capacity to design and operate complex systems for international ecosystems."

- **Pillar 1 — Strategic Governance and Legal Shield**
  - Success case: European Fund Management (Zero Findings Model)
  - Context: administrative/legal/financial infrastructure for the **CEMarin** international scientific consortium, funded by the German government (DAAD/BMBF).
  - Results: process engineering & auditable workflows for international fund management (>€550,000), passed international audits with no fiscal findings.
  - Impact: install the same Compliance architecture for transparency, financial traceability, eligibility for international funds/donors.
  - Image: `Assets/Flow.png`

- **Pillar 2 — Technology-Enabled Operations**
  - Success case: Business Intelligence and Process Automation
  - Context: digital transformation from manual (Excel) processes to centralized high-performance systems.
  - Results: in-house real-time control dashboards + automated workflows (RevOps).
  - Impact: build the "operational engine"; recover up to 40% of strategic team's time.
  - Images: `Assets/dash.png`, `Assets/RevOps.png`

- **Pillar 3 — Institutional Branding (The Global Showcase)**
  - Success case: World-Class Projection for Scientific Ecosystems
  - Context: positioning research networks before donors, embassies, top stakeholders.
  - Results: end-to-end institutional identity (web ecosystems, multimedia, strategic narrative).
  - Impact: redesign online presence to convey prestige, transparency, institutional solidity.
  - Media: `Assets/GPMF_web.png` + YouTube "What is CEMarin?" (`https://www.youtube.com/watch?v=K30yVPsH-Xo`)

- **CTA:** "Ready to implement these solutions in your organization?" → "Request Free Diagnostic"

---

### 4.3 Partners / Allies & Team (`partners.html`)
- **Hero kicker:** "Alianzas Estratégicas"
- **H1:** "Red de Especialistas. Un Ecosistema que amplifica nuestro impacto."
- **Body:** "Creemos en la inteligencia colectiva. GPMF opera bajo un modelo de red multidisciplinar de expertos. Activamos consultores senior especializados según la necesidad específica de cada proyecto..."

**Specialist Network (12 people)** — "Talento experto que integramos bajo demanda":
| Name | Role | Photo |
|---|---|---|
| Natalia Sánchez | Project Manager en Tech & Data Analytics (mercado canadiense) | `Assets/Natalia.JPG` |
| David Salazar | Arquitecto & Experto en Diseño (Real Estate/Hospitalidad) | `Assets/David.jpg` |
| Matthias Halleux | Asesor Estratégico: Retail Francés y Acceso a Mercado (+15 años FMCG) | `Assets/Mathias.jpg` |
| Nidian Díaz | Auditoría y Estructuración Financiera | `Assets/Nidian.jpg` |
| Diego Quintero | Politólogo experto en seguridad y política pública | (no photo) |
| Esperanza Vargas | Desarrollo Agrícola & Sostenibilidad (La Finca La Granja) | `Assets/espe.jpg` |
| Jorge Ordoñez | Estratega de Imagen de Marca & Dirección de Arte (+16 años) | `Assets/Jorge.jpg` |
| Carlos Santiusti | Arquitectura de Datos e IA (Ing. Sistemas) | `assets/carlos.jpg` |
| Aristides Sánchez | Desarrollo de Proyectos & Hospitalidad (Casa Normandía) | `Assets/Ari.jpg` |
| David Junco | Back-End Developer (Python, TypeScript) | (no photo) |
| Fany Barrera | Finanzas y Contabilidad | `Assets/Fany.jpg` |
| Anyelin Pérez | Business Intelligence — Reingeniería de procesos | `Assets/Anyelin.jpg` |

**Associated Firms (Partners y Firmas Corporativas)** — "Instituciones especializadas que extendemos según el proyecto":
- **Audiconet** — auditoría financiera y consultoría contable internacional
- **Aparato** — desarrollo de software y soluciones tecnológicas a medida
- **Factor Visual** — estudio de diseño gráfico y branding
- **Epicerí Gourmet** — productos gourmet y consultoría gastronómica

**CTA (Colaboración Extendida):**
- H2: "Una red viva para proyectos de alto riesgo y alto impacto."
- Points: equipos transnacionales en 3 zonas horarias · contratos flexibles (pod, retainer, sprint) · due diligence cultural y técnica antes de cada partnership.
- Join box: "¿Quieres sumarte como aliado?" → "Postular alianza" (`mailto:contacto.gpmfsas@gmail.com`) · "Agendar conversación" (→ diagnostico)

---

### 4.4 Service — Internationalization (`internationalization.html`)
- **Hero H1:** "Expanda su Negocio Globalmente: Internacionalización y Alianzas"
- **Hero body:** "Ayudamos a su empresa a construir alianzas sólidas y asegurar una entrada exitosa (soft landing) desde y hacia Europa y América Latina, transformando desafíos culturales en ventajas competitivas duraderas."
- **CTA:** "Solicite su Diagnóstico Gratuito"

**Methodology — "Metodología Probada y Orientada a Resultados"**
"Le ayudamos a generar valor real y medible, convirtiendo la analítica y la IA en el núcleo de su estrategia..."
1. **Análisis Riguroso** — análisis riguroso + inteligencia contextual + facilitación de alianzas.
2. **Backward Planning** — objetivos a largo plazo y pasos tecnológicos/organizacionales.
3. **Forward Planning** — salida al mercado con pilotajes en ciclos cortos, "victorias rápidas".

**Distinctive focus:** Global e Interdisciplinario · Enfoque Intercultural · Resultados Medibles (KPIs).

**Qualification banner:** "Is your international infrastructure an asset or an eligibility risk? ... Take our 5-question Diagnostic and receive feedback from our partners within 24h." → "Start Free Assessment"

**Key services:**
- 🌐 Desarrollo de Negocios y Alianzas Estratégicas
- 💼 Diseño Estratégico para Matching Funds (fondos de cofinanciación)
- 🎓 Desarrollo de Habilidades Interculturales

**Success cases:**
- **Casa Normandía** — Estrategia de Salida al Mercado Internacional (pilotajes en ciclos cortos). → `casa-normandia/index.html`
- **Instituto Científico Alemán-Colombiano** — Desarrollo de Alianzas Estratégicas; crecimiento sostenido >10% anual y >€500.000 en 2022.

**International/Intercultural relations:** Conexiones Globales · Equipos Diversos · Expansión Sostenible.

**Pain points (¿Su Empresa Enfrenta Estos Desafíos?):** Expansión sin Estrategia · Barreras Culturales · Soft Landing Riesgoso · Financiación Ineficiente · Competencias Interculturales · Análisis Insuficiente.

**Closing CTA:** "Dé el Primer Paso — Comienza a transformar su negocio globalmente." → "¡Quiero mi Diagnóstico Gratuito!" · "Ver Planes"

---

### 4.5 Service — AI & Analytics (`data-ai.html`)
- **Kicker:** "Data Science · AI · Analytics"
- **H1:** "AI & Analytics Consulting"
- **Subtext / meta description:** "Transform data into decisions. Strategic AI diagnostics for SMEs and NGOs with high potential."
- **CTAs:** "Start AI Assessment" (→ diagnostico) · "View Services"
- Hero card: "AI-Powered Insights — Data-driven decision making"

**Our Services** ("Complete AI and analytics solutions for your business"):
1. **AI Strategy** — Strategic AI implementation planning
2. **Data Analytics** — Advanced data analysis and insights
3. **Machine Learning** — Custom ML model development

> Note: this page is the thinnest of the three service pages (only 3 short cards). The README flags i18n as "partial" and content as a candidate for expansion.

---

### 4.6 Service — Intercultural Management (`Intercultural.html`)
- **Kicker:** "Cultura & Liderazgo"
- **H1:** "Gestión Intercultural e **Interdisciplinaria**."
- **Body:** "Fortalecemos las capacidades de su equipo para colaborar, innovar y liderar en entornos globales. Convertimos la diversidad cultural y técnica en su mayor ventaja competitiva."
- **CTA:** "Ver Programas"
- Hero image: `Assets/IMG_0664.jpg` (workshop). Badge: "Metodología GPMF — Co-creación en tiempo real."

**Problems (¿Su equipo habla el mismo idioma?):** Silos Organizacionales · Choque Cultural · Liderazgo Tradicional · Fuga de Talento.

**Methodology — "Inteligencia Colectiva"** (no "enlatados"):
1. Diagnóstico Cultural (Audit)
2. Diseño a Medida
3. Entrenamiento Experiencial (simulaciones, role-play, casos reales)
4. Transferencia (herramientas in-house)
- Quote (Marcela Sánchez, Master en Educación Intercultural, Berlín): "La interculturalidad no es solo hablar idiomas; es entender cómo se construye la confianza en diferentes latitudes."

**Intervention models (Modelos de Intervención):**
| Level | Plan | Includes |
|---|---|---|
| Táctico | **Workshops Puntuales** | Comunicación Intercultural · Negociación Internacional · Pitching para Europa/USA |
| Gerencial (Recomendado) | **Programa de Liderazgo Ejecutivo** | Liderazgo Adaptativo · Coaching Grupal Mensual · Retos prácticos |
| Estratégico | **Transformación Cultural** | Acompañamiento en Fusiones (M&A) · Diseño de ADN Corporativo · Gestión del Cambio |

**Impact cases:** Multinacional Tech (integración post-fusión Colombia–Alemania, −20% rotación) · Centro de Investigación (innovación interdisciplinaria, rompe silos) · ONG Internacional (liderazgo adaptativo, equipos remotos).

**Closing CTA:** "El talento no es el problema. La coordinación sí." → "Hablemos de su Equipo" (sesión gratuita de 30 min).

---

### 4.7 Plans / Pricing (`plans.html`)
- **H1:** "Strategic Solutions"
- **Subtext:** "Productized consulting services designed for immediate impact. From automated diagnostics to tactical retainers, scale your organization with intelligence and global vision."
- Assessment CTA: "Not sure which solution you need? Take the free 5-question maturity assessment" → diagnostico

**Productized cards:**
| Product | Badge | Price | Description | Includes |
|---|---|---|---|---|
| **GPMF DIAGNOSTIC** | AUTOMATED | **$500 USD** one-time | Express "Business Readiness" audit, automated analysis | Extended diagnostic questionnaire · Maturity Report (PDF) in 48h · 30-min review session |
| **STRATEGIC SPRINT** (Most Popular) | INTENSIVE | **$1,500 USD** one-time | Custom Internationalization or Data Roadmap | 2 intensive sessions (1h each) · Custom Strategic Playbook · Priority implementation timeline |
| **TACTICAL RETAINER** | ONGOING | **$2,500 USD/month** | Continuous operational support (Junior Director/PM) | Management of 1 process · Bi-weekly meetings · Monthly progress reports |

**GPMF Executive Partner (WHITE GLOVE SERVICE):**
- "End-to-end strategic direction for complex organizations (like UMIP or IAI). Operational governance and international donor protection."
- **Fractional C-Level:** strategic governance & board advisory · international donor relationship management · complex transformation program oversight.
- **Enterprise Solutions:** data governance & compliance frameworks · multi-market expansion strategy · advanced analytics & AI implementation.
- **Pricing:** Custom — "Starting from $10,000 – $50,000 USD" → "Request Proposal"

**Payment integration:** Stripe Checkout links (currently placeholder test URLs) per product; retainer = Stripe subscription. Executive → contact form with prefilled subject.

> ⚠️ Pricing here ($500 / $1,500 / $2,500) differs from the README "Land & Expand" model. Confirm canonical figures before publishing.

---

### 4.8 Diagnostic Funnel (`diagnostico.html`) — CRITICAL
The lead-qualification engine. Bilingual (ES primary + EN subtitle inline).
- **H1:** "Diagnóstico Estratégico / Strategic Diagnostic"
- **Intro:** "Responde estas 5 preguntas clave para identificar oportunidades de crecimiento y alinear tu visión con nuestra experticia."

**5-question form (radar):**
1. **Main strategic challenge** (radio): Internacionalización · Datos & IA · Gestión Intercultural · Estrategia Corporativa
2. **Project stage** (select): Exploración · Planeación · Ejecución · Escalamiento
3. **The pain** (open textarea): "¿Qué obstáculo te impide dormir tranquilo respecto a este proyecto?"
4. **Urgency** (radio): Crítico (este mes) · Alto (Q1/Q2) · Medio (próximo año) · Bajo (curiosidad)
5. **Investment range** (select, "velvet rope"): `<$5k` (Talleres/Semilla) · `$5k–$20k` (Estándar) · `$20k–$50k` (Expansión Core) · `$50k+` (Corporativo) · Por determinar

**Contact fields:** Nombre Completo · Correo Corporativo · LinkedIn o Web de la Empresa.
**Submit:** "SOLICITAR SESIÓN DE DIAGNÓSTICO" → "nuestros socios revisarán tu perfil en 24h."
**Success message:** "¡Diagnóstico Recibido! ... Si hay alineación estratégica, nos pondremos en contacto en 24-48h."

**⚠️ Backend integration (preserve in migration):**
- Submits via `fetch` (POST, `mode: 'no-cors'`) to a **Google Apps Script webhook**:
  `https://script.google.com/macros/s/AKfycbzhT6BHWHtROop8FTAlhOBcQ3sfFBj-P5bgTBjHgUTGuaU5CbQWsi9g4K8zM6FbBzI/exec`
- Payload: fecha, timestamp, nombre, email, empresa, presupuesto, desafio, etapa, dolor, urgencia.
- Fires `gtag` event `radar_submit` (category `lead_generation`, label = desafio) if Google Analytics present.
- **Business rule (from README):** the diagnostic exists ONLY in **Spanish** (`/diagnostico.html`) and **English** (`/en/diagnostic.html`). DE/FR "Schedule Diagnostic" buttons point to the EN version with an "EN" visual indicator. `hreflang` maps only es / en / x-default. This aligns with the team's operational capacity + GAS/n8n sales automation.
- **DACH variant:** `DACH.html` — "Strategic Business Diagnostic" tailored to the DACH market.

---

### 4.9 Contact (`contact.html`)
- **Left panel (burgundy):** "Let's Talk — We're ready to listen to your challenges and explore how our global network can accelerate your results."
  - **Email:** `contacto.gpmfsas@gmail.com`
  - **Location:** Bogotá, Colombia — Global Operations
- **Form:** Name · Company · Corporate Email · Message → submit (currently `mailto:` action).
- Link: "Want to improve my diagnostic to schedule a call?" → diagnostico
- Has full `hreflang` tags (placeholder domain `www.tudominio.com` — replace with real domain).

---

### 4.10 Thank-you pages
- `thank-you-diagnostic.html` — "Thank You - Payment Successful"
- `thank-you-sprint.html` — "Thank You - Strategic Sprint"
- `thank-you-retainer.html` — "Thank You - Retainer Activated"
(Post-Stripe-payment / post-submit confirmation pages; one per product tier.)

---

## 5. Subsites & Proposals (separate scope)

### Casa Normandía (`casa-normandia/`)
Case-study / micro-site. **"Casa Normandía | Estancias Ejecutivas cerca al Aeropuerto El Dorado"** (executive stays near Bogotá's El Dorado airport). Pages: `index.html`, `nilo.html`, `policies.html`, `politicas.html`. Has its own assets and a **Python webhook receipt processor** (`webhook_receipt_processor.py`, `requirements.txt`, `README_webhook.md`) — a separate backend concern.

### Proposals (`proposals/`) — corporate documents, likely NOT public site pages
- `Capabilities GPMF.html` (ES) / `capabilities_EN.html` — Capabilities Statement 2026 (PDF export, own i18n)
- `UMIP/` — Audit, InstitutionalRead, Readiness, UMIP
- `Optasalud/` — Brochure GPMF Venezuela, Orden de Servicio (firmable), SPA Deal, Strategic Scan LATAM
- `Data Readiness/` — CINTEL one-pager, GPMF Data Readiness Proposal, Propuesta Jardines De Los Andes
- `DataReadiness_SolucionesDigitales.html`
- `IAI institutional-readiness-governance.html`

> These are client-specific deliverables. Decide with the client whether any belong in the new site or stay as standalone documents.

---

## 6. Technical Notes for Migration

**Original stack:** HTML5 + Tailwind via CDN (`cdn.tailwindcss.com`, inline `tailwind.config`) + vanilla JS. Hosted on GitHub Pages. FontAwesome via kit. Google Fonts.

**Shared JS:** `js/main.js` (~1700 lines) holds the `data-i18n` translation dictionary (ES/EN/DE/FR) + `changeLanguage()` + mobile menu logic. In the new project, translations should become static per-route content (i18n framework or hardcoded), NOT client-side DOM swapping.

**CSS files:** `css/index.css`, `css/gradient_background.css`, `css/mini_classes.css`, `css/video_embed.css`.

**Known issues to fix in migration:**
- ⚠️ `data-i18n` JS translation is NOT SEO-friendly (Googlebot/WhatsApp/LinkedIn see empty markers). → static per-language pages with hardcoded `hreflang`.
- ⚠️ Inconsistent asset path casing: `Assets/` vs `assets/` (Windows-tolerant, breaks on Linux/Vercel). Normalize to one case.
- ⚠️ Mixed `lang=""` attributes on root pages (some `en`, some `es`).
- ⚠️ Placeholder domain `www.tudominio.com` in hreflang tags — replace with production domain.
- ⚠️ Stripe checkout URLs in `plans.html` are test placeholders — replace with live links.
- ⚠️ Some nav links point to legacy filenames (`aliados-equipo.html`, `planes/planes.html`, `intercultural.html` lowercase vs `Intercultural.html`) — fix routing.
- ⚠️ Trust-banner logos are hot-linked from external URLs (S3, pinterest, ap2e) — host locally.
- Contact form uses `mailto:` (no real backend); diagnostic uses Google Apps Script webhook.

**SEO targets to add:** per-language `<title>` + `meta description`, static `hreflang`, canonical URLs, `sitemap.xml` (multilingual), `robots.txt`, schema markup, localized Open Graph.

**Key contact / accounts:**
- Public email: `contacto.gpmfsas@gmail.com`
- Content owners: Marcela Sánchez Vargas & Adriana (Halleux/Sánchez)
- Lead webhook: Google Apps Script (URL above) + n8n automation

---

## 7. Asset Inventory (`Assets/` + `assets/`)
- **Logos:** `GPMF LOGO white.png`, `GPMF_web.png`, `img/logo.png`
- **Team/allies:** workshop_adr.jpg, marceperfil.jpg, Natalia.JPG, David.jpg, Mathias.jpg, Nidian.jpg, espe.jpg, Jorge.jpg, carlos.jpg, Ari.jpg, Fany.jpg, Anyelin.jpg, Adriana.JPG
- **Credentials/diagrams:** Flow.png, dash.png, RevOps.png, Datos.png, Firma MSV.png
- **Service/relations imagery:** 2017.JPG, Diverso.jpg, Expansion.jpg, hero.jpg, IMG_0664.jpg/.HEIC
- **Case thumbnails:** agrotech-thumb.jpg, casa-normandia-thumb.jpg, construccion-thumb.jpg, flordex-thumb.jpg
- **Partner logos:** img/etoro_logo.png, img/flordex_logo.png, img/koenigsegg_logo.png
- **Video:** video/background.mp4 (home hero)

---

*End of content reference. Generated from the `___pre_migration` static site for the Next.js migration.*
