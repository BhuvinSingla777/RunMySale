type Feature = {
  title: string
  body: string
}

type FeatureGridProps = {
  id?: string
  title: string
  lead?: string
  features: Feature[]
}

export function FeatureGrid({
  id,
  title,
  lead,
  features,
}: FeatureGridProps) {
  const headingId = id ? `${id}-heading` : 'feature-grid-heading'
  return (
    <section
      className="features wrap"
      id={id}
      aria-labelledby={headingId}
    >
      <h2 className="section-title" id={headingId}>
        {title}
      </h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
      <ul className="feature-grid">
        {features.map((f) => (
          <li key={f.title} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
