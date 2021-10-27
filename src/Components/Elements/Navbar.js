import React, { useState } from "react";
import pokeball from "../../Assets/small-pokeball-icon-4.jpeg";
import Cart from "../CartPokemon/Cart";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles/";
import Modal from "@material-ui/core/Modal/Modal";


const useStyle = makeStyles({
  pokeModal: {
    width: "300px",
    height: "250px",
    backgroundColor: "#4E4D4D",
    marginLeft: "850px",
    marginTop: "68px",
    padding: "0px 0px 0px 40px",
    borderRadius: "2px 20px 20px 20px",
  },
});

function Navbar({ cartPokemon, pokedex, handleCancelCart, loading, error,savePokemon,setPokedex}) {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const clasStyle = useStyle();

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <div className="counter-pokemon">
        <button onClick={handleOpen}>
          <img src={pokeball} alt="pokeball" />
        </button>
        <span>{cartPokemon.length}</span>
      </div>
      <Modal open={open} onClose={handleClose} className={clasStyle.pokeModal}>
        <Cart
          cartPokemon={cartPokemon}
          pokedex={pokedex}
          handleCancelCart={handleCancelCart}
          loading={loading}
          error={error}
          savePokemon={savePokemon}
          setPokedex={setPokedex}
          // getPokedex={getPokedex}
          
        />
      </Modal>
    </div>
  );
}

export default Navbar;
