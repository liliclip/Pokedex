import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import "./Cart.css";
import { makeStyles } from "@material-ui/core/styles/";

import { useOwnContext } from "../../store/dashboard/storeApiPokedex";

const useStyle = makeStyles({
  cancel: {
    borderRadious: 3,
    backgroundColor: "#F00448",
    color: "white",
    marginBottom: "20px",
    width: "100px",
    marginRight: "20px",
    marginTop: "5px",
    fontSize: "12px",
  },
  add: {
    borderRadious: 3,
    backgroundColor: "#389FFF",
    color: "white",
    marginBottom: "20px",
    width: "100px",
    marginRight: "20px",
    marginTop: "0px",
    fontSize: "12px",
  },
  view_pokedex: {
    borderRadious: 3,
    backgroundColor: "#F7BE32",
    color: "white",
    marginBottom: "20px",
    width: "100px",
    marginRight: "20px",
    marginTop: "0px",
    fontSize: "12px",
  },
});

function Cart({ savePokemon, setPokedex }) {
  const { cartPokemon, pokedex, loading, error, deleteAllPokemons } =
    useOwnContext();
  let history = useHistory();
  const handlerClick = () => {
    history.push("/pokedex");
  };

  const handleCancelCart = () => {
    deleteAllPokemons();
  };
  const cancelArray = () => {
    handleCancelCart();
  };

  const handleSavePokemon = () => {
    savePokemon(cartPokemon, setPokedex);
    handleCancelCart();
  };

  const clasStyle = useStyle();

  return (
    <div>
      {pokedex?.length === 0 && !error && !loading}
      <div className="pokemon-state">
        <div className="left-cart">
          <h3>Pokemons Seleccionados</h3>
          <p>{cartPokemon?.length}</p>
          <Button className={clasStyle.cancel} onClick={cancelArray}>
            Cancelar
          </Button>
          <Button className={clasStyle.add} onClick={() => handleSavePokemon()}>
            Guardar
          </Button>
        </div>
        <div className="right-cart">
          <h3>Pokemons Guardados</h3>
          {!error ? (
            <p>{pokedex?.length}</p>
          ) : (
            <div className="message-error">
              <p> Ha ocurrido un error </p>
            </div>
          )}

          <Button onClick={handlerClick} className={clasStyle.view_pokedex}>
            {" "}
            ...pokedex{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
