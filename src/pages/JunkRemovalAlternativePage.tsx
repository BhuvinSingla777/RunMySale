import { useState } from 'react'
import { Seo } from '../components/Seo'
import {
  APP_ANDROID,
  APP_IOS,
  FIND_HELP,
  SITE,
} from '../constants/links'
import './DownsizingHelpPage.css'
import './JunkRemovalAlternativePage.css'

function LogoMark() {
  return (
    <svg className="ds-logo__mark" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#e8f4fc" />
      <path
        fill="#0056b3"
        d="M12 26c2-6 6-10 12-11l2 4c-4 1-7 4-8 7H12zm14-13c1.5 0 3 1.2 3 2.8 0 1-1 2-2 2.2L25 22h-3l1-6h-2l-1-3h5z"
      />
      <circle cx="26" cy="13" r="2.2" fill="#76b41e" />
    </svg>
  )
}

function IconHouse() {
  return (
    <svg className="jr-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-7H10v7H5a1 1 0 01-1-1v-9.5z" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg className="jr-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M10 18h4" strokeLinecap="round" />
    </svg>
  )
}

function IconHandHeart() {
  return (
    <svg className="jr-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21s-8-5.5-8-11a5 5 0 019.12-2.76A5 5 0 0120 10c0 5.5-8 11-8 11z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconTrust() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCheckMini() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
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

/** Same collage asset as Downsizing Help — matches Figma “explore local help” block */
const CONNECT_COLLAGE = '/figma-downsizing/connect.png'

const VS_BAD_IMG =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=75'
const VS_GOOD_IMG =
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=75'
const CT_BAD_IMG =
  'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=75'
const CT_GOOD_IMG =
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=75'
const FINAL_IMG =
  'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1400&q=80'

const junkCategories = [
  {
    label: 'Old furniture',
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=75',
  },
  {
    label: 'Garage contents',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=75',
  },
  {
    label: 'Tools',
    src: 'https://images.unsplash.com/photo-1581147036324-c9cd1de54444?auto=format&fit=crop&w=400&q=75',
  },
  {
    label: 'Storage clutter',
    src: 'https://images.unsplash.com/photo-1600585154526-990dcec496db?auto=format&fit=crop&w=400&q=75',
  },
  {
    label: 'Appliances',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf47?auto=format&fit=crop&w=400&q=75',
  },
  {
    label: 'Household goods',
    src: 'https://images.unsplash.com/photo-1584622789897-aed493fd8bdb?auto=format&fit=crop&w=400&q=75',
  },
  {
    label: 'Patio furniture',
    src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=400&q=75',
  },
  {
    label: 'Electronics',
    src: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=75',
  },
] as const

export function JunkRemovalAlternativePage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  return (
    <>
      <Seo
        title="Junk Removal Alternative | RunMySale"
        description="Before paying to haul it away, explore selling first. RunMySale connects you with local people who help sell furniture, garage contents, tools, and more."
        path="/junk-removal-alternative"
      />
      <div className="ds junk-page">
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
          <section className="jr-hero" aria-labelledby="jr-hero-title">
            <div className="jr-hero__bg" aria-hidden="true" />
            <div className="jr-hero__inner">
              <div className="jr-hero__text">
                <h1 id="jr-hero-title" className="jr-hero__h1">
                  Before Paying To Haul It Away, See If It Could Be{' '}
                  <span className="jr-hero__accent">Sold First.</span>
                </h1>
                <p className="jr-hero__lead">
                  Some junk may not be junk. RunMySale helps you explore selling items
                  before throwing value away.
                </p>
                <div className="jr-hero__actions">
                  <a
                    className="ds-btn jr-btn--primary"
                    href={FIND_HELP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Availability In Your Area
                  </a>
                  <a className="ds-btn ds-btn--outline-white" href="#jr-app-downloads">
                    Start In The App (2–3 Minutes)
                  </a>
                </div>
                <p className="jr-hero__fine">
                  Takes just a few minutes to check. No obligation to explore.
                </p>
                <div className="jr-hero__checks">
                  <span className="jr-hero__check">
                    <IconCheckMini />
                    Check before paying removal costs
                  </span>
                  <span className="jr-hero__check">
                    <IconCheckMini />
                    Explore hidden value
                  </span>
                  <span className="jr-hero__check">
                    <IconCheckMini />
                    Start in the app
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="jr-connect" aria-labelledby="jr-connect-title">
            <div className="jr-connect__grid">
              <div className="jr-connect__visual">
                <img
                  src={CONNECT_COLLAGE}
                  alt=""
                  width={960}
                  height={910}
                  loading="lazy"
                  decoding="async"
                  className="jr-connect__collage-img"
                />
              </div>
              <div>
                <h2 id="jr-connect-title" className="jr-connect__h">
                  <span className="jr-t-teal">RunMySale</span>{' '}
                  <span className="jr-t-green">Connects You With Local People </span>
                  <span className="jr-t-teal">Who Help</span>{' '}
                  <span className="jr-t-green">Sell Your Items </span>
                  <span className="jr-t-teal">From Start To Finish</span>
                </h2>
                <p className="jr-connect__p">
                  Instead of handling everything yourself, explore getting help selling
                  furniture, household items, tools, collectibles, garage contents, and
                  more.
                </p>
                <p className="jr-connect__p">
                  Some people use traditional driveway garage sales. Others explore selling items online.</p>
                <p className="jr-connect__p">
                  RunMySale is built for people who want help simplifying the process
                  from start to finish.
                </p>

                <div className="jr-features">
                  <div className="jr-feature">
                    <div className="jr-feature__icon-wrap" aria-hidden="true">
                      <IconHouse />
                    </div>
                    <h3 className="jr-feature__h jr-feature__h--deep-green">
                      Traditional Garage Sales
                    </h3>
                    <p>Friendly local help organizing and selling items in-person.</p>
                    <div className="jr-feature__foot">
                      From setup to selling, explore support through the process.
                    </div>
                  </div>
                  <div className="jr-feature">
                    <div className="jr-feature__icon-wrap" aria-hidden="true">
                      <IconPhone />
                    </div>
                    <h3 className="jr-feature__h">Online Selling Help</h3>
                    <p>
                      Explore help listing and selling items online instead of figuring
                      everything out yourself.
                    </p>
                    <div className="jr-feature__foot">
                      From photos and listings to communication and selling support.
                    </div>
                  </div>
                  <div className="jr-feature">
                    <div className="jr-feature__icon-wrap" aria-hidden="true">
                      <IconHandHeart />
                    </div>
                    <h3 className="jr-feature__h">Less Stress, More Support</h3>
                    <p>
                      RunMySale is designed for people who want help simplifying the
                      process instead of doing everything alone.
                    </p>
                    <div className="jr-feature__foot">
                      Built for people who want support from start to finish.
                    </div>
                  </div>
                </div>

                <div className="jr-banner">
                  Start In The App → Explore Local Help → Decide What Makes Sense
                </div>

                <div className="jr-trust">
                  {[
                    'Help From Start To Finish',
                    'Explore Full-Service Selling Help',
                    'Built For People Who Want Support',
                    'Help Without Doing Everything Yourself',
                  ].map((label) => (
                    <div key={label} className="jr-trust__item">
                      <div className="jr-trust__icon">
                        <IconTrust />
                      </div>
                      {label}
                    </div>
                  ))}
                </div>

                <div className="jr-connect__cta-row">
                  <a
                    className="ds-btn jr-btn--primary"
                    href={FIND_HELP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Availability In Your Area
                  </a>
                  <a className="ds-btn jr-btn--outline-muted" href="#jr-app-downloads">
                    Start In The App (2–3 Minutes)
                  </a>
                </div>
                <p className="jr-connect__cta-fine">
                  Takes just a few minutes to explore. No obligation.
                </p>
              </div>
            </div>
          </section>

          <section className="jr-strip ds-strip">
            <div className="ds-strip__inner">
              <div className="jr-connect__cta-row">
                <a
                  className="ds-btn jr-btn--primary"
                  href={FIND_HELP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Availability In Your Area
                </a>
                <a className="ds-btn jr-btn--outline-muted" href="#jr-app-downloads">
                  Start In The App (2–3 Minutes)
                </a>
              </div>
              <p className="jr-connect__cta-fine">
                Takes just a few minutes to explore. No obligation.
              </p>
            </div>
          </section>

          <section className="jr-vs" aria-labelledby="jr-vs-title">
            <h2 id="jr-vs-title" className="jr-vs__h">
              What If Your &apos;Junk&apos; Could Put Money Back In Your Pocket?
            </h2>
            <div className="jr-vs__grid">
              <div className="jr-vs__cards" aria-hidden="true">
                <div className="jr-vs-card jr-vs-card--bad">
                  <span className="jr-vs-card__label">Pay out to haul away</span>
                  <div className="jr-vs-card__badge">✕</div>
                  <img src={VS_BAD_IMG} alt="" width={320} height={240} loading="lazy" />
                  <div className="jr-vs-card__money">−$$$</div>
                </div>
                <div className="jr-vs__mid">VS</div>
                <div className="jr-vs-card jr-vs-card--good">
                  <span className="jr-vs-card__label">Potentially get money back</span>
                  <div className="jr-vs-card__badge">✓</div>
                  <img src={VS_GOOD_IMG} alt="" width={320} height={240} loading="lazy" />
                  <div className="jr-vs-card__money">+$$$</div>
                </div>
              </div>
              <div className="jr-vs__copy">
                <p>
                  Junk removal can be fast — but many garages still hold chairs, tools,
                  décor, and electronics someone else would happily buy.
                </p>
                <p>
                  RunMySale helps you explore selling first so you do not pay tipping fees
                  on items that still have market value.
                </p>
                <a
                  className="ds-btn jr-btn--primary jr-btn--rounded-md"
                  href={FIND_HELP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Availability
                </a>
                <p className="jr-vs__fine">
                  It only takes a few minutes to see if RunMySale may be a fit.
                </p>
              </div>
            </div>
          </section>

          <section className="jr-compare-table" aria-labelledby="jr-ct-title">
            <h2 id="jr-ct-title" className="jr-compare-table__h">
              Junk Removal Costs Money. Selling First Could Recover Value.
            </h2>
            <div className="jr-compare-table__grid">
              <article className="jr-ct-card jr-ct-card--bad">
                <div className="jr-ct-card__head">
                  <span className="jr-ct-card__badge jr-ct-card__badge--bad" aria-hidden="true">
                    ✕
                  </span>
                  <strong>Traditional Option:</strong>
                </div>
                <ul>
                  <li>Pay to remove everything</li>
                  <li>Lose potential resale value</li>
                  <li>Treat all clutter the same</li>
                </ul>
                <img src={CT_BAD_IMG} alt="" width={280} height={280} loading="lazy" />
              </article>
              <article className="jr-ct-card jr-ct-card--good">
                <div className="jr-ct-card__head">
                  <span className="jr-ct-card__badge jr-ct-card__badge--good" aria-hidden="true">
                    ✓
                  </span>
                  <strong>RunMySale Option:</strong>
                </div>
                <ul>
                  <li>Explore what may be worth selling</li>
                  <li>Get help before throwing things away</li>
                  <li>Potentially reduce waste and recover value</li>
                </ul>
                <img src={CT_GOOD_IMG} alt="" width={280} height={280} loading="lazy" />
              </article>
            </div>
          </section>

          <section className="jr-items" aria-labelledby="jr-items-title">
            <h2 id="jr-items-title" className="jr-items__h">
              Things People Often Assume Are Junk
            </h2>
            <div className="jr-items__grid">
              {junkCategories.map((item) => (
                <div key={item.label} className="jr-item">
                  <img src={item.src} alt="" width={200} height={200} loading="lazy" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <p className="jr-items__pill">
              Some items may not be worth selling, but checking first can be a smart move.
            </p>
          </section>

          <section className="jr-hiw" aria-labelledby="jr-hiw-title">
            <div className="jr-hiw__shell">
              <h2 id="jr-hiw-title" className="jr-hiw__h">
                How It Works
              </h2>
              <div className="jr-hiw__inner">
                <div className="jr-hiw__steps-wrap">
                  <div className="jr-hiw__steps">
                  {[
                    { n: '1', label: 'Download the app.' },
                    { n: '2', label: 'Share what you want to sell.' },
                    { n: '3', label: 'Get matched with help.' },
                    { n: '4', label: 'Get paid.' },
                  ].map((s) => (
                    <div key={s.n} className="jr-hiw-step">
                      <div className="jr-hiw-step__num">{s.n}</div>
                      <div className="jr-hiw-step__icon">
                        <IconPhone />
                      </div>
                      <p>{s.label}</p>
                    </div>
                  ))}
                  </div>
                  <p className="jr-hiw__fine">
                    Getting started typically takes just a few minutes.
                  </p>
                <div className="jr-hiw__cta">
                  <a className="ds-btn jr-btn--primary" href="#jr-app-downloads">
                    Start In The App
                  </a>
                </div>
                </div>
              <div className="jr-phone-mock">
                <div className="jr-phone-mock__screen">
                  <p className="jr-phone-mock__brand">
                    <span className="ds-logo__run">Run</span>
                    <span className="ds-logo__mysale">MySale</span>
                  </p>
                  <p>What can we help you with?</p>
                  <a className="jr-phone-mock__btn" href={FIND_HELP}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            </div>
          </section>

          <section className="jr-warn" aria-labelledby="jr-warn-title">
            <div className="jr-warn__box">
              <svg className="jr-warn__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 2L2 22h20L12 2zm0 16a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-9a2 2 0 012 2v5h-4v-5a2 2 0 012-2z" />
              </svg>
              <div>
                <h3 id="jr-warn-title">
                  Do Not Pay To Remove Value Without Checking First
                </h3>
                <p>
                  If you are already thinking about clearing things out, this is the moment
                  to check. A few minutes now could help you avoid throwing away things that
                  may have resale value.
                </p>
              </div>
            </div>
          </section>

          <section className="jr-faq" aria-labelledby="jr-faq-title">
            <h2 id="jr-faq-title" className="jr-faq__h">
              Frequently Asked Questions
            </h2>
            <div className="jr-faq__list">
              {[
                {
                  q: 'Is RunMySale a junk removal company?',
                  a: 'Not exactly. RunMySale is focused on helping people explore selling items before throwing value away.',
                },
                {
                  q: 'Should I use this before hiring junk removal?',
                  a: 'It can be worth checking first, especially if you have furniture, tools, electronics, garage items, or household goods.',
                },
                {
                  q: 'What if some items really are junk?',
                  a: 'That is okay. The goal is to explore what may be worth selling before everything gets removed.',
                },
                {
                  q: 'How long does it take to get started?',
                  a: 'Getting started through the app should only take a few minutes.',
                },
              ].map((item, i) => {
                const open = faqOpen === i
                return (
                  <div key={item.q} className="jr-faq__item">
                    <button
                      type="button"
                      className="jr-faq__btn"
                      aria-expanded={open}
                      onClick={() => setFaqOpen(open ? null : i)}
                    >
                      {item.q}
                      <span className={`jr-faq__chev ${open ? 'is-open' : ''}`} />
                    </button>
                    {open ? <p className="jr-faq__a">{item.a}</p> : null}
                  </div>
                )
              })}
            </div>
          </section>

          <section className="jr-final" aria-labelledby="jr-final-title">
            <div className="jr-final__img">
              <img src={FINAL_IMG} alt="" width={900} height={600} loading="lazy" />
            </div>
            <div className="jr-final__content">
              <h2 id="jr-final-title">
                Before You Pay To Haul It Away, <strong>Check First.</strong>
              </h2>
              <a
                className="jr-final__btn"
                href={FIND_HELP}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Availability In Your Area
              </a>
              <p className="jr-final__fine">
                Start in just a few minutes. No obligation to explore.
              </p>
            </div>
          </section>

          <section id="jr-app-downloads" className="ds-app-dl" aria-labelledby="jr-app-title">
            <div className="ds-app-dl__inner">
              <h2 id="jr-app-title" className="ds-app-dl__h">
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
