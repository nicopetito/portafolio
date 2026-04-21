# Kaizer Servicios Industriales

Sitio institucional + CMS a medida para Kaizer Servicios, empresa con más de 10 años en el rubro industrial en Mar del Plata. El cliente gestiona servicios, catálogo, blog e imágenes de forma autónoma, sin depender del desarrollador para ningún cambio.

**Estado:** Entregado, en fase de activación comercial  
**Demo:** https://kaizer-servicios-three.vercel.app

---

## Screenshots

<!-- Reemplazá los nombres por los nombres reales de tus archivos en este repo -->
![Home](screenshots/home.jpeg)
![Panel de administración](screenshots/admin.jpeg)
![Sección servicios](screenshots/servicios.jpeg)

---

## Stack

| Tecnología | Uso |
|---|---|
| Next.js (App Router) | Framework principal, SSR + API Routes |
| TypeScript | Tipado estricto en todo el proyecto |
| Supabase (Postgres) | Base de datos, autenticación del admin, RLS |
| Supabase Storage | Almacenamiento de imágenes del panel |
| Tailwind CSS | Sistema de diseño y estilos |
| Vercel | Deploy, CDN global, hosting serverless |

---

## Funcionalidades

### Sitio público
- Home con propuesta de valor clara
- Sección Servicios con descripciones técnicas
- Catálogo de productos con imágenes
- Blog
- Página Nosotros e Historia
- Formulario de Contacto

### Panel de administración
- CRUD completo de servicios, productos, blog e información institucional
- Upload directo de imágenes (Supabase Storage) — sin intervención técnica
- Autenticación segura con Row Level Security
- Solo el administrador accede al panel

### SEO local
- Metadata dinámica por página
- `sitemap.xml` generado automáticamente
- Headings semánticos y URLs limpias
- Posicionado para "servicios industriales Mar del Plata"

---

## Métricas

- CMS a medida: el cliente gestiona todo el contenido de forma autónoma
- SEO local implementado para búsquedas en Mar del Plata
- Costo operativo: **$0** (Vercel + Supabase free tier)
- Performance y seguridad de una app moderna con libertad editorial de WordPress

---

## Instalación local

```bash
git clone https://github.com/nicopetito/kaizer-servicios
cd kaizer-servicios
npm install
```

Creá un archivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
```

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000). El panel de admin está en `/admin`.

---

## Autor

**Nicolás Videla Petito** — [videlapetito@gmail.com](mailto:videlapetito@gmail.com) · [Portfolio](https://nicolasvidela.dev)
