# 🎯 Roadmap de Producción Web — GPMF 2026

> **Estado del Proyecto:** Sprint de Lanzamiento y Alineación de Marca  
> **Repositorio de Despliegue:** `C:\Development\GPMF-prod-deploy` (Vercel)  
> **Regla de Actualización:** Este archivo es dinámico y operativo. A medida que se terminan tareas, solo se marca con `[x]` aquí sin necesidad de tocar `AGENTS.md`.

---

## 🏁 Estado de los 4 Checks Principales

### [x] CHECK 1: Estandarización de Header y Footer (Brand Manual)
- [x] **Header:** Fondo negro (`bg-black`), logotipo blanco oficial nítido `/images/gpmf-logo-white.png` (sin filtro `invert`), enlaces con diccionarios multi-idioma y botón píldora Burgundy (`rounded-full`) apuntando a Diagnóstico.
- [x] **Footer:** Fila única minimalista en fondo negro (`py-8 bg-black`), logotipo blanco, arquitectura de nodos (`Bogotá • Clermont-Ferrand • Montreal`), copyright y botones pastilla elegantes para LinkedIn (`https://www.linkedin.com/company/gpmfsas`) y GitHub (`https://github.com/globalpartnerships`).
- [x] **Verificación:** Compilación exitosa con `npm run build`.

---

### [x] CHECK 2: Rostros Reales y Credenciales (Cero Fotos de Stock)
* **Objetivo:** Conectar las fotos reales del equipo directivo en la página `/partners` y en la sección `TeamSection.tsx` de la Home para proyectar autoridad de Think Tank.
* **Assets Disponibles (en `pack_imagenes_web/`):**
  - [x] **Marcela Sánchez Vargas:** Foto de perfil institucional (`04_perfil_marcela_sanchez.jpg`) conectada en `TeamSection.tsx`.
  - [x] **Adriana Sánchez Halleux:** Foto de perfil institucional (`05_perfil_adriana_sanchez.jpg`) conectada en `TeamSection.tsx`.
  - [x] **Natalia Sánchez Vargas:** Foto de perfil institucional (`06_perfil_natalia_sanchez.jpg` / `/professionals/natalia.jpg`).
  - [x] **Alianza ProChile / Casos de Estudio:** Fotos de trabajo real (`18_caso_estudio_casa_normandia.jpg`, `19_caso_estudio_agrotech.jpg`, `16_dashboard_analitica_dash.png`) conectadas en `CaseStudiesSection.tsx`.

---

### [ ] CHECK 3: Prueba de Fuego del Formulario de Diagnóstico
* **Objetivo:** Verificar de punta a punta que el prospecto que complete el test de 5 preguntas reciba confirmación y que las socias reciban el lead.
* **Tareas:**
  - [ ] Entrar a `/es/diagnosis` en el navegador y completar el cuestionario con un correo de prueba.
  - [ ] Confirmar recepción del correo en la bandeja de `contacto.gpmfsas@gmail.com`.
  - [ ] Confirmar que el usuario reciba la plantilla de respuesta automática.

---

### [ ] CHECK 4: Consistencia de Copys en Servicios
* **Objetivo:** Asegurar que los textos de la página `/services` reflejen la tesis Market Maker de GPMF y no textos genéricos en inglés embebidos en el JSX.
* **Tareas:**
  - [ ] Migrar textos quemados en `Section1.tsx`, `Section2.tsx` y `Section3.tsx` a los diccionarios JSON (`app/dictionaries/services/`).
  - [ ] Asegurar los 2 mensajes canónicos:
    1. Scouting de socios tecnológicos europeos para empresas consolidadas en LATAM (ej. caso metrología Chile).
    2. Fractional management y estructuración de canales para el *Mittelstand* en Colombia y Chile.

---

## ⏸️ Tareas en Pausa (Descartadas por Desalineación de Modelo)

* **Pasarela Stripe (Checkout automático):**  
  *Motivo de pausa:* GPMF cierra mandatos B2B de consultoría estratégica y channel setup (€4.500 – €6.500) contra propuesta formal (SOW), factura comercial y transferencia bancaria. Los clientes corporativos no pagan consultoría con tarjeta de crédito en pasarela web. No invertir tiempo en endpoints de Stripe ni webhooks.

