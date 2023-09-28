import React, { useState, useEffect } from "react";
import HeroInfoNav from "./HeroInfoNav"

export default function MainContent(props) {

  const handleSearch = (characterName) => {
    // Perform a search by character name and fetch data for the matching character
    // You can implement the search logic here by making an additional API request
    // For simplicity, I'll assume you have a way to get the character ID based on the name
    // Replace 'characterId' with the actual character ID
    const characterId = "123"; // Replace with the actual character ID

    fetchHeroData(characterId);
  };

  const fetchHeroData = (characterId) => {
    fetch(`https://superheroapi.com/api.php/105815209009679/${characterId}`)
      .then((res) => res.json())
      .then((data) => setHero(data))
      .catch((error) => console.error("Error fetching hero data:", error));
  };

  return (
    <div className="mainContent">
      <div>
        <div className="existing-content">

          <img
            style={{
              boxShadow: `${
                props.hero?.appearance.race.toLowerCase() === "mutant"
                  ? "rgba(255, 0, 0, 0.497)"
                  : props.hero?.appearance.race.toLowerCase() === "human"
                  ? "blue"
                  : "red"
              } 0px 19px 38px, ${
                props.hero?.appearance.race.toLowerCase() === "mutant"
                  ? "rgba(255, 0, 0, 0.497)"
                  : props.hero?.appearance.race.toLowerCase() === "human"
                  ? "blue"
                  : "red"
              } 0px 15px 12px`,
            }}
            className="hero-big-image"
            src={props.hero?.image.url}
            alt="hero"
          />

        </div>

        {/* Render the CharacterSearch component and pass the handleSearch function */}
        {/* <CharacterSearch onSearch={handleSearch} /> */}
      </div>
      <div className="hero-info-content">
        <HeroInfoNav hero={props.hero} />
      </div>
    </div>
  );
}
