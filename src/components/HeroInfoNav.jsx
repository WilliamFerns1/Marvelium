import { Outlet, NavLink } from "react-router-dom" 

export default function HeroInfoNav() {
  
  const heroInfoNavStylesLinks = {
    fontWeight: "bold",
    textDecoration: "underline",
  }
  return (
    <>
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
          More info
        </NavLink>
      </nav>
      <div className="nav-border-bottom"></div>
      <Outlet />
    </>
  )
}

// #fe4848