import { useState } from 'react'
import { Seo } from '../components/Seo'
import {
  FIND_HELP,
  SITE,
} from '../constants/links'
import './DownsizingHelpPage.css'
import './HiddenValueInYourHomePage.css'

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

/** Simple house — connect card 1 (matches comp) */
function IconHouseWhite() {
  return (
    <svg className="hv-icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

/** Smartphone — connect card 2 */
function IconPhoneWhite() {
  return (
    <svg className="hv-icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 18h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

/** Hand + bill — connect card 3 */
function IconHandBillWhite() {
  return (
    <svg className="hv-icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 7h7v11H9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M11 10h3M11 13h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M6 14c1.5-.5 3-.3 4.5.6 1 .6 2.2.8 3.5.5l3.5-.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCheckBlue() {
  return (
    <svg className="hv-check-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconPhoneOutline() {
  return (
    <svg className="hv-step__svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 18h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function IconCameraOutline() {
  return (
    <svg className="hv-step__svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function IconRocketOutline() {
  return (
    <svg className="hv-step__svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3s5 4 5 11c0 2-.5 4-1 5l-4-4-4 4c-.5-1-1-3-1-5 0-7 5-11 5-11z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M12 14v4M9 21h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function PiggyWatermark() {
  return (
    <svg className="hv-clutter-card__pig" viewBox="0 0 120 120" aria-hidden="true">
      <path
        fill="currentColor"
        d="M78 38c-4-12-14-18-26-18C38 20 26 28 22 40c-8 2-14 10-14 19v8c0 6 4 11 10 13 3 14 15 24 29 24h6c10 0 18-6 22-14 10-2 17-11 17-21v-6c0-10-8-18-18-18h-6zm-26-14c11 0 20 7 23 18h-8c-9 0-17 5-21 13-4-4-6-9-6-15 0-9 5-16 12-16zm34 52H44c-2 0-4 2-4 4s2 4 4 4h42c2 0 4-2 4-4s-2-4-4-4z"
      />
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

/**
 * Hidden Value page imagery — mirrors `public/hidden-value/` (numbered folders =
 * vertical sections on the page: hero → connect → clutter cards → garage grid → how it works).
 */
const HV_IMG_ROOT = '/hidden-value'

const HV_IMAGES = {
  /** Hero — full-width background */
  hero: `${HV_IMG_ROOT}/01-hero/hero.png`,
  /** Connect — mosaic beside “RunMySale Connects You…” (tiles 01–07) */
  connectCollageBase: `${HV_IMG_ROOT}/02-connect-collage`,
  /** Clutter band — three cards under “Look At Clutter Differently” (419×274) */
  clutterValueCards: {
    notJustStuff: `${HV_IMG_ROOT}/03-clutter-value-cards/not-just-stuff.png`,
    notAllOnYou: `${HV_IMG_ROOT}/03-clutter-value-cards/not-all-on-you.png`,
    notJustRemoval: `${HV_IMG_ROOT}/03-clutter-value-cards/not-just-removal.png`,
  },
  /** Garage sale categories — grid thumbnails (01–10, label order below) */
  garageCategoriesBase: `${HV_IMG_ROOT}/04-garage-sale-categories`,
  /** How It Works — photo beside steps */
  howItWorks: `${HV_IMG_ROOT}/05-how-it-works/how-it-works.png`,
  /** Optional extras in same folder (e.g. step-specific swaps later): photo-workshop.png, photo-listing.png */
} as const

const CONNECT_MOSAIC = [
  `${HV_IMAGES.connectCollageBase}/01.png`,
  `${HV_IMAGES.connectCollageBase}/02.png`,
  `${HV_IMAGES.connectCollageBase}/03.png`,
  `${HV_IMAGES.connectCollageBase}/04.png`,
  `${HV_IMAGES.connectCollageBase}/05.png`,
  `${HV_IMAGES.connectCollageBase}/06.png`,
  `${HV_IMAGES.connectCollageBase}/07.png`,
] as const

const garageCategories = [
  { label: 'Furniture', src: `${HV_IMAGES.garageCategoriesBase}/01.png` },
  { label: 'Tools', src: `${HV_IMAGES.garageCategoriesBase}/02.png` },
  { label: 'Vintage pieces', src: `${HV_IMAGES.garageCategoriesBase}/03.png` },
  { label: 'Garage contents', src: `${HV_IMAGES.garageCategoriesBase}/04.png` },
  { label: 'Electronics', src: `${HV_IMAGES.garageCategoriesBase}/05.png` },
  { label: 'Decor', src: `${HV_IMAGES.garageCategoriesBase}/06.png` },
  { label: 'Collectibles', src: `${HV_IMAGES.garageCategoriesBase}/07.png` },
  { label: 'Storage items', src: `${HV_IMAGES.garageCategoriesBase}/08.png` },
  { label: 'Kitchen items', src: `${HV_IMAGES.garageCategoriesBase}/09.png` },
  { label: 'Appliances', src: `${HV_IMAGES.garageCategoriesBase}/10.png` },
] as const

export function HiddenValueInYourHomePage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  return (
    <>
      <Seo
        title="Hidden Value in Your Home | RunMySale"
        description="Before donating or throwing things away, see what may be worth selling. RunMySale connects you with local people who help sell furniture, tools, décor, and more."
        path="/hidden-value-in-your-home"
      />
      <div className="ds hv-page">
        <main id="main-content">
          <section className="hv-hero" aria-labelledby="hv-hero-title">
            <div
              className="hv-hero__photo"
              style={{ backgroundImage: `url(${HV_IMAGES.hero})` }}
              role="presentation"
            />
            <div className="hv-hero__wash" aria-hidden="true" />

            <div className="hv-hero__shell">
              <div className="hv-header-pill">
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

              <div className="hv-hero__content">
                <h1 id="hv-hero-title" className="hv-hero__h1">
                  There May Be{' '}
                  <span className="hv-t-forest">Money</span>{' '}
                  <span className="hv-t-teal">Sitting Around Your Home</span>{' '}
                  <span className="hv-t-forest hv-t-under">Right Now.</span>
                </h1>
                <p className="hv-hero__lead">
                  Before donating or throwing things away, see what may be worth selling through
                  RunMySale.
                </p>
                <div className="hv-hero__actions">
                  <a
                    className="hv-btn hv-btn--blue"
                    href={FIND_HELP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Availability in Your Area
                  </a>
                  <a className="hv-btn hv-btn--outline hv-btn--outline-black" href="#hv-app-downloads">
                    Start In The App (2–3 Minutes)
                  </a>
                </div>
                <p className="hv-hero__fine">
                  See whether your items may have hidden value in just a few minutes.
                </p>
                <div className="hv-hero__checks">
                  <span className="hv-hero__check">
                    <IconCheckBlue />
                    Start in minutes
                  </span>
                  <span className="hv-hero__check">
                    <IconCheckBlue />
                    No obligation
                  </span>
                  <span className="hv-hero__check">
                    <IconCheckBlue />
                    Explore hidden value
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="hv-connect" aria-labelledby="hv-connect-title">
            <div className="hv-connect__grid">
              <div className="hv-connect__visual">
                <table className="hv-connect__gallery-table" role="presentation">
                  <tbody>
                    <tr>
                      <td rowSpan={2} colSpan={2} className="hv-connect__gallery-td hv-connect__gallery-td--h2">
                        <img
                          src={CONNECT_MOSAIC[0]}
                          alt=""
                          width={440}
                          height={440}
                          loading="eager"
                          decoding="async"
                        />
                      </td>
                      <td colSpan={2} className="hv-connect__gallery-td hv-connect__gallery-td--h1">
                        <img
                          src={CONNECT_MOSAIC[1]}
                          alt=""
                          width={440}
                          height={220}
                          loading="eager"
                          decoding="async"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="hv-connect__gallery-td hv-connect__gallery-td--h1">
                        <img
                          src={CONNECT_MOSAIC[2]}
                          alt=""
                          width={440}
                          height={220}
                          loading="eager"
                          decoding="async"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="hv-connect__gallery-td hv-connect__gallery-td--h1">
                        <img
                          src={CONNECT_MOSAIC[3]}
                          alt=""
                          width={440}
                          height={220}
                          loading="eager"
                          decoding="async"
                        />
                      </td>
                      <td rowSpan={2} colSpan={2} className="hv-connect__gallery-td hv-connect__gallery-td--tall-span">
                        <img
                          src={CONNECT_MOSAIC[4]}
                          alt=""
                          width={440}
                          height={660}
                          loading="eager"
                          decoding="async"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="hv-connect__gallery-td hv-connect__gallery-td--h1">
                        <img
                          src={CONNECT_MOSAIC[6]}
                          alt=""
                          width={440}
                          height={220}
                          loading="eager"
                          decoding="async"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="hv-connect__gallery-td hv-connect__gallery-td--h2">
                        <img
                          src={CONNECT_MOSAIC[5]}
                          alt=""
                          width={880}
                          height={440}
                          loading="eager"
                          decoding="async"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="hv-connect__copy">
                <h2 id="hv-connect-title" className="hv-connect__h">
                  <span className="hv-t-teal">RunMySale</span>{' '}
                  <span className="hv-t-green">Connects You With </span>
                  <span className="hv-t-teal">Local People </span>
                  <span className="hv-t-green">Who Help </span>
                  <span className="hv-t-teal">Sell Your Items </span>
                  <span className="hv-t-green">From Start To Finish</span>
                </h2>
                <p className="hv-connect__p">
                  Instead of handling everything yourself, explore getting help selling furniture,
                  household items, tools, collectibles, garage contents, and more.
                </p>
                <p className="hv-connect__p">
                  Some people use traditional driveway garage sales. Others explore selling items
                  online.
                </p>
                <p className="hv-connect__p">
                  RunMySale is built for people who want help simplifying the process from start to
                  finish.
                </p>

                <div className="hv-connect-cards">
                  <article className="hv-connect-card">
                    <div className="hv-connect-card__icon-float" aria-hidden="true">
                      <div className="hv-connect-card__icon hv-connect-card__icon--blue">
                        <IconHouseWhite />
                      </div>
                    </div>
                    <div className="hv-connect-card__text">
                      <h3 className="hv-connect-card__title">Traditional Garage Sales</h3>
                      <p className="hv-connect-card__body">
                        Friendly local help organizing and selling items in-person.
                      </p>
                      <div className="hv-connect-card__rule" />
                      <p className="hv-connect-card__foot">
                        Great for downsizing, moving, estate cleanouts, garage cleanouts, and household
                        decluttering.
                      </p>
                    </div>
                  </article>
                  <article className="hv-connect-card">
                    <div className="hv-connect-card__icon-float" aria-hidden="true">
                      <div className="hv-connect-card__icon hv-connect-card__icon--green">
                        <IconPhoneWhite />
                      </div>
                    </div>
                    <div className="hv-connect-card__text">
                      <h3 className="hv-connect-card__title">Online Selling Help</h3>
                      <p className="hv-connect-card__body">
                        Explore help listing and selling items online instead of figuring everything out
                        yourself.
                      </p>
                      <div className="hv-connect-card__rule" />
                      <p className="hv-connect-card__foot">
                        Useful for furniture, electronics, collectibles, tools, decor, and more.
                      </p>
                    </div>
                  </article>
                  <article className="hv-connect-card">
                    <div className="hv-connect-card__icon-float" aria-hidden="true">
                      <div className="hv-connect-card__icon hv-connect-card__icon--blue">
                        <IconHandBillWhite />
                      </div>
                    </div>
                    <div className="hv-connect-card__text">
                      <h3 className="hv-connect-card__title">Less Stress, More Support</h3>
                      <p className="hv-connect-card__body">
                        RunMySale is designed for people who want help simplifying the process instead of
                        doing everything alone.
                      </p>
                      <div className="hv-connect-card__rule" />
                      <p className="hv-connect-card__foot">
                        Before donating or paying to remove items, explore whether selling first makes
                        sense.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              <div className="hv-connect__cta-band">
                {/* <p className="hv-connect__banner">
                  Start In The App → Explore Local Help → Decide What Makes Sense
                </p> */}

                <div className="hv-connect__cta-row">
                  <a
                    className="hv-btn hv-btn--blue hv-btn--pill"
                    href={FIND_HELP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Availability In Your Area
                  </a>
                  <a className="hv-btn hv-btn--outline-dark hv-btn--pill" href="#hv-app-downloads">
                    Start In The App (2–3 Minutes)
                  </a>
                </div>
                <p className="hv-connect__cta-fine">
                  Takes just a few minutes to explore. No obligation.
                </p>
              </div>
            </div>
          </section>

          {/* <section className="hv-ai" aria-labelledby="hv-ai-title">
            <div className="hv-ai__box">
              <h2 id="hv-ai-title" className="hv-ai__h">
                What&apos;s Your Clutter Worth? Find Out In Seconds.
              </h2>
              <p className="hv-ai__p">
                Our AI-powered tool estimates the value of your items based on current market trends.
              </p>
              <a className="hv-btn hv-btn--blue hv-btn--pill" href={FIND_HELP} target="_blank" rel="noopener noreferrer">
                Try it Now
              </a>
            </div>
          </section> */}

          <section className="hv-clutter-band" aria-labelledby="hv-clutter-title">
            <div className="hv-clutter-card">
              <PiggyWatermark />
              <h2 id="hv-clutter-title" className="hv-clutter-card__h">
                <span className="hv-clutter-card__h-teal">What If Your Clutter </span>
                <span className="hv-clutter-card__h-lime">Could Be Worth More</span>
                <span className="hv-clutter-card__h-teal"> Than You Think?</span>
              </h2>
              <p className="hv-clutter-card__p">
                Most people underestimate what they already own. Furniture in the garage. Tools in
                storage. Household items in closets. Décor sitting unused. Before letting it all go,
                explore whether some of it could be sold.
              </p>
              <a
                className="hv-btn hv-btn--azure hv-btn--pill"
                href={FIND_HELP}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Availability
              </a>
              <p className="hv-clutter-card__fine">
                It only takes a few clicks to see if your items may qualify.
              </p>
            </div>

            <div className="hv-value-strip">
              <h2 className="hv-value-strip__h">RunMySale Helps You Look At Clutter Differently</h2>
            </div>

            <div className="hv-value-cards-band">
              <div className="hv-value-cards">
              {[
                {
                  title: 'Not Just Stuff.',
                  body: 'Some items may still have resale value.',
                  img: HV_IMAGES.clutterValueCards.notJustStuff,
                },
                {
                  title: 'Not All On You.',
                  body: 'You do not have to handle everything yourself.',
                  img: HV_IMAGES.clutterValueCards.notAllOnYou,
                },
                {
                  title: 'Not Just Removal.',
                  body: 'Explore selling before throwing things away.',
                  img: HV_IMAGES.clutterValueCards.notJustRemoval,
                },
              ].map((card) => (
                <article key={card.title} className="hv-value-card">
                  <div className="hv-value-card__media">
                    <img src={card.img} alt="" width={419} height={274} loading="lazy" />
                  </div>
                  <div className="hv-value-card__body">
                    <h3 className="hv-value-card__title">{card.title}</h3>
                    <p className="hv-value-card__p">{card.body}</p>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </section>

          <section className="hv-garage" aria-label="Traditional garage sale categories">
            {/* Optional: restore hv-garage__lead + hv-garage__intro-icons strip */}
            {/* <h3 id="hv-garage-title" className="hv-garage__h">
              Traditional Garage Sales
            </h3> */}
            {/* <div className="hv-garage__rule hv-garage__rule--thick" aria-hidden="true" /> */}
            <div className="hv-garage__grid">
              {garageCategories.map((item) => (
                <div key={item.label} className="hv-garage-cell">
                  <div className="hv-garage-cell__img">
                    <img src={item.src} alt="" width={280} height={200} loading="lazy" />
                  </div>
                  <div className="hv-garage-cell__label">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="hv-garage__fine">
              You do not need to know exactly what everything is worth to start.
            </p>
          </section>

          <section className="hv-hiw" aria-labelledby="hv-hiw-title">
            <div className="hv-hiw__grid">
              <div className="hv-hiw__copy">
                <h2 id="hv-hiw-title" className="hv-hiw__h">
                  How It Works
                </h2>
                <ol className="hv-hiw__steps">
                  <li className="hv-hiw-step">
                    <div className="hv-hiw-step__marker">
                      <IconPhoneOutline />
                    </div>
                    <div className="hv-hiw-step__text">
                      <strong>Step 1:</strong> Start in the RunMySale app.
                    </div>
                  </li>
                  <li className="hv-hiw-step">
                    <div className="hv-hiw-step__marker">
                      <IconCameraOutline />
                    </div>
                    <div className="hv-hiw-step__text">
                      <strong>Step 2:</strong> Share what kinds of items you have.
                    </div>
                  </li>
                  <li className="hv-hiw-step">
                    <div className="hv-hiw-step__marker">
                      <IconRocketOutline />
                    </div>
                    <div className="hv-hiw-step__text">
                      <strong>Step 3:</strong> Explore help selling what may have value.
                    </div>
                  </li>
                </ol>
                <p className="hv-hiw__fine">Getting started typically takes just a few minutes.</p>
                <a className="hv-btn hv-btn--forest hv-btn--pill" href="#hv-app-downloads">
                  Start In The App
                </a>
              </div>
              <div className="hv-hiw__photo-wrap">
                <img
                  className="hv-hiw__photo"
                  src={HV_IMAGES.howItWorks}
                  alt=""
                  width={598}
                  height={669}
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section className="hv-quote" aria-labelledby="hv-quote-title">
            <h2 id="hv-quote-title" className="hv-quote__h">
              The Items You Ignore May Be The Items
              <br />
              Someone Else Wants.
            </h2>
            <blockquote className="hv-quote__bq">
              <div className="hv-quote__body">
                <span className="hv-quote__qm" aria-hidden="true">
                  &ldquo;
                </span>
                <p>
                  The couch you no longer need. The tools you forgot about. The décor sitting in boxes.
                  The furniture taking up space.
                </p>
                <span className="hv-quote__qm hv-quote__qm--end" aria-hidden="true">
                  &rdquo;
                </span>
              </div>
            </blockquote>
          </section>

          <section className="hv-faq" aria-labelledby="hv-faq-title">
            <h2 id="hv-faq-title" className="hv-faq__h">
              Frequently Asked Questions
            </h2>
            <div className="hv-faq__list">
              {[
                {
                  q: 'Do people really have value sitting around?',
                  a: 'Often, yes. Furniture, tools, electronics, collectibles, and household goods may still have resale value.',
                },
                {
                  q: 'Do I need to know what everything is worth?',
                  a: 'No. You can start by checking availability and sharing what you need help with.',
                },
                {
                  q: 'Is there an obligation to move forward?',
                  a: 'No. You can explore first.',
                },
                {
                  q: 'How long does it take to get started?',
                  a: 'Getting started through the app should only take a few minutes.',
                },
              ].map((item, i) => {
                const open = faqOpen === i
                return (
                  <div key={item.q} className="hv-faq__item">
                    <button
                      type="button"
                      className="hv-faq__btn"
                      aria-expanded={open}
                      onClick={() => setFaqOpen(open ? null : i)}
                    >
                      {item.q}
                      <span className={`hv-faq__chev ${open ? 'is-open' : ''}`} />
                    </button>
                    {open ? <p className="hv-faq__a">{item.a}</p> : null}
                  </div>
                )
              })}
            </div>
          </section>

          <section className="hv-final-cta" aria-labelledby="hv-final-title">
            <h2 id="hv-final-title" className="hv-final-cta__h">
              Before Letting Things Go, See What They May Be Worth.
            </h2>
            <div className="hv-final-cta__row">
              <a
                className="hv-btn hv-btn--cta-green hv-btn--pill"
                href={FIND_HELP}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Availability in Your Area
              </a>
              <a className="hv-btn hv-btn--ghost hv-btn--pill" href="#hv-app-downloads">
                Download App
              </a>
            </div>
            <p className="hv-final-cta__fine">
              Start in just a few minutes. No obligation to explore.
            </p>
          </section>

          {/* <section id="hv-app-downloads" className="ds-app-dl" aria-labelledby="hv-app-title">
            <div className="ds-app-dl__inner">
              <h2 id="hv-app-title" className="ds-app-dl__h">
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
          </section> */}
        </main>

        <footer className="ds-foot">
          <div className="ds-foot__social">
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
          <p className="ds-foot__copy">© 2026 All Right Reserved.</p>
        </footer>
      </div>
    </>
  )
}
