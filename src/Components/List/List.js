import React from "react";
import PokemonCard from "../Card/PokemonCard";
import PropTypes from "prop-types"

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const List = ({pokemon}) => {
  const id = pokemon.url.replace(apiUrl, "").replace("/", "");
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <PokemonCard
      index={pokemon.name}
      image={image}
      name={pokemon.name}
    />
  );
};

List.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default List;



