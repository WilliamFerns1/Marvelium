export default function HeroStats(props) {
  
  return (
    <div className="hero-stats">
      {props.hero ? (
        <>
          <div className="hero-stats-item">
            <div className="hero-stats-item-left">
              <i id="star" className='bx bx-star'></i>
              <h3>Intelligence</h3>
            </div>
            <h4 className="hero-stats-item-amount">{props.hero.powerstats.intelligence && props.hero.powerstats.intelligence}</h4>
          </div>
          <div className="hero-stats-item">
            <div className="hero-stats-item-left">
              <i id="star" className='bx bx-star'></i>
              <h3>Strength</h3>
            </div>
            <h4 className="hero-stats-item-amount">{props.hero.powerstats.strength && props.hero.powerstats.strength}</h4>
          </div>
          <div className="hero-stats-item">
            <div className="hero-stats-item-left">
              <i id="star" className='bx bx-star'></i>
              <h3>Speed</h3>
            </div>
            <h4 className="hero-stats-item-amount">{props.hero.powerstats.speed && props.hero.powerstats.speed}</h4>
          </div>
          <div className="hero-stats-item">
            <div className="hero-stats-item-left">
              <i id="star" className='bx bx-star'></i>
              <h3>Combat</h3>
            </div>
            <h4 className="hero-stats-item-amount">{props.hero.powerstats.combat && props.hero.powerstats.combat}</h4>
          </div>
          <div className="hero-stats-item">
            <div className="hero-stats-item-left">
              <i id="star" className='bx bx-star'></i>
              <h3>Durability</h3>
            </div>
            <h4 className="hero-stats-item-amount">{props.hero.powerstats.durability && props.hero.powerstats.durability}</h4>
          </div>
          <div className="hero-stats-item">
            <div className="hero-stats-item-left">
              <i id="star" className='bx bx-star'></i>
              <h3>Power</h3>
            </div>
            <h4 className="hero-stats-item-amount">{props.hero.powerstats.power && props.hero.powerstats.power}</h4>
          </div>
        </>
      ) : <h1>Loading...</h1>}
    </div>
  )
}