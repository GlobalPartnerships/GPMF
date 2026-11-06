# GPMF Web Platform — Brand Manual, Architecture & AI Operations

Este documento contiene las reglas de marca, arquitectura frontend y lineamientos operativos para el desarrollo y despliegue del portal web de **Global Partnerships & Multidisciplinary Firm (GPMF)** en Vercel. TODA interacción de la IA y desarrolladores debe regirse estrictamente por estas reglas.

---

## 1. Zonas de Edición y Seguridad (Git Workflow)

### 🟢 ZONA VERDE (Edición permitida para contenidos y diseño):
* `app/dictionaries/` (Archivos JSON de traducción: `es.json`, `en.json`, `de.json`, `fr.json`).
* `app/components/` (Componentes visuales modulares: `layout/`, `home/`, `services/`, etc.).
* `public/images/` (Assets visuales oficiales optimizados).

### 🔴 ZONA ROJA (Prohibido modificar salvo solicitud técnica explícita):
* `package.json` y `package-lock.json`
* `next.config.ts` (salvo configuración acordada de redirecciones 301)
* `tsconfig.json` y configuraciones raíz de ESLint/PostCSS

### 🌿 Regla de Ramas Git:
* **Prohibido:** Modificar o hacer `push` directo a la rama `main` (despliegue automático en producción).
* **Obligatorio:** Trabajar en ramas de funcionalidad (ej. `feature/header-footer-brand`, `feature/team-photos`) y desplegar vía Pull Request o validación previa con `npm run build`.

---

## 2. Reglas de Marca y Diseño (Brand Manual)

### 2.1. Paleta de Color Institucional
* **Burgundy (Acento principal / CTA):** `#7A0F32`
* **Burgundy Hover:** `#8F123B`
* **Charcoal (Texto de lectura y fondos secundarios):** `#2E2E2E`
* **Black (Cabeceras fijas y pie de página):** `#000000` o `#0B0F17`
* **Softgray / Warmgray (Fondos claros y cajas de datos):** `#F9FAFB` / `#F5F5F5`
* **Bordes sutiles oscuros:** `rgba(255, 255, 255, 0.1)` (`border-white/10`)

### 2.2. Logotipo Oficial (Tolerancia Cero a Placeholders)
* **Para Fondos Oscuros, Headers y Footers (`bg-black`):**  
  Usar exclusivamente el archivo institucional blanco horizontal completo:  
  📁 `/images/GPMF LOGO white.png` o `/images/gpmf-logo-white.png`.  
  *Dimensiones recomendadas:* `height: 36px` a `40px; width: auto; object-fit: contain;`.  
  *Regla estricta:* Prohibido usar filtros CSS `invert` sobre logos oscuros o simular isotipos con cajas `<div>G</div>`.
* **Proporciones:** Prohibido estirar o alterar el `aspect-ratio` (`object-fit: contain; shrink-0;` obligatorio).

### 2.3. Tipografía Oficial
* **Cuerpo y Controles de UI:** *Inter* (sans-serif)
* **Títulos y Encabezados Institucionales:** *Playfair Display* (serif)
* **Texto Comercial / Marketing:** *Source Sans 3*

---

## 3. Modelo de Negocio y Tono Institucional (Anti-"Carreta")

* **Voz:** Autoridad de *Think Tank* / Consultoría estratégica transatlántica de alto nivel.
* **Descripción Canónica:**
  1. *Scouting tecnológico europeo para empresas líderes consolidadas en LATAM.*
  2. *Acompañamiento fraccionado y estructuración de canales en LATAM para empresas industriales del Mittelstand alemán y europeo.*
* **Nombres de Clientes:** Confidencialidad total (no nombrar clientes privados sin autorización).
* **Credenciales Reales Auditadas:**
  * Gobernanza DAAD & BMBF (€1.000.000 consorcio ColombiaCONNECT con JLU Giessen y Fraunhofer; supervisión de >€500.000 en fondos DAAD con 100% de cumplimiento y Cero Hallazgos durante 7 años consecutivos).
  * Antena Comercial ChileTec en Colombia (+150 empresas tecnológicas).
  * INRAE & AgrifoodTEF (€30M IA y robótica agrícola en Francia).

---

## 4. Arquitectura de Componentes Globales (Arquetipo A: Web Corporativa)

### 4.1. Header (`app/components/layout/Header.tsx`)
* **Contenedor:** Fijo superior (`fixed top-0 w-full z-50 bg-black border-b border-white/10`).
* **Logo:** Horizontal blanco oficial, sin filtros `invert`.
* **Navegación:** Centrada, enlaces en *Inter* mayúsculas espaciadas (`text-[11px] tracking-[0.2em] font-medium text-white/80 hover:text-[#7A0F32]`).
* **Derecha:** Selector de idioma discreto (`LanguageDropdown`) + Botón CTA píldora (`rounded-full bg-[#7A0F32] text-white hover:scale-105`) enlazando a Diagnóstico (`/${lang}/diagnosis`).

### 4.2. Footer (`app/components/layout/Footer.tsx`)
* **Contenedor:** Fondo negro o carbón profundo (`bg-black text-gray-400 border-t border-white/10`).
* **Estructura:** Doble bloque sobrio de alta gama:
  * *Bloque Superior:* Identidad institucional (Logo blanco + Arquitectura de 3 Nodos: `Bogotá • Clermont-Ferrand • Montreal`) + Botones pastilla elegantes para LinkedIn corporativo, GitHub y contacto directo.
  * *Bloque Inferior:* Navegación legal/esencial directa y copyright legal `© 2019 - 2026 GPMF. Todos los derechos reservados.`.
* **Prohibición:** Cero columnas de enlaces vacíos (`#careers`, `#press`, `#manifesto`) o créditos ajenos de plantillas de diseño.

---

## 5. Canales Canónicos de Enlace (Tolerancia Cero a Links Rotos)

Toda referencia a redes, repositorios o contacto en componentes o diccionarios debe apuntar estrictamente a estos enlaces verificados:
* **LinkedIn Corporativo:** `https://www.linkedin.com/company/gpmfsas`
* **GitHub Organizacional:** `https://github.com/globalpartnerships`
* **Correo de Notificación y Contacto:** `contacto.gpmfsas@gmail.com`
* **Rutas Internas Válidas en Next.js:**
  * `/${lang}` (Inicio)
  * `/${lang}/pilars` (Pilares Estratégicos)
  * `/${lang}/services` (Servicios Especializados)
  * `/${lang}/plans` (Planes y Tarifas)
  * `/${lang}/partners` (Red de Socios)
  * `/${lang}/diagnosis` (Herramienta de Diagnóstico)
  *(Prohibido enlazar a anclas huérfanas `#` que confundan al visitante).*

---

## 6. Gobernanza de Archivos de Instrucciones del Agente

En este repositorio existen varios archivos de metadatos (`AGENTS.md`, `rules.md`, `CLAUDE.md`, `ARCHITECTURE_AUDIT.md`):
* **`AGENTS.md` (Este Documento Maestro):** Es la **Única Fuente de Verdad (SSOT)** que lee el motor Antigravity en cada mensaje. Al tener este archivo completo, el agente tiene integradas las reglas de Next.js, el Brand Manual de GPMF, las zonas de edición segura y los enlaces canónicos.
* **`rules.md`:** Resguardo histórico de zonas de edición y ramas Git (sus directivas ya están consolidadas en la Sección 1 de este `AGENTS.md`).
* **`ARCHITECTURE_AUDIT.md`:** Documento de diagnóstico técnico de rutas legacy y dependencias (documento de consulta, no operativo).
