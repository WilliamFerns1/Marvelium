import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react"; // Import useState and useEffect

export default function Header() {
  const [searchResults, setSearchResults] = useState([]); // Create state for search results
  const [searchText, setSearchText] = useState(""); // Create state for search text
  const searchResultsRef = useRef(null); // Create a ref for the search results container

  // Event handler for input change
  const handleInputChange = (event) => {
    const searchText = event.target.value;

    // Update the search text state
    setSearchText(searchText);

    // Perform a search and update searchResults state
    fetch(`https://superheroapi.com/api.php/105815209009679/search/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        // Check if data.results is defined before updating searchResults
        if (data.results) {
          setSearchResults(data.results);
        } else {
          setSearchResults([]); // Set searchResults to an empty array if data.results is undefined
        }
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setSearchResults([]); // Set searchResults to an empty array on error
      });
  };

  useEffect(() => {
    // Add a click event listener to the document body
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      // Remove the event listener when the component unmounts
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  // Event handler for clicks outside the search results container
  const handleBodyClick = (event) => {
    // Check if the click target is outside the search results container
    if (
      searchResultsRef.current &&
      !searchResultsRef.current.contains(event.target)
    ) {
      // Clicked outside, so hide the search results
      setSearchResults([]);
    }
  };

  return (
    <>
      <header>
        <h1>
          <span>Marvel</span>ium.
        </h1>
        <div className="search-bar">
          <input
            placeholder="Search a superhero"
            className="search-bar-input"
            type="text"
            value={searchText} // Use searchText as the input value
            onChange={handleInputChange}
          />
          <i className="bx bx-search-alt-2"></i>
        </div>
      </header>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="search-results" ref={searchResultsRef}>
          {searchResults.map((result) => (
            <div className="search-result" key={result.id}>
              <img src={result.image.url} alt={result.name} />
              <p>{result.name}</p>
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </>
  );
}
