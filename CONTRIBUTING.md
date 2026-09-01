# Guía de Contribución y Edición de Contenido

Este documento establece las reglas de gobierno y el flujo de trabajo seguro para colaboradores y editores de contenido (ej. Adriana), asegurando que los cambios no rompan la aplicación en producción.

## 1. Conclusión y Recomendación Directiva

Para editar contenidos en Antigravity sin romper el trabajo del desarrollador en Vercel, debes aplicar una estrategia de aislamiento de ramas en Git (Branching Strategy) combinada con edición exclusiva de archivos de contenido.

Nadie debe editar directamente sobre la rama principal (`main`). Debes trabajar en una rama secundaria de textos (por ejemplo, `feature/textos-adriana`). Así, los cambios se suben a GitHub, se revisan visualmente en una vista previa automática de Vercel y solo se incorporan a la versión oficial cuando tú o el desarrollador hagan el merge del Pull Request.

## 2. Diagnóstico MECE: Las 4 Zonas de Blindaje Técnico

```text
┌────────────────────────────────────────────────────────────────────────┐
│             ESTRUCTURA DE TRABAJO SEGURO EN ANTIGRAVITY / VERCEL       │
├────────────────────────────────────────────────────────────────────────┤
│ 1. RAMAS: Trabajo aislado en feature/textos-adriana (cero main).      │
│ 2. ZONAS SEGURAS: Modificar únicamente diccionarios JSON y textos.     │
│ 3. ZONAS PROHIBIDAS: Bloquear package.json, next.config y layout.tsx.  │
│ 4. VERCEL PREVIEWS: Revisar el enlace temporal antes de aprobar merge. │
└────────────────────────────────────────────────────────────────────────┘
```

### A. Protocolo de Ramas (Git Branching)
- **Rama `main` (Producción)**: Es la rama que alimenta el sitio en vivo en Vercel. Queda **protegida**; nadie sube cambios directos ahí.
- **Rama `feature/textos-adriana` (Borrador)**: Es la rama de trabajo donde se hacen correcciones, ajustan traducciones (ES, EN, DE, FR) o actualizan servicios.

### B. Delimitación de Carpetas (Zonas Seguras vs. Zonas Prohibidas)

> [!TIP]
> **ZONA VERDE (Edición permitida para socias):**
> - Carpetas de diccionarios de traducción (ejemplo: `locales/es.json`, `messages/de.json` o carpetas de contenido estático).
> - Textos dentro de componentes específicos si están desacoplados.

> [!CAUTION]
> **ZONA ROJA (Prohibido tocar en Antigravity):**
> - `package.json` y `package-lock.json` (archivos de dependencias del sistema).
> - `next.config.js` / `next.config.ts` (configuraciones de servidor y enrutamiento).
> - `app/layout.tsx` o archivos de configuración de Tailwind/CSS.

### C. Despliegues de Previsualización (Vercel Preview Deployments)
Cada vez que se sube un cambio a la rama `feature/textos-adriana`, Vercel genera automáticamente un enlace temporal de prueba. Esto permite revisar la página en el navegador exactamente como la vería un cliente corporativo, sin alterar el sitio en vivo.

### D. Flujo de Aprobación (Pull Request & Merge)
Cuando se terminan los ajustes de contenido, se crea un Pull Request (PR) en GitHub. El equipo de desarrollo revisa que no haya errores de compilación y aprueba el merge hacia `main`.

## 3. Plan de Acción: Paso a Paso para Trabajar en Antigravity

Pasa esta guía al equipo antes de empezar las ediciones:

1. **Crear y posicionarse en la rama de contenidos:**
   Dar esta orden a Antigravity en el chat:
   > *"Antigravity, crea y cámbiame a una nueva rama llamada `feature/textos-adriana` para editar contenidos sin alterar main."*

2. **Instrucción de edición de contenidos:**
   > *"Antigravity, vamos a editar únicamente los textos de las páginas corporativas (Home, About, Services, Partners) en los 4 idiomas oficiales (ES, EN, DE, FR). No modifiques dependencias, archivos de configuración ni rutas del sistema."*

3. **Subir los cambios a GitHub para revisión:**
   > *"Antigravity, guarda los cambios, crea un commit con el mensaje 'COPY: Ajuste de textos y traducciones por Adriana' y sube esta rama a GitHub para abrir un Pull Request."*

4. **Aprobación final en GitHub:**
   Entras a GitHub, verificas la previsualización de Vercel y haces clic en `Merge pull request`.
