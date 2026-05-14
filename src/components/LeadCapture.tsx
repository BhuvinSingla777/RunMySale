import { useState } from 'react'
import { FIND_HELP } from '../constants/links'
import { CtaStores } from './CtaStores'

type LeadCaptureProps = {
  id?: string
  heading?: string
  subheading?: string
}

export function LeadCapture({
  id = 'get-started',
  heading = 'Tell us what you need help with',
  subheading = 'Share your details and we will point you to the next step. You can finish in the RunMySale app or on the web.',
}: LeadCaptureProps) {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const [error, setError] = useState<string | null>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const first = String(fd.get('firstName') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const zip = String(fd.get('zip') || '').trim()
    if (!first || !email || !zip) {
      setError('Please fill in first name, email, and ZIP.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    window.open(FIND_HELP, '_blank', 'noopener,noreferrer')
    setStatus('sent')
    e.currentTarget.reset()
  }

  return (
    <section className="lead" id={id} aria-labelledby={`${id}-heading`}>
      <div className="wrap lead__inner">
        <div className="lead__copy">
          <h2 className="section-title" id={`${id}-heading`}>
            {heading}
          </h2>
          <p className="section-lead">{subheading}</p>
          <p className="lead__note">
            Prefer the web? After you submit, you can also continue on the{' '}
            <a href={FIND_HELP}>official Find Help form</a>.
          </p>
          <CtaStores className="lead__stores" />
        </div>
        <div className="lead__card">
          {status === 'sent' ? (
            <div className="lead__success" role="status">
              <h3 className="lead__success-title">You are all set</h3>
              <p>
                We opened the Find Help flow on RunMySale.com. Download
                RunMySale to get matched with vetted affiliates in your area.
              </p>
              <CtaStores />
              <a className="btn btn--ghost btn--block" href={FIND_HELP}>
                Open Find Help on RunMySale.com
              </a>
            </div>
          ) : (
            <form className="lead__form" onSubmit={onSubmit} noValidate>
              <div className="field-row">
                <label className="field">
                  <span className="field__label">First name</span>
                  <input name="firstName" autoComplete="given-name" required />
                </label>
                <label className="field">
                  <span className="field__label">Last name</span>
                  <input name="lastName" autoComplete="family-name" />
                </label>
              </div>
              <label className="field">
                <span className="field__label">Email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                />
              </label>
              <div className="field-row">
                <label className="field">
                  <span className="field__label">Phone (optional)</span>
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
                <label className="field">
                  <span className="field__label">ZIP</span>
                  <input
                    name="zip"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    required
                  />
                </label>
              </div>
              <label className="field">
                <span className="field__label">What do you need help with?</span>
                <textarea name="message" rows={3} />
              </label>
              {error ? (
                <p className="field-error" role="alert">
                  {error}
                </p>
              ) : null}
              <button type="submit" className="btn btn--primary btn--block">
                Submit &amp; open Find Help
              </button>
              <p className="form-footnote">
                After a quick validation, we open RunMySale&apos;s official Find
                Help page in a new tab. Download the app anytime using the store
                buttons above.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
