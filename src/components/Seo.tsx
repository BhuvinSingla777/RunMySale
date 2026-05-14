import { Helmet } from 'react-helmet-async'

type SeoProps = {
  title: string
  description: string
  path: string
}

function canonicalHref(path: string) {
  const base = import.meta.env.VITE_SITE_URL as string | undefined
  if (!base) return undefined
  return `${base.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`
}

export function Seo({ title, description, path }: SeoProps) {
  const canonical = canonicalHref(path)
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
