# Equals Gestión

Plataforma de gestión financiera personal desarrollada como proyecto de tesis en la UTN Mar del Plata. Calificación: **Sobresaliente**. Expuesta frente a toda la facultad.

**Demo:** https://equalsgestion.com

---

## Screenshots

<!-- Reemplazá los nombres por los nombres reales de tus archivos en este repo -->
![Dashboard principal](screenshots/dashboard.jpeg)
![Gestión de billeteras](screenshots/billeteras.jpeg)

---

## Stack

| Tecnología | Uso |
|---|---|
| React | Frontend SPA |
| Supabase (Postgres) | Base de datos, autenticación |
| Tailwind CSS | Estilos |

---

## Funcionalidades

- **Autenticación** — registro, login y recuperación de contraseña
- **Billeteras** — CRUD de cuentas y saldos
- **Categorías** — clasificación de ingresos y gastos
- **Gráficos de gastos** — visualización por categoría y período
- **Objetivos de ahorro** — seguimiento de metas financieras
- **Cotización del dólar** — en tiempo real (API pública)
- **Simulador de plazos fijos** — cálculo de rendimientos

---

## Instalación local

```bash
git clone https://github.com/agusmcinnes/equal
cd equal
npm install
```

Creá un archivo `.env.local`:

```env
REACT_APP_SUPABASE_URL=tu_url
REACT_APP_SUPABASE_ANON_KEY=tu_anon_key
```

```bash
npm start
```

---

## Autores

Proyecto grupal — UTN Mar del Plata, 2025  
**Nicolás Videla Petito** — [videlapetito@gmail.com](mailto:videlapetito@gmail.com) · [Portfolio](https://nicolasvidela.dev)
