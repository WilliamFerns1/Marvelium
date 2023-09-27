import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HeroInfoNav from "./HeroInfoNav"
import HeroStats from "./HeroStats"
import HeroBiography from "./HeroBiography"
import HeroAppearance from "./HeroAppearance"
import HeroMoreInfo from "./HeroMoreInfo"

export default function MainContent() {

  const [hero, setHero] = React.useState(null)

  React.useEffect(() => {
    fetch("https://superheroapi.com/api.php/105815209009679/1")
      .then(res => res.json())
      .then(data => setHero(data))
  }, [])

  console.log()

  return (
    <div className="mainContent">
      <img className="hero-big-image" src={hero?.image.url} alt="hero" />
      <div className="hero-info">
        <h1 className="hero-info-name">{hero?.name}</h1>
        
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<HeroInfoNav />}>
              <Route index element={<HeroStats hero={hero}/>} />
              <Route path="/biography" element={<HeroBiography hero={hero} />}/>
              <Route path="/appearance" element={<HeroAppearance hero={hero} />}/>
              <Route path="/more-info" element={<HeroMoreInfo hero={hero} />}/>
            </Route>
          </Routes>
          
        </BrowserRouter>
      </div>
    </div>
  )
}