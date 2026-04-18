# ⚡ Mbarete Digital - Premium Web Platform

Plataforma web de alto rendimiento construida para **Mbarete Digital** utilizando [Astro](https://astro.build/). Este proyecto ha evolucionado de un sitio estático básico a una aplicación de marketing optimizada con diseño Tier 1, arquitectura modular y rendimiento crítico.

---

## 🚀 Características Principales

- **Arquitectura Modular**: Estilos encapsulados por componente para evitar regresiones visuales.
- **Glassmorphism UI**: Diseño premium con efectos de desenfoque de fondo, transparencias y sombras dinámicas.
- **SEO Tier 1**: Inyección de esquemas JSON-LD, metadatos dinámicos y jerarquía semántica completa.
- **Performance de Élite**: Inlining automático de CSS crítico para eliminar bloqueos de renderizado (FCP/LCP).
- **Blog Content Experience**: Tipografía curada para lectura prolongada con acentos visuales y listas personalizadas.
- **Interactive Lead Generation**: Quiz interactivo integrado para captura de leads cualificados.

---

## 🛠️ Stack Tecnológico

- **Core**: Astro v6 (Static Build).
- **Logic**: Modern JavaScript (Vanilla).
- **Styling**: Vanilla CSS Modularizado (CSS-in-JS pattern en componentes Astro).
- **Content**: Markdown con colecciones de contenido (Astro Content Collections).
- **Optimization**: Vite para el empaquetado y procesamiento de assets.

---

## 📁 Estructura del Proyecto

```text
.
├── public/                 # Assets estáticos (imágenes, robots.txt, llms.txt)
├── scripts/                # Scripts de automatización (syncing, post-build)
├── src/
│   ├── components/
│   │   ├── blog/          # Componentes específicos del sistema de blog (BlogGrid, FeaturedPost)
│   │   ├── layout/        # Estructura (Navbar, Footer, WhatsAppFloat)
│   │   ├── ui/            # Elementos de interfaz reutilizables (SEO, BlogCTA)
│   │   └── forms/         # Sistemas de captura (InteractiveLeadQuiz)
│   ├── content/
│   │   └── blog/          # Artículos del blog (.md)
│   ├── data/               # Configuración centralizada y constantes del negocio
│   ├── layouts/            # Plantillas BaseLayout y Wrappers
│   ├── pages/              # Rutas basadas en archivos (Home, Blog, Muestras, FAQ)
│   └── styles/             # CSS Global (Resets, Variables, Utilidades)
├── astro.config.mjs        # Configuración de Astro (Optimization & Build)
└── package.json            # Scripts y dependencias
```

---

## 👨‍💻 Desarrollo

### Instalación
```bash
npm install
```

### Ejecución Local
```bash
npm run dev
```
Acceso en: `http://localhost:4321` (o el puerto que asigne Astro).

### Comandos de Utilidad
- `npm run build`: Genera la versión de producción en `dist/`.
- `npm run preview`: Sirve la carpeta `dist/` localmente para auditorías visuales finales.
- `npm run sync:webs-muestras-assets`: Sincroniza los assets de las demos interactivas (Muestras). **Esencial antes de publicar.**

---

## 📝 Guía de Contenido (Blog)

Para crear un nuevo post, añade un archivo `.md` en `src/content/blog/`. 

### Frontmatter Sugerido para SEO Premium:
```yaml
---
title: 'Cómo potenciar tu negocio en Paraguay'
description: 'Resumen optimizado para buscadores que incite al clic'
pubDate: 2026-04-18
category: 'Estrategia'
categorySlug: 'estrategia'
tags: ['web', 'ventas', 'paraguay']
featured: true # Si es true, aparecerá destacado en el home del blog
heroImage: '/og-image.jpg' # Imagen principal (1200x630 recomendado)
---
```

---

## ⚡ Optimizaciones de Rendimiento

El sitio está configurado para alcanzar puntuaciones de 90+ en Lighthouse:
- **Critical Path**: Los estilos pequeños se inyectan directamente en el HTML (`inlineStylesheets: 'always'`).
- **Lazy Loading**: Imágenes optimizadas automáticamente mediante el componente de imagen de Astro.
- **Z-Index System**: Capas organizadas para evitar solapamientos en menús móviles y elementos flotantes.

---

## 📌 Notas de Mantenimiento

- **Estilos**: Al crear nuevos componentes, prefiere usar un bloque `<style>` local. Reserva `global.css` solo para variables y tokens globales.
- **Sitemap**: El script de post-build garantiza que `sitemap.xml` siempre dirija correctamente al índice indexado.

---
© 2026 Mbarete Digital. Built with ⚡ in Paraguay.
