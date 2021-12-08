import React from "react";
import pokeball from "../../Assets/small-pokeball-icon-4.jpeg";
import back from "../../Assets/back-icon.png";
import pokeLogo from "../../Assets/pokeLogo.png";
import Cart from "../CartPokemon/Cart";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles/";
import { useHistory } from "react-router-dom";
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

function Navbar({
  cartPokemon,
  pokedex,
  handleCancelCart,
  loading,
  error,
  savePokemon,
  setPokedex,
  modeMockApi,
  open,
  handleClose,
  handleOpen,
}) {
  const clasStyle = useStyle();

  let history = useHistory();
  const handlerClick = () => {
    history.push("/dashboard");
  };
 console.log(pokedex, "====> navbar")
  return (
    <div className="pokeball">
      {modeMockApi ? (
        <>
          <img src={pokeLogo} alt="pokeLogo" />
          <div className="modeMockApi-navbar">
            <button onClick={handlerClick}>
              <img src={back} alt="back-icon" />
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={pokeLogo} alt="pokeLogo" />
          <div className="counter-pokemon">
            <button onClick={handleOpen}>
              <img src={pokeball} alt="pokeball" />
            </button>
            <span>{cartPokemon?.length}</span>
          </div>
        </>
      )}

      <Modal open={open} onClose={handleClose} className={clasStyle.pokeModal}>
        <Cart
          cartPokemon={cartPokemon}
          pokedex={pokedex}
          handleCancelCart={handleCancelCart}
          loading={loading}
          error={error}
          savePokemon={savePokemon}
          setPokedex={setPokedex}
        />
      </Modal>
    </div>
  );
}

export default Navbar;
