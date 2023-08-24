// pages/CharacterDetailPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterById } from "../services/api";
import CharacterDetail from "../components/CharacterDetail";

const CharacterDetailPage = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacterById(characterId)
      .then((data) => setCharacter(data))
      .catch((error) => console.error(error));
  }, [characterId]);

  return (
    <div>
      {character ? (
        <CharacterDetail character={character} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CharacterDetailPage;
