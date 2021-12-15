import React from "react";
import PokemonCard from "../Card/PokemonCard";
import PropTypes from "prop-types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const List = ({ pokemon, modeMockApi, deletePokedex }) => {
  const id = pokemon.url?.replace(apiUrl, "").replace("/", "");
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <PokemonCard
      pokemon={pokemon}
      id={id}
      image={image}
      modeMockApi={modeMockApi}
      deletePokedex={deletePokedex}
    />
  );
};

List.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default List;
