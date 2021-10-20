import React, { useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button/Button";
import { makeStyles } from "@material-ui/core/styles/";

const useStyle = makeStyles({
  cancel: {
    borderRadious: 3,
    backgroundColor: "#F00448",
    color: "white",
    marginBottom: "20px",
    width: "80px",
    marginRight: "20px",
    marginTop: "20px",
    fontSize: "12px",
  },
  add: {
    borderRadious: 3,
    backgroundColor: "#9589FE",
    color: "white",
    marginBottom: "20px",
    width: "80px",
    marginRight: "20px",
    marginTop: "20px",
    fontSize: "12px",
  },
});

function Cart({ cartPokemon }) {
  const savePokemon = async (cartPokemon) => {
      try {
          for await (const res of cartPokemon.map((i) => i )){
              await axios.post("https://6169c5c109e030001712c597.mockapi.io/pokemon",res)
          }

      } catch (error){
          console.log(error)
      }
    
    // cartPokemon.forEach(async (element) => {
    //   try {
    //     const config = {
    //       method: "post",
    //       url: "https://6169c5c109e030001712c597.mockapi.io/pokemon",
    //       data: element,
    //     };
    //     let res = await axios(config);
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // });
  };
  console.log(cartPokemon)
  useEffect(() => {
    savePokemon(cartPokemon);
  }, [cartPokemon]);

  const handleSavePokemon = () => {
    savePokemon(cartPokemon);
  };

  const clasStyle = useStyle();
  return (
    <div>
      {cartPokemon.length === 0 && <p> No hay pokemons en la pokedex</p>}
      <div>
        <h3>Pokemons Seleccionados</h3>
        <p>{cartPokemon.length}</p>
      </div>
      <Button className={clasStyle.cancel}>Cancelar </Button>
      <Button className={clasStyle.add} onClick={() => handleSavePokemon}>
        Guardar
      </Button>
    </div>
  );
}

export default Cart;
