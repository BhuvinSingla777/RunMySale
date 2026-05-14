type FaqItem = { q: string; a: string }

type FaqSectionProps = {
  id?: string
  title?: string
  items: FaqItem[]
}

export function FaqSection({
  id = 'faq',
  title = 'Questions, answered',
  items,
}: FaqSectionProps) {
  return (
    <section className="faq wrap" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="section-title" id={`${id}-title`}>
        {title}
      </h2>
      <div className="faq__list">
        {items.map((item) => (
          <details key={item.q} className="faq__item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
