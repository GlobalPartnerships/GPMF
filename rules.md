# Reglas de Proyecto (Project Rules)

Estas reglas deben ser seguidas estrictamente por cualquier agente de IA (como Antigravity) o desarrollador que opere en este repositorio.

## 1. Zonas de Edición (Zonas Seguras vs. Zonas Prohibidas)

Al realizar tareas de edición de contenido, traducciones o ajustes menores (especialmente si es solicitado por colaboradores no desarrolladores), debes respetar estrictamente el siguiente esquema de zonas:

**ZONA VERDE (Edición permitida para tareas de contenido):**
- Carpetas de diccionarios de traducción (ejemplo: locales/es.json, messages/de.json o carpetas de contenido estático).
- Textos dentro de componentes específicos si están desacoplados.

**ZONA ROJA (Prohibido tocar durante ediciones de contenido):**
- `package.json` y `package-lock.json`
- `next.config.js` / `next.config.ts`
- `app/layout.tsx` o archivos de configuración de Tailwind/CSS.

## 2. Flujo de Trabajo (Git Branching)
- **Prohibido:** Modificar, hacer commit o empujar (push) directamente a la rama `main`. La rama `main` es sagrada y está conectada a producción en Vercel.
- **Permitido:** Crear siempre una rama nueva para cualquier cambio (ejemplo: `feature/textos-[nombre]`, `fix/[problema]`, `chore/[tarea]`).
- Los cambios siempre deben integrarse a través de un Pull Request en GitHub para permitir a Vercel generar una URL de previsualización (Preview Deployment) antes del Merge.
