import { FIND_HELP, PRIVACY, SITE, TERMS } from '../constants/links'
import { CtaStores } from './CtaStores'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <p className="site-footer__brand">RunMySale</p>
          <p className="site-footer__tag">
            Less stuff, more money — vetted local affiliates handle the work.
          </p>
          <CtaStores className="site-footer__stores" />
        </div>
        <div>
          <p className="site-footer__heading">Get help</p>
          <ul className="site-footer__links">
            <li>
              <a href={FIND_HELP}>Find help (web form)</a>
            </li>
            <li>
              <a href={SITE}>RunMySale.com</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="site-footer__heading">Legal</p>
          <ul className="site-footer__links">
            <li>
              <a href={TERMS}>Terms &amp; Conditions</a>
            </li>
            <li>
              <a href={PRIVACY}>Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="site-footer__copy wrap">
        © {new Date().getFullYear()} RunMySale, LLC. All rights reserved.
      </p>
    </footer>
  )
}
