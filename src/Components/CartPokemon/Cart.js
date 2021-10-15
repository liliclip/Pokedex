import React from "react";

function Cart({ cartPokemon }) {
  return (
    <div>
      {cartPokemon.length === 0 && <p> No hay pokemons en la pokedex</p>}
      <div>
        <h3>Pokemons Seleccionados</h3>
        <p>{cartPokemon.length}</p>
      </div>
    </div>
  );
}

export default Cart;
