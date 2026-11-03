# Mapa Integral de Contenidos y Estructura Web — Global Partnerships (GPMF)

> **Documento Maestro de Copywriting, Arquitectura y Estado de Contenidos**  
> *Compilado para socias/directoras, editores de copy (ej. Adriana) y desarrolladores.*

---

## 🏗️ 1. ¿Cómo está estructurada tu Web? (Visión General)

El proyecto está construido sobre **Next.js (App Router)** y sigue una arquitectura modular en 3 capas bien diferenciadas:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        ARQUITECTURA DE LA WEB                          │
├────────────────────────────────────────────────────────────────────────┤
│ 1. app/[lang]/           → RUTAS / URLs (Home, Services, Plans, etc.)  │
│ 2. app/components/       → DISEÑO Y MAQUETACIÓN (Botones, Grillas, CSS)│
│ 3. app/dictionaries/     → TEXTOS Y TRADUCCIONES (ES, EN, DE, FR JSON) │
└────────────────────────────────────────────────────────────────────────┘
```

### Las Tres Capas Explicadas:
1. **Rutas (`app/[lang]/`):** Define las páginas que el usuario visita en el navegador:
   - `/` o `/es` → **Inicio (Home)**
   - `/es/pilars` → **Pilares Estratégicos**
   - `/es/services` → **Servicios Especializados**
   - `/es/plans` → **Planes y Modelos de Inversión**
   - `/es/partners` → **Red de Socios y Expertos**
   - `/es/diagnosis` → **Herramienta de Diagnóstico Estratégico**
2. **Componentes (`app/components/`):** Son las piezas visuales (muros, botones, tarjetas, animaciones). No deben tener textos fijos por regla arquitectónica.
3. **Diccionarios (`app/dictionaries/`):** Es el repositorio centralizado de contenidos. Cada página tiene sus archivos por idioma (`es.json`, `en.json`, `de.json`, `fr.json`).

---

## ❓ ¿Ya existían estos textos o se están creando ahora?

**Respuesta Directa:**
1. **SÍ, ya existían en el código**, pero estaban "ocultos" para un lector no técnico:
   - Fragmentados en más de **15 archivos de formato JSON** dentro de `app/dictionaries/`.
   - Fragmentados en código de componentes JSX (en la sección de Servicios hay textos actualmente embebidos en inglés).
   - En el archivo histórico de la web previa (`___pre_migration/es/`).
2. **NO existían compilados en un documento legible (.md)**:
   - No había un archivo Markdown que consolidara toda la redacción de la web de principio a fin para poder leerla, corregirla, validarla o presentarla sin tener que abrir archivos de programación.
   - Este documento reúne **el 100% de los textos activos en español** de toda la plataforma.

---

# 📄 2. Textos Completos de la Web (Página por Página)

---

## 🌐 Módulo Global: Navegación y Pie de Página (`layout`)

### 🧭 Menú de Navegación (Navbar)
- **Marca:** GPMF (Global Partnerships Multidisciplinary Firm)
- **Enlaces de Menú:**
  - **Inicio:** "Inicio"
  - **Pilares:** "Pilares"
  - **Servicios:** "Servicios"
  - **Planes:** "Planes"
  - **Socios:** "Socios"
  - **Diagnóstico:** "Diagnóstico"
- **Idiomas Soportados:** Español (ES), Inglés (EN), Alemán (DE), Francés (FR).
- **Acciones de Usuario:** "Iniciar sesión" / "Cerrar sesión"

### 🦶 Pie de Página (Footer)
- **Nombre Corporativo:** "Global Partnerships Multidisciplinary Firm"
- **Lema / Tagline:** "Definiendo la próxima generación de alianzas estratégicas globales e inteligencia intercultural."
- **Sedes y Presencia:** "Bogotá · Clermont-Ferrand · Montreal"
- **Tipografía y Créditos:** "Tipografía Playfair & Inter · Bogotá, CO"
- **Derechos:** "Todos los derechos reservados"
- **Columnas de Enlaces del Footer:**
  - **Explorar:** Inicio · Principios · Metodología · Trabajo Selecto
  - **Estudio:** Equipo · Manifiesto · Prensa · Carreras
  - **Legal:** Política de Privacidad · Términos de Servicio · Aviso Legal

---

## 🏠 Página 1: Inicio / Home (`/`)

### 1.1 Hero Section (Cabecera Principal)
- **Pretítulo (Eyebrow):** "Estrategia Global · Est. 2019"
- **Titular Principal:** "Navegando la complejidad global con **inteligencia estratégica** y precisión."
- **Descripción:** "GPMF provee las herramientas sofisticadas y la asesoría requerida para empresas que exigen precisión en cada mercado — y paciencia en cada alianza."
- **Botón Primario (CTA):** "Planes Estratégicos"
- **Botón Secundario:** "Diagnóstico Gratuito"
- **Métricas Destacadas:**
  - **10+**: Años de experiencia
  - **12**: Consultores senior
  - **3**: Oficinas globales
- **Regiones Activas:** Norteamérica • Latinoamérica • Europa
- **Nota al pie del Hero:** "Operaciones activas en tres regiones" | *Edición N°XII — Boletín Trimestral*

### 1.2 Credenciales y Validación (Trusted By)
- **Etiqueta:** "Nuestra Experiencia"
- **Descripción:** "Rigor técnico, operativo y financiero avalado por organizaciones globales de primer nivel."
- **Marcas / Instituciones Aliadas:** Colciencias • INRAE (Fr) • CEMarin • AgriFoodTEF • DAAD (DE) • Universidad Nacional de Colombia

### 1.3 Los 3 Pilares en la Home (Principles)
- **Pretítulo:** "Nuestra Práctica"
- **Título de Sección:** "Tres servicios **que impulsan a nuestros socios más allá de las fronteras.**"

#### Pilar [01]: Internacionalización y Alianzas Estratégicas
- **Descripción:** Ayudamos a las empresas a expandirse y aterrizar (soft landing) entre Europa y América Latina, construyendo alianzas sólidas y convirtiendo la fricción cultural en una ventaja competitiva duradera.
- **Entregables:** Entrada al mercado • Alianzas estratégicas • Soft landing

#### Pilar [02]: Consultoría en IA y Analítica
- **Descripción:** Transformamos datos dispersos en decisiones estratégicas para pymes y ONG de alto potencial — del diagnóstico de madurez a la arquitectura de datos y la automatización.
- **Entregables:** Estrategia de IA • Analítica de datos • Automatización

#### Pilar [03]: Gestión Intercultural e Interdisciplinaria
- **Descripción:** Fortalecemos la capacidad de su equipo para colaborar, innovar y liderar en entornos globales, convirtiendo la diversidad cultural y técnica en su mayor ventaja.
- **Entregables:** Formación de equipos • Liderazgo • Cultura


### 1.4 Metodología de Trabajo (Methodology)
- **Pretítulo:** "Metodología"
- **Título:** "Nuestra **especialidad.**"
- **Descripción:** "Cuatro pasos deliberados que damos para ayudar a nuestros socios a leer, entrar y conquistar sus mercados objetivo — desde la evaluación inicial hasta una entrega medible."

#### Paso 01: Evaluar
Inmersión profunda en tu posición actual, panorama de mercado y entorno competitivo.

#### Paso 02: Estrategizar
Aplicamos herramientas analíticas de alta fidelidad para mapear oportunidades, riesgos y rutas de alianza.

#### Paso 03: Ejecutar
Desplegamos nuestra red de socios locales y puentes culturales para abrir mercados.

#### Paso 04: Entregar
Generamos resultados medibles y presencia sostenible en el mercado para un crecimiento duradero.


- **Testimonio Destacado:**
  > "GPMF es la firma poco común que respeta tu negocio como un organismo vivo — no como una hoja de cálculo. Después de quince años en comercio internacional, no cambié de socios. Cambié de perspectiva."  
  > *— H. Marlowe, Director, ProColombia*

### 1.5 Casos de Estudio y Resultados (Case Studies)
- **Pretítulo:** "Trabajo Selecto"
- **Título:** "Casos de éxito."

#### N° 01 — Casa Normandia (*Entrada al mercado · 2023*)
- **Detalle:** Una exploración de entrada al mercado y puente cultural entre Colombia y Francia, ejecutada a lo largo de nueve meses de colaboración estratégica.
- **Acción:** [Explorar proyecto](https://globalpartnerships.github.io/casa-normandia/index.html)

#### N° 02 — Health Care Hospital (*Salud · 2024*)
- **Detalle:** Redefiniendo la comunicación sanitaria internacional mediante un lenguaje estratégico minimalista y una grilla operativa rigurosa.
- **Acción:** [Explorar proyecto](#)

#### N° 03 — The Art of Precision (*Estrategia · 2023*)
- **Detalle:** Un manifiesto sobre consultoría estratégica en la era de la transformación digital — ejecutado como un compromiso limitado en 3 mercados.
- **Acción:** [Explorar proyecto](#)


### 1.6 Llamado a la Acción Final (Legacy Section)
- **Pretítulo:** "Comenzar"
- **Título:** "Únete al **legado.**"
- **Descripción:** "Entra en una alianza donde tu visión es tratada con la reverencia que merece. Únete a un círculo exclusivo de empresas que transforman ambición en presencia internacional duradera."
- **Placeholder:** "tu@email.com" | **Botón:** "Comenzar"
- **Nota:** "Invitaciones abiertas trimestralmente · Actualmente aceptando solicitudes de primavera"
- **Tríptico:**
  - **N° 01**: Pasado (Herencia)
  - **N° 02**: Presente (Práctica)
  - **N° 03**: Futuro (Legado)

---

## 🏛️ Página 2: Pilares Estratégicos (`/pilars`)

- **Pretítulo:** "Fundamento"
- **Titular:** "Nuestros principios."
- **Subtítulo:** "Tres convicciones que dan forma a cada compromiso que asumimos — desde la primera auditoría hasta la transformación final."
- **Separador:** "Qué sigue"

### Pilar 01: Gobernanza Estratégica (*Principio Uno*)
- **Tesis Central:** "Diseñamos arquitecturas de cumplimiento y flujos de trabajo auditables que dan a instituciones internacionales, consorcios científicos y gestores de fondos la trazabilidad financiera necesaria para operar con cero hallazgos fiscales."
- **Capacidades y Entregables:**
  - Ingeniería de procesos institucionales
  - Elegibilidad para fondos internacionales
  - Arquitectura de cumplimiento
  - Sistemas de trazabilidad financiera
- **Botón de Acción:** "Explorar enfoque"

### Pilar 02: Operaciones Tecnológicas (*Principio Dos*)
- **Tesis Central:** "Construimos motores operacionales — dashboards en tiempo real, flujos RevOps automatizados y sistemas BI — que eliminan la intervención humana en el reporting y recuperan la capacidad estratégica del equipo."
- **Capacidades y Entregables:**
  - Dashboards de inteligencia de negocio
  - Automatización de flujos RevOps
  - Digitalización de procesos
  - Recuperación del 40% del tiempo estratégico
- **Botón de Acción:** "Nuestra metodología"

### Pilar 03: Branding Institucional (*Principio Tres*)
- **Tesis Central:** "Transformamos la presencia digital en escaparates de clase mundial para redes de investigación, consultoras y entidades corporativas — gestionando identidad, ecosistemas web y narrativa multimedia de principio a fin."
- **Capacidades y Entregables:**
  - Gestión de identidad de extremo a extremo
  - Diseño de ecosistemas web
  - Producción multimedia y audiovisual
  - Posicionamiento ante actores globales
- **Botón de Acción:** "Ver casos de estudio"


### CTA Final de la Página de Pilares
- **Pretítulo:** "Explorar"
- **Título:** "Conocé nuestros planes"
- **Descripción:** "Descubrí soluciones institucionales a medida y encontrá el camino que se ajusta a tu visión."
- **Diferenciadores:**
  - **Alcance Global:** "Extendiendo la excelencia operacional a través de continentes, conectando instituciones con resultados en todo el mundo."
  - **Detalle Artesanal:** "Cada compromiso recibe la atención cuidadosa y considerada que transforma la complejidad en claridad."

---

## 🛠️ Página 3: Servicios (`/services`)

### 3.1 Cabecera de Servicios (Hero)
- **Pretítulo:** "undefined"
- **Título:** "undefined **undefined**"
- **Subtítulo:** "undefined"

> ⚠️ **Nota Editorial y de Estado:**  
> En el código actual, los 3 bloques de servicio fueron maquetados inicialmente en inglés dentro de `app/components/services/sections/`. Aquí se presentan con su texto exacto y su traducción oficial basada en los documentos pre-migración:

### 3.2 Servicio 01: Internacionalización y Alianzas Estratégicas
- **Número:** 01
- **Título:** Internationalization and Strategic Alliances (Internacionalización y Alianzas Estratégicas)
- **Enfoque:** "Expanding businesses globally, building bridges between Europe and Latin America."
- **Tesis de Trabajo:** *"A successful market entry is engineered, not improvised"* (Una entrada al mercado exitosa se diseña con ingeniería, no se improvisa).
- **Cuerpo:**
  > "Ayudamos a su empresa a construir alianzas sólidas y asegurar un soft landing exitoso — tanto desde y hacia Europa como hacia América Latina. Desde benchmarking e inteligencia contextual hasta montaje operativo y facilitación de socios, convertimos las diferencias culturales y regulatorias en ventajas competitivas duraderas. Nuestro trabajo se mantiene global e interdisciplinario, intercultural por diseño, y anclado en KPIs claros y medibles."
- **Metodología de Ciclo:** *"Backward and forward planning, in short cycles"* (Planificación hacia atrás y hacia adelante en ciclos ágiles y cortos).

### 3.3 Servicio 02: Consultoría en Datos e Inteligencia Artificial
- **Número:** 02
- **Título:** AI & Analytics Consulting (Consultoría en Analítica e IA)
- **Enfoque:** "Transforming data into strategic decisions for high-potential SMEs and NGOs. Systems for small and mid level enterprises."
- **Tesis de Trabajo:** *"From scattered data to confident decisions"* (De datos dispersos a decisiones con total certeza).
- **Cuerpo:**
  > "Convertimos datos manuales y dispersos en activos estratégicos para PyMEs y ONGs de alto potencial. A través de IA aplicada y analítica, hacemos accesible el conocimiento que impulsa mejores decisiones — sin presupuestos gigantescos ni complejidad corporativa innecesaria."
- **El Motor Operativo (The operational engine):**
  > "Migramos a las organizaciones desde hojas de cálculo manuales hacia sistemas centralizados de alto rendimiento: tableros de control en tiempo real, flujos automatizados de operaciones (RevOps) y reportería lista para la toma de decisiones. Los equipos recuperan hasta un 40% de su tiempo estratégico."

### 3.4 Servicio 03: Gestión Intercultural e Interdisciplinaria
- **Número:** 03
- **Título:** Intercultural and Interdisciplinary Management (Gestión Intercultural e Interdisciplinaria)
- **Enfoque:** "Strengthening internal capabilities to collaborate, innovate, and lead in global environments."
- **Pregunta Disparadora:** *"Does your team really speak the same language?"* (¿Realmente habla tu equipo el mismo idioma?).
- **Cuerpo:**
  > "Los silos, el choque cultural, el liderazgo tradicional y la fuga de talento erosionan silenciosamente a los equipos globales. Fortalecemos la capacidad de su gente para colaborar, innovar y liderar a través de fronteras — convirtiendo la diversidad técnica y cultural en su mayor ventaja competitiva."
- **Metodología Propia:** *"Collective intelligence, never canned answers"* (Inteligencia colectiva, nunca respuestas enlatadas).
  > Método en 4 movimientos: Auditoría cultural → Diseño de programa a medida → Entrenamiento vivencial (simulaciones, casos reales) → Transferencia de herramientas in-house para que la capacidad se quede en la organización.

---

## 💎 Página 4: Planes y Tarifas (`/plans`)

### 4.1 Encabezado y Navegación
- **Pretítulo:** "Precios"
- **Título:** "Elegí tu plan."
- **Subtítulo:** "Soluciones estratégicas a medida para equipos de cualquier escala — desde empresas en crecimiento hasta compromisos personalizados."
- **Pestañas:** Empresarial (`Empresarial`) | Personalizado (`Personalizado`)
- **Texto Lateral:** "Global Partnerships & Multidisciplinary Firm"
- **Llamado a la Acción General:** "Contactanos"

### 4.2 Los 4 Modelos de Trabajo / Planes

#### 1. GPMF DIAGNOSTIC (`diagnostic`)
- **Categoría:** standard
- **Subtítulo:** "Express Business Readiness Audit with automated analysis"
- **Inversión:** **$1,000** (*USD / One-time*)
- **Alcance y Entregables:**
  - Extended diagnostic questionnaire access
  - Maturity Report (PDF) in 48h
  - 30-min session to review findings

#### 2. STRATEGIC SPRINT (`strategic-sprint`)
- **Categoría:** standard
- **Subtítulo:** "Custom Internationalization or Data Roadmap design"
- **Inversión:** **$1,500** (*USD / One-time*)
- **Alcance y Entregables:**
  - 2 intensive consulting sessions (1h each)
  - Custom Strategic Playbook (Execution Map)
  - Priority implementation timeline

#### 3. TACTICAL RETAINER (`tactical-retainer`)
- **Categoría:** standard
- **Subtítulo:** "Continuous operational support with dedicated management"
- **Inversión:** **$2,500** (*USD / Monthly*)
- **Alcance y Entregables:**
  - Management of 1 specific process (partner search, data cleanup, etc.)
  - Bi-weekly follow-up meetings
  - Monthly progress reports

#### 4. WHITE GLOVE SERVICE (`executive-partner`)
- **Categoría:** custom
- **Subtítulo:** "GPMF Executive Partner"
- **Inversión:** **Custom** (*Yearly from $50,000 USD*)
- **Alcance y Entregables:**
  - Servicios fraccionales C-Level y Soluciones Enterprise
  - End-to-end strategic direction for complex organizations
  - Operational governance
  - International donor protection

---

## 🤝 Página 5: Red de Socios y Colaboradores (`/partners`)

### 5.1 Hero Section
- **Pretítulo:** "Alianzas Estratégicas"
- **Titular:** "Red de Especialistas." *(Énfasis: "Un Ecosistema que amplifica nuestro impacto.")*
- **Descripción:** "Creemos en la inteligencia colectiva. GPMF opera bajo un modelo de red multidisciplinar de expertos. Activamos consultores senior especializados según la necesidad específica de cada proyecto, vinculando el talento exacto que su reto requiere."

### 5.2 Red de Profesionales y Especialistas Asociados
- **Pretítulo:** "Alianzas Estratégicas"
- **Título:** "Red de Especialistas"
- **Subtítulo:** "Talento experto que integramos bajo demanda según el reto de cada proyecto."

#### Natalia Sánchez — *Project Manager en Tech & Data Analytics*
Experta en gestión de proyectos tecnológicos y análisis de datos para el mercado canadiense. Lidera iniciativas de transformación digital con enfoque en resultados medibles.

#### David Salazar — *Arquitecto & Experto en Diseño*
Arquitecto experto en diseño arquitectónico internacional y procesos de transformación para el sector de Bienes Raíces y Hospitalidad.

#### Matthias Halleux — *Asesor Estratégico: Retail Francés y Acceso a Mercado*
Asesor estratégico en acceso a mercado y retail Francia, negociaciones y expansión de territorio. +15 años de experiencia en el ecosistema de Retail y Gran Consumo (FMCG) en Francia.

#### Nidian Díaz — *Auditoría y Estructuración Financiera*
Especialista en contabilidad corporativa y auditoría estratégica. Asegura que los procesos de expansión y nuevos modelos de negocio tengan un respaldo financiero impecable.

#### Diego Quintero — *Politólogo Experto en Seguridad y Política Pública*
Analista político especializado en seguridad y políticas públicas. Proporciona contexto estratégico para proyectos que requieren comprensión del entorno político y regulatorio.

#### Esperanza Vargas — *Desarrollo Agrícola & Sostenibilidad*
Visionaria del sector rural y agropecuario a través del proyecto La Finca La Granja. Aporta el conocimiento técnico y de terreno necesario para proyectos de inversión y desarrollo en el sector agro.

#### Jorge Ordoñez — *Estratega de Imagen de Marca & Dirección de Arte*
Diseñador gráfico con más de 16 años de trayectoria en América y Europa. Especialista en traducir conceptos corporativos en identidades visuales innovadoras, posicionando marcas globalmente.

#### Carlos Santiusti — *Arquitectura de Datos e IA*
Ingeniero de sistemas, arquitecto de datos y analista de negocios. Lidera el despliegue de soluciones de inteligencia artificial para corporaciones.

#### Aristides Sánchez — *Desarrollo de Proyectos & Hospitalidad*
Líder detrás del posicionamiento de Casa Normandía. Experto en el desarrollo de ecosistemas, gestión de propiedades con valor patrimonial y estrategias de hospitalidad de alto nivel.

#### David Junco — *Back-End Developer*
Desarrollador especializado en ecosistemas tecnológicos y bases de datos. Diseña y despliega arquitecturas de software eficientes utilizando lenguajes como Python y TypeScript.

#### Fany Barrera — *Finanzas y Contabilidad*
Contadora pública especializada en la estructuración financiera sólida para proyectos de expansión y operaciones internacionales.

#### Anyelin Pérez — *Business Intelligence — Reingeniería de procesos y eficiencia operativa*
Especialista en inteligencia de negocios y optimización de procesos. Transforma datos en insights estratégicos y mejora la eficiencia operativa corporativa.


### 5.3 Partners y Firmas Corporativas Asociadas
- **Pretítulo:** "Firmas Asociadas"
- **Título:** "Partners y Firmas Corporativas"
- **Subtítulo:** "Instituciones especializadas que integramos según el proyecto."

- **Audiconet**: Firma especializada en auditoría financiera y consultoría contable para empresas internacionales.
- **Aparato**: Agencia de desarrollo de software y soluciones tecnológicas a medida para empresas.
- **Factor Visual**: Estudio de diseño gráfico y branding especializado en identidad visual corporativa.
- **Epicerí Gourmet**: Empresa especializada en productos gourmet y consultoría gastronómica de alta calidad.

### 5.4 Equipo Directivo / Leadership Team
- **Pretítulo:** "El Estudio"
- **Título:** "Conoce al equipo GPMF."
- **Descripción:** "Nuestros especialistas reúnen décadas de sabiduría colectiva en negocios internacionales — estrategas, analistas, mediadores culturales y ex funcionarios comerciales trabajando bajo un mismo techo."
- **Ubicación:** "Estudio · Bogotá, CO"
- **Integrantes:**
  - **Marcela Sánchez Vargas** — *Directora Fundadora · Operaciones Estratégicas*
  - **Adriana Sánchez Halleux** — *AgTech y Estrategia de Innovación*

### 5.5 Llamado a la Acción (Postulación de Alianzas)
- **Pretítulo:** "Colaboración Extendida"
- **Título:** "Una red viva para proyectos de alto riesgo y alto impacto."
- **Descripción:** "Activamos squads según el reto: data scientists, expertos legales, diplomáticos científicos, storytellers estratégicos. Todo integrado bajo el mismo playbook."
- **Puntos Clave:**
  - Equipos transnacionales coordinados en tres zonas horarias.
  - Contratos flexibles: pod, retainer o aceleración por sprint.
  - Due diligence cultural y técnica antes de cada partnership.
- **Caja de Alianzas:**
  - **Título:** "¿Querés sumarte como aliado?"
  - **Descripción:** "Buscamos firmas y profesionales con ADN boutique y enfoque en resultados. Ciencia, tecnología, data, diplomacia y expansión."
  - **Botón Postular Alianza:** "Postular alianza"
  - **Botón Agendar Conversación:** "Agendar conversación"

---

## 🩺 Página 6: Diagnóstico Estratégico (`/diagnosis`)

### 6.1 Bienvenida al Diagnóstico (Hero)
- **Título:** "Diagnóstico Estratégico"
- **Descripción:** "Responde estas 5 preguntas clave para identificar oportunidades de crecimiento y alinear tu visión con nuestra experticia."

### 6.2 Preguntas del Formulario de Evaluación
#### Pregunta 1: 1. ¿Cuál es el principal desafío estratégico a resolver?
*Opciones de Respuesta:*
  - [ ] Internacionalización (Nuevos mercados/Exportación)
  - [ ] Inteligencia de Datos & IA (Toma de decisiones)
  - [ ] Gestión Intercultural (Equipos Globales)
  - [ ] Estrategia Corporativa (Hoja de ruta de expansión)

#### Pregunta 2: 2. ¿En qué etapa se encuentra el proyecto?
*Placeholder:* "Selecciona una opción..."
*Opciones de Respuesta:*
  - [ ] Exploración — Solo idea / Buscando viabilidad
  - [ ] Planeación — Tenemos presupuesto, falta ruta
  - [ ] Ejecución — Ya inició, necesitamos orden
  - [ ] Escalamiento — Optimización y crecimiento

#### Pregunta 3: 3. ¿Qué obstáculo te impide dormir tranquilo respecto a este proyecto?
*Placeholder:* "Sé específico. Ej: 'Mi equipo no se adapta a la cultura alemana'..."

#### Pregunta 4: 4. ¿Qué tan urgente es la solución?
*Opciones de Respuesta:*
  - [ ] Crítico (Este mes)
  - [ ] Alto (Q1/Q2)
  - [ ] Medio (Próximo año)
  - [ ] Bajo (Curiosidad)

#### Pregunta 5: 5. Rango de Inversión Considerado
*Nota:* Esto nos ayuda a asignar el nivel de consultor adecuado.
*Placeholder:* "Selecciona el rango..."
*Opciones de Respuesta:*
  - [ ] < $5,000 USD (Talleres / Semilla)
  - [ ] $5,000 – $20,000 USD (Consultoría Estándar)
  - [ ] $20,000 – $50,000 USD (Expansión Core)
  - [ ] $50,000 USD+ (Soluciones Corporativas)
  - [ ] Por determinar


### 6.3 Campos de Contacto Final
- **Sección:** "Tus Datos"
- **Campos Solicitados:**
  - Nombre: "Nombre Completo"
  - Correo: "Correo Corporativo"
  - Empresa / Enlace: "LinkedIn o Web de la Empresa"

### 6.4 Envío y Confirmación
- **Botón de Envío:** "SOLICITAR SESIÓN DE DIAGNÓSTICO"
- **Estado de Envío:** "Enviando..."
- **Compromiso / Disclaimer:** "Al enviar, nuestros socios revisarán tu perfil en 24h."
- **Pantalla de Éxito:**
  - **Título:** "¡Diagnóstico Recibido!"
  - **Mensaje:** "Analizaremos tu radar. Si hay alineación estratégica, nos pondremos en contacto en 24–48h."
  - **Enlace:** "Volver al Inicio | Back to Home"

---

## 📝 3. Resumen y Próximos Pasos Recomendados

1. **Edición Segura de Textos:**
   - Para modificar cualquier texto en español, el archivo correspondiente está en `app/dictionaries/<seccion>/es.json`.
   - Si se edita en español, se debe reflejar también en `en.json`, `de.json` y `fr.json` para que el selector de idiomas se mantenga coherente.
2. **Pendiente Técnico en Servicios (`/services`):**
   - Extraer los textos que hoy están fijos en inglés en los componentes `Section1.tsx`, `Section2.tsx`, `Section3.tsx` hacia `app/dictionaries/services/` para que también sean traducibles y editables desde archivos JSON.
3. **Control de Versiones:**
   - Recordar trabajar siempre en una rama como `feature/textos-adriana` y verificar en Vercel Preview antes de hacer merge a la rama principal `main`.
