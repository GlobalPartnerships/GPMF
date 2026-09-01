# Integración de Pagos (Stripe) - Roadmap y Arquitectura Backend

Este documento detalla la estrategia acordada para que el equipo de desarrollo integre la pasarela de pagos (Stripe) en la aplicación GPMF (Next.js App Router).

## Contexto
Originalmente, los botones de los planes apuntaban a URLs directas de `checkout.stripe.com`. Por motivos de seguridad y flexibilidad, se migrará hacia una solución gestionada desde el servidor.

## Arquitectura Profesional Recomendada (App Router)

### A. Route Handlers (APIs internas de Next.js)
El botón de "Comprar" o "Suscribirse" debe hacer un `POST` a una ruta interna de la aplicación (por ejemplo, `/api/checkout`).
- **¿Por qué?** Los precios y los identificadores de los productos en Stripe (`price_...`) deben mantenerse ocultos en el servidor utilizando variables de entorno (ej. `STRIPE_SECRET_KEY`). Así se evita cualquier manipulación de precios desde el cliente.

### B. Generación de Checkout Session
1. El backend (dentro de `/api/checkout/route.ts`) usará el SDK oficial de `stripe-node`.
2. Se creará una sesión de pago (`stripe.checkout.sessions.create`) basada en el identificador del plan enviado por el cliente (Diagnostic, Sprint o Retainer).
3. La API devolverá la URL segura generada por Stripe al frontend.
4. El frontend redirigirá al usuario a la pasarela de pago.

### C. Webhooks para Fulfillment
Una vez el usuario completa el pago, Stripe debe comunicarse con nuestro servidor de forma asíncrona enviando un Webhook a una ruta dedicada (ej. `POST /api/webhook/stripe`).
- **¿Para qué?** Para automatizar los procesos de cumplimiento (fulfillment):
  - Habilitar el acceso a reportes o herramientas (ej. cuestionario extendido).
  - Enviar recibos automatizados o correos de bienvenida usando el servicio de emails (Nodemailer, SendGrid, etc.).
  - Registrar la transacción en la base de datos de clientes si existe.
  - Notificar internamente al equipo (Slack, Email) para agendar el *Strategic Sprint*.

## Tareas para el Backend Developer
- [ ] Crear cuenta en Stripe y configurar entorno de Test y Production.
- [ ] Crear los Productos y Precios en el dashboard de Stripe y obtener los `price_ID`.
- [ ] Instalar la librería `stripe` (`npm install stripe`).
- [ ] Configurar las variables de entorno (`STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`).
- [ ] Crear el endpoint `app/api/checkout/route.ts` para crear la sesión de pago.
- [ ] Modificar los botones de la UI (en `app/components/plans/PlansGrid.tsx` o componentes relacionados) para que consuman la API en el evento `onClick`.
- [ ] Crear el endpoint `app/api/webhook/stripe/route.ts` para escuchar los eventos `checkout.session.completed` y asegurar su firma criptográfica.
