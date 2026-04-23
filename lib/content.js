// ============================================
// PORTFOLIO CONTENT — Nicolás Videla Petito
// ============================================

export const PERSONAL = {
  name: "Nicolás Videla Petito",
  shortName: "Nico Petito",
  role: { es: "Desarrollador Web", en: "Web Developer" },
  location: "Mar del Plata, Argentina",
  whatsapp: "54922361724294",
  email: "videlapetito@gmail.com",
  github: "https://github.com/nicopetito",
  linkedin: "https://linkedin.com/in/nicolasvidela",
}

export const BIO = {
  es: {
    headline: "Construyo productos digitales que resuelven problemas reales.",
    aboutHeadline: "De no saber qué era Ctrl+C a plataformas completas en producción.",
    bio: "Tengo 22 años, soy de Mar del Plata y me recibí de Técnico en Programación en la UTN. Mi tesis fue Equals — un gestor de finanzas personales — calificada sobresaliente y expuesta frente a toda la facultad. Hoy trabajo 8 horas diarias en YPF y construyo software en cada rato libre que encuentro.",
    bio2: "Entré a la UTN en 2023 sin saber qué era Ctrl+C. En tres años pasé de no entender un for loop a desarrollar plataformas completas con panel de administración, base de datos, autenticación y deploy en producción. Lo que más me atrae del desarrollo es lo amplio que es: un día resuelvo lógica de negocio para un club deportivo, al otro armo un CMS para una empresa industrial. Cada proyecto es un mundo nuevo. Mi objetivo es claro: vivir de esto.",
    shortBio: "Desarrollador web · UTN · React, Next.js, Supabase · Mar del Plata",
  },
  en: {
    headline: "I build digital products that solve real problems.",
    aboutHeadline: "From not knowing what Ctrl+C was to full platforms in production.",
    bio: "I'm 22, from Mar del Plata, and I graduated as a Programming Technician from UTN. My thesis was Equals — a personal finance manager — graded outstanding and presented to the entire faculty. Today I work 8 hours a day at YPF and build software in every free moment I find.",
    bio2: "I joined UTN in 2023 without knowing what Ctrl+C was. In three years I went from not understanding a for loop to building complete platforms with admin panels, databases, authentication, and production deploys. What draws me most to development is how broad it is: one day I'm solving business logic for a sports club, the next I'm building a CMS for an industrial company. Each project is a new world. My goal is clear: to make a living from this.",
    shortBio: "Web Developer · UTN · React, Next.js, Supabase · Mar del Plata",
  },
}

export const PROJECTS = [
  {
    name: { es: "Gestor de Turnos — Club Once Unidos", en: "Booking System — Club Once Unidos" },
    image: '/projects/gestor-booking.jpeg',
    shortProblem: {
      es: "+1.200 turnos/mes coordinados por WhatsApp y una planilla de Excel.",
      en: "1,200+ monthly bookings managed via WhatsApp and a spreadsheet.",
    },
    shortSolution: {
      es: "Sistema self-service 24/7 — el socio reserva en 3 clicks, sin intermediarios.",
      en: "24/7 self-service system — members book in 3 clicks, no middleman.",
    },
    metrics: ["Lighthouse 99", "Costo $0", "3 clicks"],
    desc: {
      es: "El club gestionaba 3 canchas y +1.200 turnos/mes por WhatsApp y Excel. Construí un sistema self-service 24/7: el socio reserva en 3 clicks, disponibilidad en tiempo real, confirmación automática por email. Lighthouse 99/100 en performance. Costo operativo: $0.",
      en: "The club managed 3 courts and 1,200+ bookings/month via WhatsApp and Excel. I built a 24/7 self-service system: members book in 3 clicks, real-time availability, automatic email confirmation. Lighthouse 99/100 performance. Operational cost: $0.",
    },
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    url: "https://gestorturnos.vercel.app",
    github: "https://github.com/nicopetito/gestor-turnos",
    type: { es: "Sistema Web", en: "Web System" },
    hasCaseStudy: true,
    caseStudy: {
      client: "Club Once Unidos, Mar del Plata",
      role: { es: "Desarrollo completo — diseño, frontend, backend, deploy", en: "Full development — design, frontend, backend, deploy" },
      devTime: "~20 hs (10 días, side project)",
      status: { es: "En producción, fase piloto", en: "In production, pilot phase" },
      problem: {
        es: "El club gestiona 3 canchas de tenis con horario de 8:00 a 22:00 hs — hasta 42 turnos disponibles por día, más de 1.200 al mes. Todo se coordinaba por WhatsApp y una planilla de Excel: los socios mandaban mensajes para reservar, el encargado revisaba disponibilidad manualmente, confirmaba y actualizaba la planilla. Esto generaba reservas duplicadas, consumía atención constante durante las 14 horas de operación diaria, y los socios no tenían forma de ver qué turnos estaban libres sin escribirle a alguien.",
        en: "The club manages 3 tennis courts from 8:00 to 22:00 — up to 42 available slots per day, over 1,200 per month. Everything was coordinated via WhatsApp and an Excel spreadsheet: members sent messages to book, the manager manually checked availability, confirmed, and updated the sheet. This caused duplicate bookings, consumed constant attention during 14 daily operating hours, and members had no way to see available slots without messaging someone.",
      },
      solutionFeatures: {
        es: [
          "Vista de disponibilidad en tiempo real — calendario visual donde el socio ve al instante qué turnos están libres, ocupados o bloqueados.",
          "Reserva self-service 24/7 — cualquier socio puede reservar sin depender del encargado.",
          "Confirmación automática por email — vía Resend, cada reserva dispara un email de confirmación.",
          "Panel de administración completo — gestión de canchas, horarios, bloqueos, estadísticas de uso.",
          "Sincronización automática con Excel — el sistema actualiza la planilla que el club ya usaba. Transición gradual, sin forzar un cambio de un día para el otro.",
          "Sin registro ni contraseñas para socios — reducir fricción al máximo. El admin sí tiene acceso autenticado.",
        ],
        en: [
          "Real-time availability view — visual calendar where members instantly see which slots are free, booked, or blocked.",
          "24/7 self-service booking — any member can book without depending on the manager.",
          "Automatic email confirmation — via Resend, each booking triggers a confirmation email.",
          "Full admin dashboard — manage courts, schedules, blocks, and usage stats.",
          "Automatic Excel sync — the system updates the spreadsheet the club already used. Gradual transition, no forced overnight change.",
          "No registration or passwords for members — minimize friction. The admin has authenticated access.",
        ],
      },
      techStack: [
        { tech: "Next.js 16 (App Router)", role: { es: "Framework principal, SSR + API Routes", en: "Main framework, SSR + API Routes" } },
        { tech: "TypeScript", role: { es: "Tipado estricto en todo el proyecto", en: "Strict typing throughout" } },
        { tech: "Supabase (Postgres)", role: { es: "Base de datos, autenticación, Row Level Security", en: "Database, auth, Row Level Security" } },
        { tech: "Tailwind CSS", role: { es: "Estilos, responsive design", en: "Styling, responsive design" } },
        { tech: "Resend", role: { es: "Emails transaccionales", en: "Transactional emails" } },
        { tech: "Vercel", role: { es: "Deploy serverless", en: "Serverless deploy" } },
      ],
      decisions: [
        {
          q: { es: "¿Por qué Supabase y no Firebase?", en: "Why Supabase and not Firebase?" },
          a: {
            es: "Necesitaba una base de datos relacional de verdad. El modelo de turnos tiene relaciones claras entre canchas, horarios, usuarios y reservas — en Firestore hubiera tenido que desnormalizar y duplicar datos. Supabase me da Postgres completo con JOINs, Row Level Security en SQL, y un tier gratuito que cubre las necesidades del club. Además, al ser open source, el club no queda atado a un proveedor.",
            en: "I needed a real relational database. The booking model has clear relationships between courts, time slots, users, and reservations — in Firestore I would have had to denormalize and duplicate data. Supabase gives me full Postgres with JOINs, Row Level Security in SQL, and a free tier that covers the club's needs. Being open source, the club isn't locked into a vendor.",
          },
        },
        {
          q: { es: "¿Por qué sincronizar con la planilla de Excel?", en: "Why sync with the Excel spreadsheet?" },
          a: {
            es: "Decisión de producto, no técnica. El club ya tenía un flujo armado alrededor de esa planilla. Forzarlos a abandonarla el día uno iba a generar fricción y resistencia. La sincronización automática les permite hacer la transición a su ritmo: el sistema nuevo es la fuente de verdad, pero la planilla sigue ahí como respaldo y como interfaz familiar.",
            en: "A product decision, not a technical one. The club had a whole workflow built around that spreadsheet. Forcing them to abandon it on day one would have caused friction and resistance. Automatic sync lets them transition at their own pace: the new system is the source of truth, but the spreadsheet remains as a backup and familiar interface.",
          },
        },
        {
          q: { es: "¿Por qué no requiere login para los socios?", en: "Why no login required for members?" },
          a: {
            es: "Reducir fricción al máximo. Para un club con una base chica de socios, agregar registro + login + recuperación de contraseña era más barrera que valor. El admin sí tiene acceso autenticado al panel de gestión.",
            en: "Minimize friction. For a club with a small member base, adding registration + login + password recovery was more barrier than value. The admin does have authenticated access to the management panel.",
          },
        },
      ],
      metrics: {
        es: [
          "Lighthouse Performance: 99/100",
          "Lighthouse Accesibilidad: 95/100",
          "Lighthouse Buenas prácticas: 100/100",
          "Lighthouse SEO: 100/100",
          "Costo operativo actual: $0 (Vercel + Supabase free tier)",
          "Desarrollado en ~20 hs como side project paralelo a jornada laboral completa",
        ],
        en: [
          "Lighthouse Performance: 99/100",
          "Lighthouse Accessibility: 95/100",
          "Lighthouse Best Practices: 100/100",
          "Lighthouse SEO: 100/100",
          "Current operational cost: $0 (Vercel + Supabase free tier)",
          "Built in ~20 hours as a side project alongside a full-time job",
        ],
      },
      nextSteps: {
        es: [
          "Rollout completo al total de socios del club.",
          "Dashboard de métricas para el admin: reservas/mes, ocupación por cancha, horarios pico.",
          "Notificaciones push y recordatorios previos al turno.",
          "Expansión a otras canchas del club (actualmente cubre tenis).",
        ],
        en: [
          "Full rollout to all club members.",
          "Admin metrics dashboard: bookings/month, court occupancy, peak times.",
          "Push notifications and pre-booking reminders.",
          "Expansion to other club courts (currently covers tennis only).",
        ],
      },
    },
  },
  {
    name: { es: "Kaizer Servicios Industriales", en: "Kaizer Industrial Services" },
    image: '/projects/kaizer-hero.jpeg',
    shortProblem: {
      es: "+10 años en el rubro industrial, sin presencia web — solo Instagram.",
      en: "10+ years in the industrial sector, no web presence — just Instagram.",
    },
    shortSolution: {
      es: "Sitio institucional + CMS a medida: el cliente gestiona todo de forma autónoma.",
      en: "Institutional site + custom CMS: client manages everything autonomously.",
    },
    metrics: ["CMS a medida", "SEO local MDQ", "Costo $0"],
    desc: {
      es: "Empresa con +10 años en el rubro industrial, sin presencia web — solo Instagram. Construí un sitio institucional + CMS a medida: el cliente gestiona servicios, catálogo, blog e imágenes sin depender del desarrollador. Performance y seguridad de una app moderna, libertad editorial de WordPress.",
      en: "Company with 10+ years in the industrial sector, no web presence — only Instagram. I built an institutional site + custom CMS: the client manages services, catalog, blog, and images without depending on the developer. Modern app performance and security, WordPress-level editorial freedom.",
    },
    tags: ["Next.js", "Supabase", "TypeScript", "SEO"],
    url: "https://kaizer-servicios-three.vercel.app",
    github: "https://github.com/nicopetito/kaizer-servicios",
    type: { es: "Web Institucional + CMS", en: "Corporate Site + CMS" },
    hasCaseStudy: true,
    caseStudy: {
      client: "Kaizer Servicios, Mar del Plata",
      role: { es: "Desarrollo completo — diseño, frontend, backend, panel admin, deploy", en: "Full development — design, frontend, backend, admin panel, deploy" },
      devTime: null,
      status: { es: "Entregado, en fase de activación comercial", en: "Delivered, in commercial activation phase" },
      problem: {
        es: "Kaizer Servicios lleva más de 10 años en el rubro industrial en Mar del Plata, ofreciendo mantenimiento preventivo, instalación eléctrica y soldadura industrial. A pesar de su trayectoria, su presencia online se limitaba a una cuenta de Instagram. Esto generaba dos problemas: invisibilidad en búsquedas (cuando una empresa busca 'servicios industriales Mar del Plata', Kaizer no aparecía) e imagen poco profesional para el rubro (los contratos industriales son de montos altos y las empresas contratantes comparan proveedores formalmente). Además, el cliente necesitaba autonomía total para gestionar su propio contenido sin depender del desarrollador para cada cambio.",
        en: "Kaizer Servicios has been in the Mar del Plata industrial sector for over 10 years, offering preventive maintenance, electrical installation, and industrial welding. Despite their track record, their online presence was limited to an Instagram account. This caused two problems: search invisibility (when a company searches 'industrial services Mar del Plata', Kaizer didn't appear) and an unprofessional image for the sector (industrial contracts are high-value and hiring companies formally compare providers). The client also needed full autonomy to manage their own content without depending on the developer for every change.",
      },
      solutionFeatures: {
        es: [
          "Sitio público completo: Home con propuesta de valor, Servicios con descripción técnica, Catálogo de productos, Blog, Nosotros y Contacto.",
          "Panel de administración con CRUD completo: servicios, productos con imágenes (Supabase Storage), blog, sección institucional.",
          "Upload directo de imágenes al panel — sin intervención técnica.",
          "SEO local implementado: metadata dinámica, sitemap.xml automático, headings semánticos, URLs limpias. Posicionado para 'servicios industriales Mar del Plata'.",
          "Autenticación del admin con Row Level Security — solo el administrador accede al panel.",
        ],
        en: [
          "Full public site: Home with value proposition, Services with technical descriptions, Product catalog, Blog, About, and Contact.",
          "Admin panel with full CRUD: services, products with images (Supabase Storage), blog, institutional section.",
          "Direct image upload from the panel — no technical intervention needed.",
          "Local SEO implemented: dynamic metadata, automatic sitemap.xml, semantic headings, clean URLs. Positioned for 'industrial services Mar del Plata'.",
          "Admin authentication with Row Level Security — only the administrator accesses the panel.",
        ],
      },
      techStack: [
        { tech: "Next.js (App Router)", role: { es: "Framework principal, SSR + API Routes", en: "Main framework, SSR + API Routes" } },
        { tech: "TypeScript", role: { es: "Tipado estricto en todo el proyecto", en: "Strict typing throughout" } },
        { tech: "Supabase (Postgres)", role: { es: "Base de datos, autenticación del admin, RLS", en: "Database, admin auth, RLS" } },
        { tech: "Supabase Storage", role: { es: "Almacenamiento de imágenes del panel", en: "Panel image storage" } },
        { tech: "Tailwind CSS", role: { es: "Sistema de diseño y estilos", en: "Design system and styling" } },
        { tech: "Vercel", role: { es: "Deploy, CDN global, hosting serverless", en: "Deploy, global CDN, serverless hosting" } },
      ],
      decisions: [
        {
          q: { es: "¿Por qué un CMS custom con Next.js + Supabase y no WordPress?", en: "Why a custom CMS with Next.js + Supabase instead of WordPress?" },
          a: {
            es: "Tres razones. Performance: Next.js sirve páginas en milisegundos; WordPress con los plugins necesarios (WooCommerce, Elementor, Yoast) degrada la velocidad y el SEO local depende directamente de la velocidad de carga. Seguridad: WordPress es el CMS más atacado del mundo — cada plugin es un vector de ataque potencial; esta solución no tiene panel de admin expuesto públicamente ni plugins de terceros. Control total: con WordPress estás limitado al tema y los plugins; el CMS custom me dio libertad absoluta para diseñar exactamente la experiencia que el cliente necesitaba. Costo operativo: $0.",
            en: "Three reasons. Performance: Next.js serves pages in milliseconds; WordPress with the needed plugins (WooCommerce, Elementor, Yoast) degrades speed and local SEO depends directly on load time. Security: WordPress is the most attacked CMS in the world — each plugin is a potential attack vector; this solution has no publicly exposed admin panel or third-party plugins. Full control: with WordPress you're limited to the theme and plugins; the custom CMS gave me absolute freedom to design exactly the experience the client needed. Operational cost: $0.",
          },
        },
        {
          q: { es: "¿Por qué no un CMS headless como Strapi, Sanity o Contentful?", en: "Why not a headless CMS like Strapi, Sanity, or Contentful?" },
          a: {
            es: "Agregar un CMS headless significaba sumar un servicio más al stack, con su propia curva de aprendizaje, sus límites en el tier gratuito y una capa de complejidad adicional. Supabase ya estaba en el proyecto como base de datos — construir el CRUD directamente sobre Supabase fue más directo, más integrado y sin costos adicionales.",
            en: "Adding a headless CMS meant adding another service to the stack, with its own learning curve, free tier limits, and an extra layer of complexity. Supabase was already in the project as the database — building CRUD directly on Supabase was more direct, more integrated, and at no extra cost.",
          },
        },
      ],
      metrics: {
        es: [
          "CMS a medida: el cliente gestiona todo el contenido de forma autónoma.",
          "SEO local posicionado para 'servicios industriales Mar del Plata' y variantes.",
          "Costo operativo: $0 (Vercel + Supabase free tier).",
          "El cliente tiene la misma libertad editorial que WordPress con la performance y seguridad de una app moderna.",
        ],
        en: [
          "Custom CMS: the client manages all content autonomously.",
          "Local SEO positioned for 'industrial services Mar del Plata' and variations.",
          "Operational cost: $0 (Vercel + Supabase free tier).",
          "The client has the same editorial freedom as WordPress with the performance and security of a modern app.",
        ],
      },
      nextSteps: {
        es: [
          "Dominio propio (.com.ar) para reemplazar la URL de Vercel.",
          "Activación del blog con contenido técnico para posicionamiento long-tail.",
          "Google Business Profile vinculado al sitio para reforzar SEO local.",
          "Analytics para medir tráfico, fuentes de contacto y conversiones del formulario.",
        ],
        en: [
          "Custom domain (.com.ar) to replace the Vercel URL.",
          "Blog activation with technical content for long-tail positioning.",
          "Google Business Profile linked to the site to reinforce local SEO.",
          "Analytics to measure traffic, contact sources, and form conversions.",
        ],
      },
    },
  },
  {
    name: { es: "Equals Gestión", en: "Equals Management" },
    image: '/projects/equals-dashboard.jpeg',
    shortProblem: {
      es: "Tesis UTN: gestión de finanzas personales dispersa en hojas de cálculo.",
      en: "UTN thesis: personal finance management scattered across spreadsheets.",
    },
    shortSolution: {
      es: "Plataforma completa con billeteras, gráficos, objetivos y dólar en tiempo real.",
      en: "Full platform with wallets, charts, savings goals and live dollar rate.",
    },
    metrics: ["Sobresaliente UTN", "Expuesto en facultad"],
    desc: {
      es: "Proyecto de tesis en la UTN — plataforma de gestión financiera personal con login, CRUD de billeteras y categorías, gráficos de gastos, objetivos de ahorro, cotización del dólar en tiempo real y simulador de plazos fijos. Calificada sobresaliente y expuesta frente a toda la facultad.",
      en: "UTN thesis project — personal finance management platform with login, wallet and category CRUD, spending charts, savings goals, real-time dollar quote, and fixed-term deposit simulator. Graded outstanding and presented to the entire faculty.",
    },
    tags: ["Angular", "Supabase", "JavaScript"],
    url: "https://equalsgestion.com",
    github: "https://github.com/agusmcinnes/equal",
    type: { es: "Plataforma de Gestión", en: "Management Platform" },
    hasCaseStudy: false,
  },
  {
    name: { es: "Sector B Hamburguesas", en: "Sector B Burgers" },
    image: null,
    placeholderColor: '#00D4AA',
    shortProblem: {
      es: "Hamburguesería artesanal sin presencia digital — sin menú online ni pedidos directos.",
      en: "Craft burger joint with no digital presence — no online menu or direct orders.",
    },
    shortSolution: {
      es: "Sitio con menú interactivo y botón de pedido directo por WhatsApp.",
      en: "Site with interactive menu and direct WhatsApp order button.",
    },
    metrics: ["Menú digital", "WhatsApp CTA"],
    desc: {
      es: "Sitio web para hamburguesería artesanal con menú digital interactivo, galería de productos y botón de pedido directo por WhatsApp. Diseño atractivo orientado a la conversión.",
      en: "Website for a craft burger restaurant with interactive digital menu, product gallery and direct WhatsApp order button. Conversion-focused attractive design.",
    },
    tags: ["Next.js", "Tailwind CSS"],
    url: null,
    github: "https://github.com/nicopetito/sector-b-hamburguesas",
    type: { es: "Web Gastronómica", en: "Restaurant Website" },
    hasCaseStudy: false,
  },
]

export const SERVICES = [
  {
    name: { es: "Landing Page / Web", en: "Landing Page / Website" },
    desc: {
      es: "Página web profesional con menú, fotos, ubicación en Google Maps y botón de WhatsApp. Ideal para restaurantes, comercios y profesionales.",
      en: "Professional website with menu, photos, Google Maps location and WhatsApp button. Perfect for restaurants, shops and professionals.",
    },
    time: { es: "1–2 semanas", en: "1–2 weeks" },
  },
  {
    name: { es: "Sistema Web a Medida", en: "Custom Web System" },
    desc: {
      es: "Reservas de turnos, gestión de pedidos, paneles de administración. Soluciones con base de datos y lógica real para tu operación.",
      en: "Booking systems, order management, admin dashboards. Solutions with real databases and logic for your operation.",
    },
    time: { es: "2–4 semanas", en: "2–4 weeks" },
  },
  {
    name: { es: "Mantenimiento & Evolución", en: "Maintenance & Growth" },
    desc: {
      es: "Actualización de contenido, mejoras de diseño, nuevas funcionalidades. Tu web siempre actualizada y funcionando.",
      en: "Content updates, design improvements, new features. Your website always up to date and running.",
    },
    time: { es: "Continuo", en: "Ongoing" },
  },
]

export const TESTIMONIALS = [
  {
    quote: {
      es: "Esto me facilita la vida a nivel galáctico. Lo que hiciste me optimizó totalmente la tarea — casi que no lo hacemos y mirá todo lo que ganamos.",
      en: "This makes my life easier on a galactic level. What you built completely optimized the whole operation — we almost didn't do this, and look at everything we gained.",
    },
    author: "Encargado de canchas",
    company: "Club Once Unidos",
    location: "Mar del Plata",
  },
  {
    quote: {
      es: "Ahora tenemos presencia online y yo mismo puedo actualizar el contenido. Los clientes nos empezaron a encontrar en Google — eso antes era imposible sin un sitio.",
      en: "Now we have an online presence and I can update the content myself. Clients started finding us on Google — that was impossible before without a website.",
    },
    author: "Titular",
    company: "Kaizer Servicios",
    location: "Mar del Plata",
  },
]

export const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "JavaScript",
  "Git",
  "Vercel",
]
