import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const LandingShell = lazy(() => import('./components/LandingShell'))

const DownsizingHelpPage = lazy(() =>
  import('./pages/DownsizingHelpPage').then((m) => ({
    default: m.DownsizingHelpPage,
  })),
)
const JunkRemovalAlternativePage = lazy(() =>
  import('./pages/JunkRemovalAlternativePage').then((m) => ({
    default: m.JunkRemovalAlternativePage,
  })),
)
const HiddenValueInYourHomePage = lazy(() =>
  import('./pages/HiddenValueInYourHomePage').then((m) => ({
    default: m.HiddenValueInYourHomePage,
  })),
)
const HoustonDownsizingHelpPage = lazy(() =>
  import('./pages/HoustonDownsizingHelpPage').then((m) => ({
    default: m.HoustonDownsizingHelpPage,
  })),
)

function PageFallback() {
  return (
    <div
      style={{
        padding: '4rem 1.5rem',
        textAlign: 'center',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#64748b',
      }}
    >
      <p>Loading…</p>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<LandingShell />}>
          <Route path="/" element={<DownsizingHelpPage />} />
          <Route
            path="/junk-removal-alternative"
            element={<JunkRemovalAlternativePage />}
          />
          <Route
            path="/hidden-value-in-your-home"
            element={<HiddenValueInYourHomePage />}
          />
          <Route
            path="/houston-downsizing-help"
            element={<HoustonDownsizingHelpPage />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
