import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { SITE_URL } from './src/data/site'
import { routes, schemaFor, notFoundMeta, absoluteUrl, type RouteMeta } from './src/data/seo'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function headFor(meta: RouteMeta, canonical = true) {
  const url = absoluteUrl(meta.path === '/' ? '/' : meta.path)
  const og = absoluteUrl(`/og/${meta.og ?? 'default'}.jpg`)
  const ld = schemaFor(meta)
    .map((s) => `<script type="application/ld+json" data-prerender>${JSON.stringify(s).replace(/</g, '\\u003c')}</script>`)
    .join('\n    ')
  return `<title data-prerender>${esc(meta.title)}</title>
    <meta data-prerender name="description" content="${esc(meta.description)}" />
    ${canonical ? `<link data-prerender rel="canonical" href="${url}" />` : '<meta data-prerender name="robots" content="noindex" />'}
    <meta data-prerender property="og:type" content="website" />
    <meta data-prerender property="og:site_name" content="Rapid Construction" />
    <meta data-prerender property="og:locale" content="en_IN" />
    <meta data-prerender property="og:title" content="${esc(meta.title)}" />
    <meta data-prerender property="og:description" content="${esc(meta.description)}" />
    <meta data-prerender property="og:url" content="${url}" />
    <meta data-prerender property="og:image" content="${og}" />
    <meta data-prerender property="og:image:width" content="1200" />
    <meta data-prerender property="og:image:height" content="630" />
    <meta data-prerender name="twitter:card" content="summary_large_image" />
    <meta data-prerender name="twitter:title" content="${esc(meta.title)}" />
    <meta data-prerender name="twitter:description" content="${esc(meta.description)}" />
    <meta data-prerender name="twitter:image" content="${og}" />
    ${ld}`
}

function noscriptFor(meta: RouteMeta) {
  const links = routes
    .filter((r) => !r.path.startsWith('/projects/') || r.path.split('/').length === 3)
    .slice(0, 40)
    .map((r) => `<li><a href="${r.path}">${esc(r.title.split(' | ')[0].split(' — ')[0])}</a></li>`)
    .join('')
  return `<noscript><main style="font-family:system-ui;padding:2rem;max-width:60rem;margin:auto"><h1>${esc(meta.title)}</h1><p>${esc(meta.summary ?? meta.description)}</p><nav aria-label="Site"><ul>${links}</ul></nav></main></noscript>`
}

/**
 * Writes dist/<route>/index.html for every route with route-specific
 * <title>, description, canonical, Open Graph, Twitter and JSON-LD,
 * plus sitemap.xml, robots.txt and 404.html.
 */
function prerenderSeo(): Plugin {
  let outDir = 'dist'
  return {
    name: 'rapid:prerender-seo',
    apply: 'build',
    configResolved(c) {
      outDir = resolve(c.root, c.build.outDir)
    },
    closeBundle() {
      const template = readFileSync(join(outDir, 'index.html'), 'utf8')
      const render = (meta: RouteMeta, canonical = true) =>
        template
          .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, headFor(meta, canonical))
          .replace('<!-- noscript -->', noscriptFor(meta))

      for (const meta of routes) {
        const html = render(meta)
        if (meta.path === '/') {
          writeFileSync(join(outDir, 'index.html'), html)
        } else {
          const dir = join(outDir, meta.path)
          mkdirSync(dir, { recursive: true })
          writeFileSync(join(dir, 'index.html'), html)
        }
      }
      writeFileSync(join(outDir, '404.html'), render(notFoundMeta, false))

      const today = new Date().toISOString().slice(0, 10)
      const urls = routes
        .map(
          (r) =>
            `  <url><loc>${absoluteUrl(r.path)}</loc><lastmod>${today}</lastmod><changefreq>${r.changefreq ?? 'monthly'}</changefreq><priority>${(r.priority ?? 0.5).toFixed(1)}</priority></url>`,
        )
        .join('\n')
      writeFileSync(
        join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
      writeFileSync(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /404\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
      console.log(`\n  ✓ prerendered ${routes.length} routes + sitemap.xml, robots.txt, 404.html`)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), prerenderSeo()],
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    assetsInlineLimit: 2048,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'gsap'
            if (id.includes('motion') || id.includes('framer')) return 'motion'
            if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform')) return 'forms'
            if (id.includes('react-router') || id.includes('react-dom') || id.includes('/react/') || id.includes('scheduler')) return 'react'
          }
          if (id.includes('media.generated')) return 'media'
        },
      },
    },
  },
})
