import React from "react";
import { useNavigate } from "react-router-dom";
import "./CharacterList.css"; // Import your CSS file

const CharacterList = ({ characters }) => {
  const navigate = useNavigate();

  const handleCharacterClick = (characterId) => {
    navigate(`/character/${characterId}`);
  };

  return (
    <div className="character-list">
      {characters.map((character) => (
        <div
          key={character.id}
          className="character-item"
          onClick={() => handleCharacterClick(character.id)}>
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
