import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { metaFor, notFoundMeta, schemaFor, absoluteUrl, type RouteMeta } from '../../data/seo'
import { company } from '../../data/site'

interface SeoProps {
  meta?: RouteMeta
}

export function Seo({ meta: customMeta }: SeoProps) {
  const location = useLocation()
  const meta = customMeta ?? metaFor(location.pathname) ?? notFoundMeta

  useEffect(() => {
    // 1. Update Title
    document.title = meta.title

    // 2. Helper to set or create meta/link tags
    const setMeta = (nameAttr: string, nameVal: string, content: string) => {
      let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(nameAttr, nameVal)
        document.head.appendChild(el)
      }
      el.content = content
    }

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.href = href
    }

    const url = absoluteUrl(meta.path)
    const ogImage = absoluteUrl(`/og/${meta.og ?? 'default'}.jpg`)

    setMeta('name', 'description', meta.description)
    setLink('canonical', url)

    // OpenGraph
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', company.name)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', ogImage)

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', meta.title)
    setMeta('name', 'twitter:description', meta.description)
    setMeta('name', 'twitter:image', ogImage)

    // JSON-LD Scripts
    const oldScripts = document.querySelectorAll('script[data-runtime-schema]')
    oldScripts.forEach((s) => s.remove())

    const schemas = schemaFor(meta)
    schemas.forEach((schema) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-runtime-schema', 'true')
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })
  }, [meta])

  return null
}
