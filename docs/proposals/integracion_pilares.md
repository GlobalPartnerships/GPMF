# Propuesta de Integración: Pilares Clásicos (Gobernanza, Tecnología, Branding)

Este documento describe la propuesta arquitectónica para migrar e integrar la información detallada de los Pilares 1, 2 y 3 (provenientes del antiguo `about.html`) hacia la nueva arquitectura en Next.js, respetando el diseño moderno, la internacionalización y **los recursos multimedia (imágenes y videos)**.

## ⚠️ Puntos Críticos para Discusión del Equipo

1. **Revisión de Estructura de Datos y Multimedia:** 
   El diseño antiguo era muy visual. Tenía diagramas de flujo (Pilar 1), fotos de dashboards (Pilar 2) y **un video de YouTube (CEMarin) junto con mockups de la web (Pilar 3)**. El diseño actual de Next.js (`PrinciplesSection.tsx`) es puramente tipográfico (solo texto). 
   *Decisión:* Si queremos mantener el impacto visual, **necesitamos rediseñar el componente `PrinciplesSection`** para que soporte una galería de imágenes o reproductores de video (embed de YouTube).

2. **¿Diseño Tipográfico vs. Diseño Multimedia?** 
   ¿Prefieren que mantengamos el diseño limpio de la nueva web (y resumamos los casos de éxito solo en texto), o que se rediseñe la sección para que cada Pilar pueda mostrar su imagen/video correspondiente al lado del texto?

3. **¿Reemplazo o Adición?** 
   Actualmente el sitio en producción tiene los "Principios de Aurelius". ¿Borramos esos principios y colocamos estos 3 pilares en su lugar?

---

## Cambios Propuestos (A nivel técnico)

### 1. Actualización de Diccionarios (El Texto + Assets)

Para integrar la información sin romper el soporte multi-idioma, los textos y los enlaces a los videos/imágenes deben extraerse e insertarse en los archivos JSON. Se agregará una llave `media` para que el código sepa qué mostrar.

**Ejemplo de modificación en `app/dictionaries/home/es.json`**:
```json
"principles": {
  "eyebrow": "Nuestra Base",
  "headline": "Nuestros",
  "headlineAccent": "Pilares",
  "items": [
    {
      "number": "01",
      "title": "Gobernanza Estratégica y Blindaje Legal",
      "description": "Diseño y ejecución de infraestructura administrativa, legal y financiera para el consorcio CEMarin. Gestión de fondos con modelo 'Cero Hallazgos'.",
      "media": { "type": "image", "src": "/Assets/Flow.png" },
      "deliverables": [
        "Ingeniería de procesos institucionales",
        "Estructuración de flujos auditables"
      ]
    },
    {
      "number": "02",
      "title": "Operaciones Habilitadas por Tecnología",
      "description": "Transformación digital de operaciones manuales hacia sistemas centralizados de alto rendimiento (Business Intelligence).",
      "media": { "type": "image", "src": "/Assets/RevOps.png" },
      "deliverables": [
        "Desarrollo In-House de tableros de control",
        "Implementación de RevOps automatizados"
      ]
    },
    {
      "number": "03",
      "title": "Branding Institucional (La Vitrina Global)",
      "description": "Posicionamiento de redes de investigación ante donantes y embajadas. Dirección integral de la identidad institucional End-to-End.",
      "media": { "type": "video", "url": "https://www.youtube.com/watch?v=K30yVPsH-Xo" },
      "deliverables": [
        "Arquitectura de ecosistemas web",
        "Producción audiovisual y narrativa estratégica"
      ]
    }
  ]
}
```

### 2. Rediseño del Componente de Principios

Como los diccionarios ahora tendrán recursos multimedia (fotos y videos), el componente visual debe actualizarse para poder renderizarlos.

**Modificaciones en `app/components/home/PrinciplesSection.tsx`**:
- Expandir la interfaz TypeScript para aceptar las nuevas propiedades (`media: { type: string, src?: string, url?: string }`).
- Rediseñar el JSX para que, si el pilar tiene un `media.type === 'video'`, renderice un `<iframe>` de YouTube embebido.
- Si tiene un `media.type === 'image'`, renderice el componente `<Image>` de Next.js mostrando los dashboards o diagramas.
