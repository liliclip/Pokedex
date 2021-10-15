import React, { useState } from "react";
import pokeball from "../../Assets/small-pokeball-icon-4.jpeg";
import Cart from "../CartPokemon/Cart";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles/";
import Modal from "@material-ui/core/Modal/Modal";

const useStyle = makeStyles({
    pokeModal: {
        width: "300px",
        height:"300px",
        backgroundColor:"#ECF9FE",
        marginLeft:"800px"
    },
  
  });

function Navbar({ cartPokemon }) {
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={clasStyle.pokeModal}
      >
        <Cart cartPokemon={cartPokemon} />
      </Modal>
    </div>
  );
}

export default Navbar;
