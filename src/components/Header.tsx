import { FIND_HELP, SITE } from '../constants/links'

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-logo" href={SITE} target="_blank" rel="noreferrer">
          RunMySale
        </a>
        <a
          className="site-header__start"
          href={FIND_HELP}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get started
        </a>
      </div>
    </header>
  )
}
