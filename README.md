# Mbarete Astro

Sitio web de **Mbarete Digital** construido con [Astro](https://astro.build/).
Incluye landing principal, paginas de servicios, seccion de muestras y blog SEO.

## Requisitos

- Node.js `>= 22.12.0`
- npm (incluido con Node)

## Inicio rapido

```bash
npm install
npm run dev
```

El entorno local queda en `http://localhost:4321`.

## Scripts

- `npm run dev`: levanta el entorno de desarrollo.
- `npm run build`: genera `dist/` y luego crea `dist/sitemap.xml` como alias de `dist/sitemap-index.xml`.
- `npm run preview`: sirve el build local para validación.
- `npm run sync:webs-muestras-assets`: sincroniza assets desde `src/pages/muestras/webs-muestras` hacia `public/muestras/webs-muestras` y ajusta `<base href>` de los `index.html` de cada muestra.
- `npm run astro -- --help`: ayuda del CLI de Astro.

## Estructura del proyecto

```text
.
|-- public/                         # assets publicos (incluye muestras sincronizadas)
|-- scripts/                        # utilidades de build/sync
|-- src/
|   |-- components/                 # componentes UI
|   |-- content/blog/               # articulos markdown del blog
|   |-- data/                       # configuraciones y datos del sitio
|   |-- layouts/                    # layouts Astro
|   |-- pages/                      # rutas del sitio
|   `-- styles/                     # estilos globales
|-- astro.config.mjs
`-- package.json
```

## Donde editar cada cosa

- Configuracion global (nombre, contacto, SEO, redes): `src/data/siteConfig.js`
- Home y paginas principales: `src/pages/index.astro`, `src/pages/faq.astro`, `src/pages/servicios/*`
- Blog:
  - entradas: `src/content/blog/*.md`
  - schema/frontmatter: `src/content.config.ts`
  - rutas: `src/pages/blog/*`
- Rubros y servicios:
  - datos: `src/data/rubros.ts`, `src/data/services.ts`
  - vistas: `src/pages/muestras/*`, `src/pages/servicios/*`

## Crear un nuevo post del blog

Crear un archivo `.md` en `src/content/blog/` con frontmatter compatible con el schema actual:

```md
---
title: 'Titulo del post'
description: 'Resumen corto'
pubDate: 2026-04-12
updatedDate: 2026-04-12
draft: false
featured: false
category: 'SEO'
categorySlug: 'seo'
tags: ['seo', 'paraguay']
heroImage: '/blog/mi-imagen.jpg'
---

Contenido del articulo...
```

Campos obligatorios: `title`, `description`, `pubDate`.

## Build y deploy

1. Ejecutar `npm run build`.
2. Verificar salida en `dist/`.
3. Validar localmente con `npm run preview`.

`astro.config.mjs` usa `siteConfig.url` (`https://mbarete.online/`) para sitemap y URLs absolutas.

## Notas operativas

- El script `sync:webs-muestras-assets` elimina y vuelve a crear `public/muestras/webs-muestras` en cada corrida.
- Si agregas nuevas muestras HTML, corre ese script antes de probar o publicar.
