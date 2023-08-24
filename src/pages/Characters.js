// pages/Characters.js
import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../services/api";
import CharacterList from "../components/CharacterList";
import CharacterFilter from "../components/CharacterFilter";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Fetch characters based on filters
    fetchCharacters(filters)
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error(error));
  }, [filters]);

  return (
    <div className="heading">
      <h1>Rick and Morty Characters</h1>
      <CharacterFilter onFilterChange={setFilters} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default Characters;
