import './App.css'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HeroStats from "./components/HeroStats";
import HeroBiography from "./components/HeroBiography";
import HeroAppearance from "./components/HeroAppearance";
import HeroMoreInfo from "./components/HeroMoreInfo";

export default function App() {
  const [hero, setHero] = useState(null);
  const [selectedHeroId, setSelectedHeroId] = useState(70); // Default ID is 70

  useEffect(() => {
    // Fetch data for the default ID (70) when the component mounts
    fetch(`https://superheroapi.com/api.php/105815209009679/${selectedHeroId}`)
      .then((res) => res.json())
      .then((data) => setHero(data));
  }, [selectedHeroId]); // Include selectedHeroId in the dependency array

  const handleSearchResultClick = (heroId) => {
    setSelectedHeroId(heroId);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header onSearchResultClick={handleSearchResultClick} />}>
          {/* MainContent is now the root of these child routes */}
          <Route path="/" element={<MainContent hero={hero} />}>
            <Route index element={<HeroStats hero={hero} />} />
            <Route path="biography" element={<HeroBiography hero={hero} />} />
            <Route path="appearance" element={<HeroAppearance hero={hero} />} />
            <Route path="more-info" element={<HeroMoreInfo hero={hero} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
