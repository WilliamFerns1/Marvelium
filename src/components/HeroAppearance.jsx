import EyeImg from '../assets/eye-removebg-preview.png';

export default function HeroAppearance(props) {

  return (
    <div className="hero-appearance">
      <div style={{backgroundColor: "rgb(9, 20, 30)"}} className="hero-appearance-item">
        <h4>Gender</h4>
        {props.hero && (
        <div>
          {props.hero.appearance.gender == "Male" ? <i className='bx bx-male-sign'></i> : props.hero.appearance.gender == "Female" ? <i className='bx bx-female-sign' ></i> : <p>unknown</p> }
        </div>
        )}
      </div>
      <div className="hero-appearance-item">
        <h4>Weight</h4>
        <p>{props.hero ? props.hero.appearance.weight[1] : "unknown"} / {props.hero ? props.hero.appearance.weight[0] : "unknown"}</p>
      </div>
      <div className="hero-appearance-item">
        <h4>Race</h4>
        <p style={{ color: props.hero?.appearance.race.toLowerCase() === "human" ? "white" : props.hero?.appearance.race.toLowerCase() === "mutant" ? "red" : "lightblue" }}>{props.hero ? props.hero.appearance.race : "unknown"}</p>
      </div>
      <div className="hero-appearance-item">
        <img width="25px" src={EyeImg} alt="eye image" />
        <p>color: <span style={{ color: props.hero ? `${props.hero.appearance['eye-color'].toLowerCase()}` : "black" }}>{props.hero ? props.hero.appearance['eye-color'].toLowerCase() : "unknown"}
          </span></p>
      </div>
      <div style={{backgroundColor: "rgb(38, 71, 20)"}}  className="hero-appearance-item">
        <h4>Height</h4>
        <p>{props.hero ? props.hero.appearance.height[0] : "unknown"} ft / {props.hero ? props.hero.appearance.height[1] : "unknown"}</p>
      </div>
      <div className="hero-appearance-item">
        <h4>Hair</h4>
        <p>{props.hero? props.hero.appearance['hair-color'] : "unknown"}</p>
      </div>
    </div>
  )
}