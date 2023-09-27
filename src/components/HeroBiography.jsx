export default function HeroBiography(props) {
console.log(props.hero)
  return (
    <div className="hero-biography">
      <div className="hero-biography-item">
        <h3>Full-name: </h3>
        <p>{props.hero ? props.hero.biography['full-name'] : "unknown"}</p>
      </div>
      <div className="hero-biography-item">
        <h3>Alter-egos: </h3>
        <p>{props.hero ? props.hero.biography['alter-egos'] : "unknown"}</p>

      </div>
      <div className="hero-biography-item">
        <h3>Aliases: </h3>
        <p>{props.hero ? props.hero.biography.aliases : "unknown"}</p>

      </div>
      <div className="hero-biography-item">
        <h3>Place-of-birth: </h3>
        <p>{props.hero ? props.hero.biography['place-of-birth'] : "unknown"}</p>

      </div>
      <div className="hero-biography-item">
        <h3>Publisher: </h3>
        <p>{props.hero ? props.hero.biography.publisher : "unknown"}</p>

      </div>
    </div>
  )
}