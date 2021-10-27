import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button/Button";
import "./Cart.css";
import { makeStyles } from "@material-ui/core/styles/";
import Loader from "../Loader/Loader";

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
    backgroundColor: "#9589FE",
    color: "white",
    marginBottom: "20px",
    width: "100px",
    marginRight: "20px",
    marginTop: "0px",
    fontSize: "12px",
  },
});

function Cart({ cartPokemon, pokedex, handleCancelCart }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  const handlerClick = () => {
    history.push("/pokedex");
  };

  

  //Función para enviar pokemon a mockApi

  const savePokemon = async (cartPokemon) => {
    setLoading(true);
    setError(null);
    try {
      for await (const res of cartPokemon.map((i) => i)) {
        await axios.post(
          "https://6169c5c109e030001712c597.mockapi.io/pokemon",
          res
        );
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Ocurrio un error");
    }
  };

  const cancelArray = () => {
    handleCancelCart();
    console.log("si estoy dando click");
  };

  const handleSavePokemon = () => {
    savePokemon(cartPokemon);
  };

  const clasStyle = useStyle();

  return (
    <div>
      {loading && <Loader />}
      {pokedex.length === 0 && !error && !loading && <span>No hay pokemons en la pokedex </span>}
      <div className="pokemon-state">
        <div>
          <h3>Pokemons Seleccionados</h3>
          <p>{cartPokemon.length}</p>
          <Button className={clasStyle.cancel} onClick={cancelArray}>
            Cancelar
          </Button>
          <Button className={clasStyle.add} onClick={() => handleSavePokemon()}>
            Guardar
          </Button>
        </div>
        <div>
          <h3>Pokemons Guardados</h3>
          {!error ? (
            <p>{pokedex.length}</p>
          ) : (
            <div className="message-error">
              <p> Ha ocurrido un error </p>
            </div>
          )}

          <button onClick={handlerClick}> Ir a la pokedex </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
