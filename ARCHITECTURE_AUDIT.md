# ARCHITECTURE_AUDIT.md

## 1. Árbol de Carpetas Completo
A continuación se muestra la estructura principal del proyecto (se omiten las subcarpetas de herramientas internas y node_modules para mayor claridad):

```text
app/
  assets/
  components/
  dictionaries/
  [lang]/
    diagnosis/
    partners/
    pilars/
    plans/
    services/
email-templates/
lib/
  utils/
node_modules/
proxy/
public/
  images/
  professionals/
___pre_migration/
  assets/
  casa-normandia/
  css/
  de/
  es/
  fr/
  js/
  proposals/
```

## 2. Dependencias Activas
Las dependencias actuales según el archivo `package.json` son:

**Dependencies:**
- `@formatjs/intl-localematcher` (^0.8.5)
- `flag-icons` (^7.5.0)
- `gsap` (^3.15.0)
- `liquid-glass-react` (^1.1.1)
- `negotiator` (^1.0.0)
- `next` (16.2.4)
- `react` (19.2.4)
- `react-dom` (19.2.4)
- `server-only` (^0.0.1)
- `sonner` (^2.0.7)

**Dev Dependencies:**
- `@tailwindcss/postcss` (^4)
- `@types/negotiator` (^0.6.4)
- `@types/node` (^20)
- `@types/react` (^19)
- `@types/react-dom` (^19)
- `eslint` (^9)
- `eslint-config-next` (16.2.4)
- `tailwindcss` (^4)
- `typescript` (^5)

## 3. Compatibilidad de Servidor
**Estado:** **Requiere Backend Vivo (Node.js)**
El proyecto es una aplicación construida con Next.js utilizando App Router (carpeta `app/`). Aunque contiene interfaces de usuario, no es puramente estático (como un Frontend SPA estricto) ya que:
- Utiliza enrutamiento dinámico como `app/[lang]/` para la internacionalización (i18n).
- Está configurado para correr usando los comandos estándar `next build` y `next start`.
- No tiene habilitada la configuración de `output: 'export'` en `next.config.ts`.
Por lo tanto, requiere un servidor Node.js vivo para el Server-Side Rendering (SSR) y para manejar las peticiones y rutas de la aplicación en tiempo de ejecución.

## 4. Mapa de Rutas (`diagnostico.html` y `DACH.html`)
**Estado:** **Rutas NO Mapeadas (Broken Links)**
Al revisar el enrutador de Next.js y los archivos de configuración:
- **`diagnostico.html`**: El flujo de diagnóstico fue migrado a la ruta del nuevo App Router en `app/[lang]/diagnosis/page.tsx` (ejemplo de URL actual: `/es/diagnosis`). Sin embargo, **no hay redirecciones (redirects) activas en `next.config.ts`** para atrapar peticiones a `/diagnostico.html`. Si un usuario entra a esa ruta antigua, recibirá un error 404.
- **`DACH.html`**: Este archivo existía como variante en el antiguo sitio. En la migración actual a Next.js (dentro de `app/`), **no existe** una ruta o página dedicada mapeada para `DACH` ni tampoco existe redirección alguna. Intentar acceder a `/DACH.html` devolverá un error 404.
