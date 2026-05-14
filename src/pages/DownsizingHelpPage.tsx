import { useState } from 'react'
import { Seo } from '../components/Seo'
import {
  APP_ANDROID,
  APP_IOS,
  FIND_HELP,
  SITE,
} from '../constants/links'
import './DownsizingHelpPage.css'

function LogoMark() {
  return (
    <svg
      className="ds-logo__mark"
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="20" fill="#e8f4fc" />
      <path
        fill="#0056b3"
        d="M12 26c2-6 6-10 12-11l2 4c-4 1-7 4-8 7H12zm14-13c1.5 0 3 1.2 3 2.8 0 1-1 2-2 2.2L25 22h-3l1-6h-2l-1-3h5z"
      />
      <circle cx="26" cy="13" r="2.2" fill="#76b41e" />
    </svg>
  )
}

function IconBrain() {
  return (
    <svg className="ds-ben-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M12 5a3 3 0 00-3 3v1H7a2 2 0 00-2 2v2a2 2 0 002 2h1v2a3 3 0 003 3" />
      <path d="M12 5a3 3 0 013 3v1h2a2 2 0 012 2v2a2 2 0 01-2 2h-1v2a3 3 0 01-3 3" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconTags() {
  return (
    <svg className="ds-ben-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M4 12V5a1 1 0 011-1h7l10 10-7 7L4 12z" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconCheckCircle() {
  return (
    <svg className="ds-ben-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" />
    </svg>
  )
}

function IconDollar() {
  return (
    <svg className="ds-ben-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M12 3v18M15 8.5A2.5 2.5 0 0012 6c-1.5 0-2.5 1-2.5 2.2 0 2 2.5 2.2 2.5 4.3 0 1.2-1 2.2-2.5 2.2a2.5 2.5 0 01-3-2.3" strokeLinecap="round" />
    </svg>
  )
}

function SocialX() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  )
}

function SocialIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  )
}

function SocialYt() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  )
}

/** Exported slices from Figma (page 1) — served from /public/figma-downsizing */
const FIGMA = {
  hero: '/figma-downsizing/hero.png',
  connect: '/figma-downsizing/connect.jpg',
  value: '/figma-downsizing/value.png',
  common: '/figma-downsizing/common-items.png',
  hiw: '/figma-downsizing/how-it-works.png',
  parents: '/figma-downsizing/parents-photo.png',
  final: '/figma-downsizing/final-cta.png',
} as const

export function DownsizingHelpPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  return (
    <>
    <div className="ds">
      <Seo
        title="Downsizing Help | RunMySale"
        description="See what could be sold before giving it away. RunMySale connects you with local people who help sell your items from start to finish — less stress, more support."
        path="/"
      />
      <header className="ds-header">
        <div className="ds-header__inner">
          <a className="ds-logo" href={SITE} target="_blank" rel="noreferrer">
            <LogoMark />
            <span className="ds-logo__wordmark">
              <span className="ds-logo__run">Run</span>
              <span className="ds-logo__mysale">MySale</span>
            </span>
          </a>
          <a className="ds-btn-get" href={FIND_HELP} target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="ds-hero ds-hero--figma" aria-label="Downsizing help hero">
          <div className="ds-hero__figma-wrap">
            <img
              className="ds-hero__figma-img"
              src={FIGMA.hero}
              alt=""
              width={1920}
              height={870}
              decoding="async"
              fetchPriority="high"
            />
            <a
              className="ds-hero__hit ds-hero__hit--primary"
              href={FIND_HELP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Check Availability In Your Area</span>
            </a>
            <a
              className="ds-hero__hit ds-hero__hit--secondary"
              href="#runmysale-app-downloads"
            >
              <span className="sr-only">Start In The App</span>
            </a>
          </div>
          <div className="sr-only">
            <h1 id="ds-hero-title">Downsizing?</h1>
            <p>
              See What Could Be Sold Before Giving It Away. Simplify with less stress
              and potentially recover value from items you no longer need.
            </p>
          </div>
        </section>

        <section className="ds-connect ds-connect--figma" aria-labelledby="ds-connect-title">
          <h2 id="ds-connect-title" className="sr-only">
            RunMySale Connects You With Local People Who Help Sell Your Items From
            Start To Finish
          </h2>
          <p className="sr-only">
            Instead of handling everything yourself, explore getting help selling
            furniture, household items, tools, collectibles, garage contents, and
            more. Some people use traditional driveway garage sales. Others explore
            selling items online. RunMySale is built for people who want help
            simplifying the process from start to finish.
          </p>
          <div className="ds-connect__figma-wrap">
            <img
              className="ds-connect__figma-img"
              src={FIGMA.connect}
              alt=""
              width={1920}
              height={1821}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className="ds-strip" aria-label="Call to action">
          <div className="ds-strip__inner">
            <div className="ds-cta-row">
              <a
                className="ds-btn ds-btn--green"
                href={FIND_HELP}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Availability In Your Area
              </a>
              <a className="ds-btn ds-btn--outline-dark" href="#runmysale-app-downloads">
                Start In The App (2–3 Minutes)
              </a>
            </div>
            <p className="ds-cta-fine">
              Takes just a few minutes to explore. No obligation.
            </p>
          </div>
        </section>

        <section className="ds-value ds-value--figma" aria-labelledby="ds-value-title">
          <h2 id="ds-value-title" className="sr-only">
            Downsizing Does Not Have To Mean Giving Valuable Things Away
          </h2>
          <p className="sr-only">
            Many people donate too quickly. Pay removal costs. Or let valuable items
            go. Explore selling first.
          </p>
          <div className="ds-value__figma-wrap">
            <img
              className="ds-value__figma-img"
              src={FIGMA.value}
              alt=""
              width={1920}
              height={852}
              loading="lazy"
              decoding="async"
            />
            <a
              className="ds-value__hit ds-value__hit--primary"
              href={FIND_HELP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Check Availability In Your Area</span>
            </a>
            <a
              className="ds-value__hit ds-value__hit--secondary"
              href="#runmysale-app-downloads"
            >
              <span className="sr-only">Start In The App</span>
            </a>
          </div>
        </section>

        <section className="ds-benefits" aria-labelledby="ds-benefits-title">
          <h2 id="ds-benefits-title" className="sr-only">
            Benefits
          </h2>
          <div className="ds-benefits__grid">
            <div className="ds-ben-card">
              <IconBrain />
              <h3>
                Reduce
                <br />
                Overwhelm
              </h3>
              <div className="ds-ben-card__line" />
            </div>
            <div className="ds-ben-card">
              <IconTags />
              <h3>
                Recover
                <br />
                Value
              </h3>
              <div className="ds-ben-card__line" />
            </div>
            <div className="ds-ben-card">
              <IconCheckCircle />
              <h3>
                Simplify
                <br />
                Decisions
              </h3>
              <div className="ds-ben-card__line" />
            </div>
            <div className="ds-ben-card">
              <IconDollar />
              <h3>
                Avoid
                <br />
                Unnecessary Costs
              </h3>
              <div className="ds-ben-card__line" />
            </div>
          </div>
        </section>

        <section className="ds-common ds-common--figma" aria-labelledby="ds-common-title">
          <h2 id="ds-common-title" className="ds-common__h">
            Common Items People Explore Selling While Downsizing
          </h2>
          <div className="ds-common__figma-wrap">
            <img
              className="ds-common__figma-img"
              src={FIGMA.common}
              alt="Categories: Furniture, Artwork, Kitchen Items, Decor Collections, and Tools"
              width={1578}
              height={364}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className="ds-hiw ds-hiw--figma" aria-label="How it works">
          <h2 className="sr-only">HOW IT WORKS — 3-step process</h2>
          <p className="sr-only">
            Step 1: Start in the app. Step 2: Check availability. Step 3: Explore
            help. Getting started takes only a few minutes.
          </p>
          <div className="ds-hiw__figma-wrap">
            <img
              className="ds-hiw__figma-img"
              src={FIGMA.hiw}
              alt=""
              width={1920}
              height={730}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <div className="ds-parents-wrap">
          <article className="ds-parents" aria-labelledby="ds-parents-heading">
            <div className="ds-parents__img">
              <img
                src={FIGMA.parents}
                alt="Family members reviewing keepsakes while downsizing together"
                width={347}
                height={306}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="ds-parents__text">
              <p className="ds-parents__k">Helping Parents</p>
              <h2 id="ds-parents-heading" className="ds-parents__h">
                Downsize?
              </h2>
              <p className="ds-parents__sub">
                This can be a fit for that too.
              </p>
            </div>
          </article>
        </div>

        <section className="ds-faq" aria-labelledby="ds-faq-title">
          <h2 id="ds-faq-title" className="ds-faq__h">
            Frequently Asked Questions
          </h2>
          <div className="ds-faq__list">
            {[
              {
                q: 'Can I explore before committing?',
                a: 'Yes',
              },
              {
                q: 'Can this help with senior downsizing?',
                a: 'Yes. You can explore local help in the app, ask questions, and decide what makes sense before committing.',
              },
            ].map((item, i) => {
              const open = faqOpen === i
              return (
                <div key={item.q} className="ds-faq__item">
                  <button
                    type="button"
                    className="ds-faq__btn"
                    aria-expanded={open}
                    onClick={() => setFaqOpen(open ? null : i)}
                  >
                    {item.q}
                    <span className={`ds-faq__chev ${open ? 'is-open' : ''}`} />
                  </button>
                  {open ? <p className="ds-faq__a">{item.a}</p> : null}
                </div>
              )
            })}
          </div>
        </section>

        <section className="ds-final ds-final--figma" aria-labelledby="ds-final-title">
          <h2 id="ds-final-title" className="sr-only">
            Before Giving It Away, See What It May Be Worth.
          </h2>
          <div className="ds-final__figma-wrap">
            <img
              className="ds-final__figma-img"
              src={FIGMA.final}
              alt=""
              width={1920}
              height={518}
              loading="lazy"
              decoding="async"
            />
            <a
              className="ds-final__hit ds-final__hit--primary"
              href={FIND_HELP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Check Availability</span>
            </a>
            <a
              className="ds-final__hit ds-final__hit--sub"
              href="#runmysale-app-downloads"
            >
              <span className="sr-only">Start in a few minutes — download the app</span>
            </a>
          </div>
        </section>

        <section
          id="runmysale-app-downloads"
          className="ds-app-dl"
          aria-labelledby="ds-app-dl-title"
        >
          <div className="ds-app-dl__inner">
            <h2 id="ds-app-dl-title" className="ds-app-dl__h">
              Download RunMySale
            </h2>
            <p className="ds-cta-fine" style={{ marginBottom: '1rem' }}>
              Start in the app on your device.
            </p>
            <div className="ds-app-dl__row">
              <a className="ds-app-dl__ios" href={APP_IOS} target="_blank" rel="noopener noreferrer">
                RunMySale on the App Store
              </a>
              <a
                className="ds-app-dl__android"
                href={APP_ANDROID}
                target="_blank"
                rel="noopener noreferrer"
              >
                RunMySale on Google Play
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="ds-foot">
        <div className="ds-foot__social">
          <a href="https://x.com/RunMySale" target="_blank" rel="noopener noreferrer" aria-label="X">
            <SocialX />
          </a>
          <a
            href="https://www.linkedin.com/company/runmysale"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <SocialIn />
          </a>
          <a
            href="https://www.youtube.com/@runmysale6659"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <SocialYt />
          </a>
        </div>
        <p className="ds-foot__copy">© 2026 All Right Reserved.</p>
      </footer>
    </div>
    </>
  )
}
