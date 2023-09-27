export default function HeroMoreInfo(props) {
  const raceStyles = {
    color: props.hero ? props.hero.appearance.race.toLowerCase() === "mutant" ? "red" : props.hero.appearance.race.toLowerCase() === "human" ? "blue" : "yellow" : "black"
  } 

  return (
    <div className="more-info">
      <div className="more-info-item">
        <div style={{display: 'flex', alignItems: "center", gap: "10px"}}>
          <i style={raceStyles} id="star" className='bx bx-star'></i>
          <h3>Work: </h3>
          <p>{props.hero ? props.hero.work.occupation : "none"}</p>
        </div>
        <p>Locations: {props.hero ? props.hero.work.base : "none"}</p>
      </div>
      <div className="more-info-item">
        <div style={{display: 'flex', alignItems: "center", gap: "10px"}}>
          <i style={raceStyles} id="star" className='bx bx-star'></i>  
          <h3>Teams: </h3>
        </div>
        <p>{props.hero ? props.hero.connections['group-affiliation'] : "none"}</p>
      </div>
      <div className="more-info-item" >
        <div style={{display: 'flex', alignItems: "center", gap: "10px"}}>
          <i style={raceStyles} id="star" className='bx bx-star'></i>
          <h3>Family: </h3>
        </div>
        <p>{props.hero ? props.hero.connections.relatives : "none"}</p>
      </div>
    </div>
  )
}