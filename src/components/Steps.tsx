type Step = { title: string; body: string }

type StepsProps = {
  id?: string
  title: string
  steps: Step[]
}

export function Steps({ id = 'steps', title, steps }: StepsProps) {
  return (
    <section className="steps" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <h2 className="section-title" id={`${id}-title`}>
          {title}
        </h2>
        <ol className="steps__list">
          {steps.map((s, i) => (
            <li key={s.title} className="steps__item">
              <span className="steps__index" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
