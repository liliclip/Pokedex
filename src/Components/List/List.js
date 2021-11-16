import React from "react";
import PokemonCard from "../Card/PokemonCard";
import PropTypes from "prop-types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const List = ({
  pokemon,
  cartPokemon,
  handleAddPokemon,
  handleDeletePokemon,
  pokedex,
  setCartPokemon,
  modeMockApi,
  objectId,
  deletePokedex
}) => {
  const id = pokemon.url.replace(apiUrl, "").replace("/", "");
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <PokemonCard
      index={pokemon.name}
      image={image}
      name={pokemon.name}
      data={pokemon}
      id={id}
      cartPokemon={cartPokemon}
      handleAddPokemon={handleAddPokemon}
      handleDeletePokemon={handleDeletePokemon}
      pokedex={pokedex}
      setCartPokemon={setCartPokemon}
      modeMockApi={modeMockApi}
      objectId={objectId}
      deletePokedex={deletePokedex}
    />
  );
};

List.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default List;
