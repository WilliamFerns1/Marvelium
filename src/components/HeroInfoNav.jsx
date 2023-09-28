import { Outlet, NavLink } from "react-router-dom" 

export default function HeroInfoNav(props) {
  
  const heroInfoNavStylesLinks = {
    fontWeight: "bold",
    textDecoration: "underline",
  }
  return (
    <div className="nav">
      <div className="hero-info">
        <h1
        style={{
          color:
          props.hero?.appearance.race.toLowerCase() === "mutant"
              ? "red"
              : props.hero?.appearance.race.toLowerCase() === "human"
              ? "blue"
              : "yellow",
        }}
        className="hero-info-name"
      >
        {props.hero?.name}
        </h1>
          
      </div>
      <nav>
        <NavLink 
          to="."
          end
          style={({isActive}) => isActive ? heroInfoNavStylesLinks : null}
        >
          Stats
        </NavLink>
        <NavLink 
          to="biography"
          style={({isActive}) => isActive ? heroInfoNavStylesLinks : null}

          >
          Biography
        </NavLink>
        <NavLink 
          to="appearance"
          style={({isActive}) => isActive ? heroInfoNavStylesLinks : null}
          >
          Appearance
        </NavLink>
        <NavLink 
          to="more-info"
          style={({isActive}) => isActive ? heroInfoNavStylesLinks : null}
        >
          More
        </NavLink>
      </nav>
      <div className="nav-border-bottom"></div>
      <Outlet />
    </div>
  )
}

// #fe4848