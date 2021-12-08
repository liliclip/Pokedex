import React from "react";
import PokemonCard from "../Card/PokemonCard";
import PropTypes from "prop-types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const List = ({
  pokemon,
  url,
  name,
  cartPokemon,
  handleAddPokemon,
  handleDeletePokemon,
  pokedex,
  setCartPokemon,
  modeMockApi,
  objectId,
  deletePokedex,
  addPokemon,
  pokedexKey,
  pokedexName,
  pokedexImage,
  pokedexId,
  handleIsInCart,
  handleOutCart,
  inCart
}) => {
  const id = url?.replace(apiUrl, "").replace("/", "");
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <PokemonCard
      index={pokemon.name}
      image={image}
      name={name}
      data={pokemon}
      id={id}
      url={url}
      cartPokemon={cartPokemon}
      handleAddPokemon={handleAddPokemon}
      handleDeletePokemon={handleDeletePokemon}
      pokedex={pokedex}
      setCartPokemon={setCartPokemon}
      modeMockApi={modeMockApi}
      objectId={objectId}
      deletePokedex={deletePokedex}
      addPokemon={addPokemon}
      // pokedexKey={pokedexKey}
      // pokedexName={pokedexName}
      // pokedexImage={pokedexImage}
      // pokedexId={pokedexId}
      handleIsInCart={handleIsInCart}
      handleOutCart={handleOutCart}
      inCart={inCart}
    />
  );
};

List.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default List;
