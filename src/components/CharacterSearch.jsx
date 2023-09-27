import React, { useState } from "react";

export default function CharacterSearch({ onSearch }) {
  const [characterName, setCharacterName] = useState("");

  const handleSearch = () => {
    // Call the onSearch callback with the characterName as an argument
    onSearch(characterName);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="search a superhero"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
      />
      <i onClick={handleSearch} className='bx bx-search-alt-2'></i>

    </div>
  );
}
