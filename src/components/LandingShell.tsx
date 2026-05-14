import { useEffect, useId, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { APP_ANDROID, APP_IOS, FIND_HELP } from '../constants/links'
import './LandingShell.css'

const LANDING_NAV = [
  { to: '/', label: 'Downsizing Help', short: 'Downsizing', end: true },
  // {
  //   to: '/junk-removal-alternative',
  //   label: 'Junk Removal Alternative',
  //   short: 'Junk Removal',
  //   end: false,
  // },
  {
    to: '/hidden-value-in-your-home',
    label: 'Hidden Value In Your Home',
    short: 'Hidden Value',
    end: false,
  },
  {
    to: '/houston-downsizing-help',
    label: 'Houston Downsizing Help',
    short: 'Houston',
    end: false,
  },
] as const

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="landing-shell__menu-icon" viewBox="0 0 24 24" aria-hidden="true">
      {open ? (
        <path
          fill="currentColor"
          d="M18.3 5.71L12 12l6.3 6.29-1.42 1.42L10.59 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.3-6.3 1.41 1.42z"
        />
      ) : (
        <>
          <path fill="currentColor" d="M4 7h16v2H4V7zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" />
        </>
      )}
    </svg>
  )
}

export default function LandingShell() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const drawerId = useId()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className={`landing-shell${open ? ' landing-shell--nav-open' : ''}`}>
      <button
        type="button"
        className="landing-shell__menu-btn"
        aria-expanded={open}
        aria-controls={drawerId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="landing-shell__sr-only">
          {open ? 'Close navigation menu' : 'Open navigation menu'}
        </span>
        <MenuIcon open={open} />
      </button>

      <div
        className="landing-shell__backdrop"
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <aside
        id={drawerId}
        className="landing-shell__sidebar"
        aria-label="Site navigation"
        aria-hidden={!open}
      >
        <div className="landing-shell__sidebar-head">
          <span className="landing-shell__brand">RunMySale</span>
          <button
            type="button"
            className="landing-shell__close-btn"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <p className="landing-shell__subtitle">Landing pages</p>
        <nav className="landing-shell__nav" aria-label="Landing pages">
          {LANDING_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `landing-shell__tab${isActive ? ' is-active' : ''}`
              }
            >
              <span className="landing-shell__tab-short">{item.short}</span>
              <span className="landing-shell__tab-full">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <p className="landing-shell__subtitle">Quick links</p>
        <nav className="landing-shell__nav" aria-label="Quick links">
          <a
            className="landing-shell__tab"
            href={FIND_HELP}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get started — Find Help
          </a>
          <a
            className="landing-shell__tab"
            href={APP_IOS}
            target="_blank"
            rel="noopener noreferrer"
          >
            App Store
          </a>
          <a
            className="landing-shell__tab"
            href={APP_ANDROID}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play
          </a>
        </nav>
      </aside>

      <div className="landing-shell__main">
        <Outlet />
      </div>
    </div>
  )
}
