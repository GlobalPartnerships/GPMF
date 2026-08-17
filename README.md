# Global Partnerships (GPMF)

Proyecto web construido con Next.js (App Router).

## Documentación y Colaboración

- Si eres **editor de contenido** (ej. Adriana), por favor lee la guía completa de contribución segura en: [CONTRIBUTING.md](./CONTRIBUTING.md).
- Si eres **desarrollador** o un **agente de IA**, por favor revisa el estado de la arquitectura en [ARCHITECTURE_AUDIT.md](./ARCHITECTURE_AUDIT.md) y asegúrate de seguir las reglas descritas en [rules.md](./rules.md).

## Ejecución Local

Para correr el proyecto localmente:

```bash
npm install
npm run dev
```

El servidor iniciará en http://localhost:3000.

## 🏗️ Cómo está estructurada tu Web (Para dueños)

Entender la arquitectura te dará el control real sobre qué pedir, dónde buscar y cómo hacer cambios en tu sitio. Imagina tu proyecto como una casa:

### 1. `app/[lang]` (El Mapa y las Habitaciones)
- **Su rol:** Controla las **URLs** de tu sitio (ej. `tusitio.com/es/about`).
- **Qué hay adentro:** Carpetas con los nombres de las páginas (ej. `partners`, `services`). Cada una tiene un archivo `page.tsx`.
- **Regla de oro:** Aquí **NO** se hacen cambios visuales. Solo se crean nuevas páginas o se decide qué componentes y diccionarios se van a cargar en cada ruta.

### 2. `app/components` (Los Muebles y Piezas Visuales)
- **Su rol:** Son los **bloques de construcción** visuales que no tienen un enlace propio en internet.
- **Qué hay adentro:** Botones, el menú de navegación (`Navbar.tsx`), el pie de página (`Footer.tsx`), y secciones completas como `TeamSection.tsx`.
- **Regla de oro:** Si quieres cambiar **cómo se ve algo** (colores, tamaños, disposición de fotos), debes buscar en esta carpeta. Las páginas (en `app/[lang]`) llaman a estos componentes para armarse.

### 3. `app/dictionaries` (Los Textos y Traducciones)
- **Su rol:** Centralizar **todo el texto** de la página web.
- **Qué hay adentro:** Archivos `.json` (ej. `es.json` para español, `en.json` para inglés).
- **Regla de oro:** Si quieres **cambiar lo que dice un texto**, corregir una falta de ortografía o agregar una nueva traducción, debes hacerlo **exclusivamente aquí**. Ni en las páginas ni en los componentes.

---

### 💡 Otros conceptos importantes a dominar:

* **TailwindCSS (Clases CSS):** Cuando ves cosas como `min-h-[400px]` o `bg-background text-foreground`, ese es el sistema de diseño (Tailwind). Te permite cambiar colores, tamaños y márgenes escribiendo clases en lugar de hacer complejos archivos CSS por separado.
* **Vercel (El Servidor en Vivo):** Es la plataforma que conecta tu código en GitHub con internet. Cada vez que guardas cambios y haces "Push" a tu rama principal en GitHub, Vercel actualiza automáticamente la web sin que tú tengas que subir archivos manualmente.
* **Componentes Dinámicos vs Estáticos:** Tu sitio está optimizado (SSR/RSC). Esto significa que las páginas se pre-cargan en el servidor para que sean ultrarrápidas, y solo las partes interactivas (como un menú desplegable) se ejecutan en el navegador de tu cliente.
