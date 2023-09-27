import EyeImg from '../assets/eye-removebg-preview.png';

export default function HeroAppearance(props) {
  console.log(props.hero)
  return (
    <div className="hero-appearance">
      <div className="hero-appearance-item">
        <h4>Gender</h4>
        {props.hero && (
        <div>
          {props.hero.appearance.gender == "Male" ? <i class='bx bx-male-sign'></i> : props.hero.appearance.gender == "Female" ? <i class='bx bx-female-sign' ></i> : <p>unknown</p> }
        </div>
        )}
      </div>
      <div className="hero-appearance-item">
        <h4>Weight</h4>
        <p>{props.hero ? props.hero.appearance.weight[1] : "unknown"}</p>
      </div>
      <div className="hero-appearance-item">
        <h4>Race</h4>
      </div>
      <div className="hero-appearance-item">
        <img width="25px" src={EyeImg} alt="eye image" />
      </div>
      <div className="hero-appearance-item">
        <h4>Height</h4>

      </div>
      <div className="hero-appearance-item">
        <h4>Hair</h4>

      </div>
    </div>
  )
}