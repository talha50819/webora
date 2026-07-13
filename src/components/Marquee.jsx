export default function Marquee({ items }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span className="marquee__item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
