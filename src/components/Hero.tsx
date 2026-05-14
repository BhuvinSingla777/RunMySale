import type { ReactNode } from 'react'
import { CtaStores } from './CtaStores'

type HeroProps = {
  eyebrow?: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  children?: ReactNode
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__content">
          {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
          <CtaStores />
          {children}
        </div>
        <div className="hero__media">
          <img
            src={imageSrc}
            alt={imageAlt}
            width={640}
            height={720}
            decoding="async"
            fetchPriority="high"
            className="hero__img"
          />
        </div>
      </div>
    </section>
  )
}
