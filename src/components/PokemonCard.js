import React from "react";
import PokemonForm from "./PokemonForm";
import { Card } from "semantic-ui-react";


const PokemonCard = ({ name, sprite, hp }) => {
  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      <img src={sprite} alt={name} />
      <p>HP: {hp}</p>
    </div>
  );
};

export default PokemonCard;

