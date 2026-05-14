import { APP_ANDROID, APP_IOS } from '../constants/links'

function AppleIcon() {
  return (
    <svg className="store-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.975 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.07c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"
      />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg className="store-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.77-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49-2.12-2.12zm3.35-4.24-2.12 2.12 2.47 2.47c.77-.43 1.23-1.24 1.23-2.12s-.46-1.69-1.23-2.12l-2.35 2.35zm-3.35-2.35L6.05 2.66l10.76 6.22-2.12 2.12z"
      />
    </svg>
  )
}

type CtaStoresProps = {
  className?: string
  layout?: 'row' | 'stack'
}

export function CtaStores({ className = '', layout = 'row' }: CtaStoresProps) {
  return (
    <div
      className={`store-badges ${layout === 'stack' ? 'store-badges--stack' : ''} ${className}`.trim()}
    >
      <a
        className="store-badge store-badge--ios"
        href={APP_IOS}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppleIcon />
        <span className="store-badge__text">
          <span className="store-badge__label">Download on the</span>
          <span className="store-badge__title">App Store</span>
        </span>
      </a>
      <a
        className="store-badge store-badge--android"
        href={APP_ANDROID}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PlayIcon />
        <span className="store-badge__text">
          <span className="store-badge__label">Get it on</span>
          <span className="store-badge__title">Google Play</span>
        </span>
      </a>
    </div>
  )
}
