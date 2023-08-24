import React from "react";
import "./CharacterDetail.css"; // Import your CSS file

const CharacterDetail = ({ character }) => {
  return (
    <div className="character-detail">
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-info">
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Gender: {character.gender}</p>
        <p>Species: {character.species}</p>
        <p>Origin: {character.origin.name}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
