import React from "react";
import PokemonCard from "../Card/PokemonCard"

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const List = (props) => {
  const id = props.pokemon.url.replace(apiUrl, "").replace("/", "");
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return <PokemonCard index={props.pokemon.name} image={image} name={props.pokemon.name} />;
};

export default List;
