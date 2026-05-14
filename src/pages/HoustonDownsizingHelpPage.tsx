// import { useState } from 'react'
import { Seo } from '../components/Seo'
import {
  FIND_HELP,
  SITE,
} from '../constants/links'
import './HoustonDownsizingHelpPage.css'

function LogoMark() {
  return (
    <svg className="hd-logo__mark" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#e8f4fc" />
      <path
        fill="#0056b3"
        d="M12 26c2-6 6-10 12-11l2 4c-4 1-7 4-8 7H12zm14-13c1.5 0 3 1.2 3 2.8 0 1-1 2-2 2.2L25 22h-3l1-6h-2l-1-3h5z"
      />
      <circle cx="26" cy="13" r="2.2" fill="#76b41e" />
    </svg>
  )
}

function IconCheckBlue() {
  return (
    <svg className="hd-check-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconHome() {
  return (
    <svg className="hd-icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-7H10v7H5a1 1 0 01-1-1v-9.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconStorage() {
  return (
    <svg className="hd-icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <rect x="3" y="10" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <rect x="3" y="16" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <path d="M7 6h0M7 12h0M7 18h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconItems() {
  return (
    <svg className="hd-icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 8h3l2-2h6l2 2h3v12H4V8z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="3.25" stroke="currentColor" strokeWidth="1.75" />
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

function SocialFb() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
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

const HD_IMG_ROOT = '/houston-downsizing'

const HD_IMAGES = {
  hero: `${HD_IMG_ROOT}/hero/hero.png`,
  connect: `${HD_IMG_ROOT}/03-connect.png`,
  collageBase: `${HD_IMG_ROOT}/collage`,
  testimonials: {
    person1: `${HD_IMG_ROOT}/testimonials/person1.png`,
    person2: `${HD_IMG_ROOT}/testimonials/person2.png`,  
    person3: `${HD_IMG_ROOT}/testimonials/person3.png`,
  },
  examples: {
    furniture: `${HD_IMG_ROOT}/examples/furniture.png`,
    tools: `${HD_IMG_ROOT}/examples/tools.png`,
    appliances: `${HD_IMG_ROOT}/examples/appliances.png`,
    garageContents: `${HD_IMG_ROOT}/04-houston-benefits.png`,
    householdItems: `${HD_IMG_ROOT}/05-residents-use.png`,
  }
} as const

const CONNECT_IMAGES = [
  `${HD_IMAGES.collageBase}/01.png`,
  `${HD_IMAGES.collageBase}/02.png`,
  `${HD_IMAGES.collageBase}/03.png`,
] as const

export function HoustonDownsizingHelpPage() {
  // const [faqOpen, setFaqOpen] = useState<number | null>(null)

  return (
    <>
      <Seo
        title="Downsizing Help in Houston | RunMySale"
        description="If you are downsizing in Houston, explore getting help selling items before paying to remove them. See what could be sold before giving it away."
        path="/houston-downsizing-help"
      />
      <div className="hd-page">
        <main id="main-content">
          <section className="hd-hero" aria-labelledby="hd-hero-title">
            <div
              className="hd-hero__photo"
              style={{ backgroundImage: `url(${HD_IMAGES.hero})` }}
              role="presentation"
            />
            <div className="hd-hero__wash" aria-hidden="true" />

            <div className="hd-hero__shell">
              <div className="hd-header-pill">
                <a className="hd-logo" href={SITE} target="_blank" rel="noreferrer">
                  <LogoMark />
                  <span className="hd-logo__wordmark">
                    <span className="hd-logo__run">Run</span>
                    <span className="hd-logo__mysale">MySale</span>
                  </span>
                </a>
                <a className="hd-btn-get" href={FIND_HELP} target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </div>

              <div className="hd-hero__content">
                <h1 id="hd-hero-title" className="hd-hero__h1">
                  Downsizing In{' '}
                  <span className="hd-t-orange">Houston?</span>
                </h1>
                <h2 className="hd-hero__h2">
                  See What Could Be{' '}
                  <span className="hd-t-green">Sold</span>{' '}
                  Before{' '}
                  <span className="hd-t-blue">Giving It Away.</span>
                </h2>
                <p className="hd-hero__lead">
                  If you are downsizing in Houston, explore getting help selling items before paying to remove them.
                </p>
                <div className="hd-hero__actions">
                  <a
                    className="hd-btn hd-btn--blue"
                    href={FIND_HELP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Availability In Houston
                  </a>
                </div>
                <p className="hd-hero__fine">
                  Takes just a few minutes to explore. No obligation.
                </p>
              </div>
            </div>
          </section>

          <section className="hd-connect" aria-labelledby="hd-connect-title">
            <div className="hd-connect__grid">
              <div className="hd-connect__visual">
                <div className="hd-connect__images">
                  {CONNECT_IMAGES.map((src, index) => (
                    <div key={index} className={`hd-connect__image hd-connect__image--${index + 1}`}>
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="hd-connect__copy">
                <h2 id="hd-connect-title" className="hd-connect__h">
                  <span className="hd-t-teal">RunMySale</span>{' '}
                  <span className="hd-t-green">Connects You With </span>
                  <span className="hd-t-teal">Local People Who Help Sell Your Items </span>
                  <span className="hd-t-green">From Start To Finish</span>
                </h2>
                <p className="hd-connect__p">
                  Instead of handling everything yourself, explore getting help selling furniture,
                  household items, tools, collectibles, garage contents, and more.
                </p>
                <p className="hd-connect__p">
                  Some people use traditional driveway garage sales. Others explore selling items
                  online.
                </p>
                <p className="hd-connect__p">
                  RunMySale is built for people who want help simplifying the process from start to
                  finish.
                </p>

                <div className="hd-connect-cards">
                  <article className="hd-connect-card hd-connect-card--blue">
                    <div className="hd-connect-card__icon">
                      <IconHome />
                    </div>
                    <div className="hd-connect-card__text">
                      <h3 className="hd-connect-card__title">Traditional Garage Sales</h3>
                      <p className="hd-connect-card__body">
                        Friendly local help organizing and selling items in-person.
                      </p>
                      <p className="hd-connect-card__foot">
                        Great for downsizing, moving, estate cleanouts, garage cleanouts, and household
                        decluttering.
                      </p>
                    </div>
                  </article>
                  <article className="hd-connect-card hd-connect-card--green">
                    <div className="hd-connect-card__icon">
                      <IconItems />
                    </div>
                    <div className="hd-connect-card__text">
                      <h3 className="hd-connect-card__title">Online Selling Help</h3>
                      <p className="hd-connect-card__body">
                        Explore help listing and selling items online instead of figuring everything out
                        yourself.
                      </p>
                      <p className="hd-connect-card__foot">
                        Useful for furniture, electronics, collectibles, tools, decor, and more.
                      </p>
                    </div>
                  </article>
                  <article className="hd-connect-card hd-connect-card--blue">
                    <div className="hd-connect-card__icon">
                      <IconCheckBlue />
                    </div>
                    <div className="hd-connect-card__text">
                      <h3 className="hd-connect-card__title">Less Stress, More Support</h3>
                      <p className="hd-connect-card__body">
                        RunMySale is designed for people who want help simplifying the process instead of
                        doing everything alone.
                      </p>
                      <p className="hd-connect-card__foot">
                        Before donating or paying to remove items, explore whether selling first makes
                        sense.
                      </p>
                    </div>
                  </article>
                </div>

                <div className="hd-connect__cta-row">
                  <a
                    className="hd-btn hd-btn--blue hd-btn--pill"
                    href={FIND_HELP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Availability In Your Area
                  </a>
                  <a className="hd-btn hd-btn--outline-dark hd-btn--pill" href="#hd-app-downloads">
                    Start In The App (2–3 Minutes)
                  </a>
                </div>
                <p className="hd-connect__cta-fine">
                  Takes just a few minutes to explore. No obligation.
                </p>
              </div>
            </div>
          </section>

          <section className="hd-houston-benefits" aria-labelledby="hd-houston-title">
            <div className="hd-houston-benefits__content">
              <div className="hd-houston-benefits__copy">
                <h2 id="hd-houston-title" className="hd-houston-benefits__h">
                  Downsizing in <span className="hd-t-blue">Houston</span> often means dealing with:
                </h2>
                <ul className="hd-houston-benefits__list">
                  <li className="hd-houston-benefits__item">
                    <IconHome />
                    <span>Large Homes</span>
                  </li>
                  <li className="hd-houston-benefits__item">
                    <IconStorage />
                    <span>Garage Storage</span>
                  </li>
                  <li className="hd-houston-benefits__item">
                    <IconItems />
                    <span>Long-term Accumulated Belongings</span>
                  </li>
                </ul>
                <p className="hd-houston-benefits__desc">
                  Before removing everything, explore what may be worth selling.
                </p>
                <a
                  className="hd-btn hd-btn--blue"
                  href={FIND_HELP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Availability in Houston
                </a>
                <p className="hd-houston-benefits__fine">
                  Takes just a few minutes. No obligation.
                </p>
              </div>
              <div className="hd-houston-benefits__image">
                <img
                  src={HD_IMAGES.examples.garageContents}
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section className="hd-residents" aria-labelledby="hd-residents-title">
            <h2 id="hd-residents-title" className="hd-residents__h">
              Houston residents use RunMySale to
            </h2>
            <div className="hd-residents__grid">
              <article className="hd-resident-card hd-resident-card--green">
                <div className="hd-resident-card__image">
                  <img
                    src={HD_IMAGES.testimonials.person1}
                    alt=""
                    width={150}
                    height={150}
                    loading="lazy"
                  />
                </div>
                <h3 className="hd-resident-card__title">Reduce Clutter Before Moving</h3>
                <div className="hd-resident-card__line hd-resident-card__line--green" />
              </article>
              <article className="hd-resident-card hd-resident-card--orange">
                <div className="hd-resident-card__image">
                  <img
                    src={HD_IMAGES.testimonials.person2}
                    alt=""
                    width={150}
                    height={150}
                    loading="lazy"
                  />
                </div>
                <h3 className="hd-resident-card__title">Simplify Downsizing</h3>
                <div className="hd-resident-card__line hd-resident-card__line--orange" />
              </article>
              <article className="hd-resident-card hd-resident-card--green">
                <div className="hd-resident-card__image">
                  <img
                    src={HD_IMAGES.testimonials.person3}
                    alt=""
                    width={150}
                    height={150}
                    loading="lazy"
                  />
                </div>
                <h3 className="hd-resident-card__title">Explore Selling Items</h3>
                <div className="hd-resident-card__line hd-resident-card__line--green" />
              </article>
            </div>
          </section>

          <section className="hd-examples" aria-labelledby="hd-examples-title">
            <h2 id="hd-examples-title" className="hd-examples__h">
              ITEM EXAMPLES
            </h2>
            <p className="hd-examples__desc">
              We help people sell all sorts of items. Here are just some examples. But we can sell 
              pretty much anything you have in your home or storage.
            </p>
            <div className="hd-examples__grid">
              <div className="hd-example-item hd-example-item--large">
                <img
                  src={HD_IMAGES.examples.furniture}
                  alt=""
                  loading="lazy"
                />
                <div className="hd-example-item__label">Furniture</div>
              </div>
              <div className="hd-example-item">
                <img
                  src={HD_IMAGES.examples.tools}
                  alt=""
                  loading="lazy"
                />
                <div className="hd-example-item__label">Tools</div>
              </div>
              <div className="hd-example-item">
                <img
                  src={HD_IMAGES.examples.appliances}
                  alt=""
                  loading="lazy"
                />
                <div className="hd-example-item__label">Appliances</div>
              </div>
              <div className="hd-example-item">
                <img
                  src={HD_IMAGES.examples.garageContents}
                  alt=""
                  loading="lazy"
                />
                <div className="hd-example-item__label">Garage/Garden</div>
              </div>
              <div className="hd-example-item">
                <img
                  src={HD_IMAGES.examples.householdItems}
                  alt=""
                  loading="lazy"
                />
                <div className="hd-example-item__label">Household Items</div>
              </div>
            </div>
          </section>

          <section className="hd-process" aria-labelledby="hd-process-title">
            <h2 id="hd-process-title" className="hd-process__h">
              3-step process
            </h2>
            <div className="hd-process__steps">
              <div className="hd-process-step">
                <div className="hd-process-step__number">1</div>
                <h3 className="hd-process-step__title">Start in the app</h3>
              </div>
              <div className="hd-process-step">
                <div className="hd-process-step__number">2</div>
                <h3 className="hd-process-step__title">Check availability in Houston</h3>
              </div>
              <div className="hd-process-step">
                <div className="hd-process-step__number">3</div>
                <h3 className="hd-process-step__title">Explore help</h3>
              </div>
            </div>
            <a
              className="hd-btn hd-btn--orange hd-btn--pill"
              href={FIND_HELP}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Availability In Houston
            </a>
            <p className="hd-process__fine">
              Takes just a few minutes to explore.
            </p>
          </section>

          <section className="hd-final-cta" aria-labelledby="hd-final-title">
            <h2 id="hd-final-title" className="hd-final-cta__h">
              Before Giving It Away In Houston, See What It May Be Worth.
            </h2>
            <a
              className="hd-btn hd-btn--blue hd-btn--pill"
              href={FIND_HELP}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Availability In Houston
            </a>
            <p className="hd-final-cta__fine">
              Takes just a few minutes to explore.
            </p>
          </section>
        </main>

        <footer className="hd-foot">
          <div className="hd-foot__social">
            <a href="https://x.com/RunMySale" target="_blank" rel="noopener noreferrer" aria-label="X">
              <SocialX />
            </a>
            <a
              href="https://www.facebook.com/runmysale"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <SocialFb />
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
          <p className="hd-foot__copy">© 2026 All Right Reserved.</p>
        </footer>
      </div>
    </>
  )
}