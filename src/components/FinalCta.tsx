import { APP_ANDROID, APP_IOS, HOW_IT_WORKS } from '../constants/links'
import { CtaStores } from './CtaStores'

type FinalCtaProps = {
  title: string
  body: string
}

export function FinalCta({ title, body }: FinalCtaProps) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="wrap final-cta__inner">
        <div>
          <h2 className="final-cta__title" id="final-cta-title">
            {title}
          </h2>
          <p className="final-cta__body">{body}</p>
          <div className="final-cta__links">
            <a className="btn btn--ghost" href={HOW_IT_WORKS}>
              How this works
            </a>
          </div>
        </div>
        <div className="final-cta__stores">
          <a className="btn btn--primary btn--block" href={APP_IOS}>
            RunMySale on the App Store
          </a>
          <a className="btn btn--green btn--block" href={APP_ANDROID}>
            RunMySale on Google Play
          </a>
          <CtaStores className="final-cta__badges" />
        </div>
      </div>
    </section>
  )
}
