# Gestor de Turnos — Club Once Unidos

Sistema de reservas self-service 24/7 para el Club de Tenis Once Unidos, Mar del Plata. Reemplazó un flujo manual de WhatsApp + Excel por una plataforma con disponibilidad en tiempo real, confirmación automática por email y panel de administración completo.

**Estado:** En producción, fase piloto  
**Demo:** https://gestorturnos.vercel.app

---

## Screenshots

<!-- Reemplazá los nombres por los nombres reales de tus archivos en este repo -->
![Dashboard de reservas](screenshots/dashboard.jpeg)
![Vista de disponibilidad](screenshots/disponibilidad.jpeg)
![Panel de administración](screenshots/admin.jpeg)

---

## Stack

| Tecnología | Uso |
|---|---|
| Next.js 16 (App Router) | Framework principal, SSR + API Routes |
| TypeScript | Tipado estricto en todo el proyecto |
| Supabase (Postgres) | Base de datos, autenticación, Row Level Security |
| Tailwind CSS | Estilos, responsive design |
| Resend | Emails transaccionales |
| Vercel | Deploy serverless |

---

## Funcionalidades

- **Disponibilidad en tiempo real** — calendario visual con turnos libres, ocupados y bloqueados
- **Reserva sin registro** — los socios reservan en 3 clicks sin contraseña
- **Confirmación automática por email** — vía Resend al completar la reserva
- **Sincronización con Excel** — el sistema actualiza la planilla que el club ya usaba
- **Panel de administración** — gestión de canchas, horarios, bloqueos y estadísticas
- **Autenticación segura para el admin** — Row Level Security en Supabase

---

## Métricas

- Lighthouse Performance: **99/100**
- Lighthouse Accesibilidad: **95/100**
- Lighthouse Buenas Prácticas: **100/100**
- Lighthouse SEO: **100/100**
- Costo operativo: **$0** (Vercel + Supabase free tier)
- Tiempo de desarrollo: **~20 hs** (side project paralelo a jornada laboral completa)

---

## Instalación local

```bash
git clone https://github.com/nicopetito/gestor-turnos
cd gestor-turnos
npm install
```

Creá un archivo `.env.local` con tus credenciales de Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
RESEND_API_KEY=tu_resend_key
```

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

---

## Autor

**Nicolás Videla Petito** — [videlapetito@gmail.com](mailto:videlapetito@gmail.com) · [Portfolio](https://nicolasvidela.dev)
