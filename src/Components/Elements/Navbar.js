import React, { useState } from "react";
//import axios from "axios";
import pokeball from "../../Assets/small-pokeball-icon-4.jpeg";
import Cart from "../CartPokemon/Cart";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles/";
import Modal from "@material-ui/core/Modal/Modal";

const useStyle = makeStyles({
  pokeModal: {
    width: "300px",
    height: "300px",
    backgroundColor: "#ECF9FE",
    marginLeft: "850px",
    marginTop: "68px",
    padding: "10px",
    borderRadius: "2px 50px 50px 50px",
  },
});

function Navbar({ cartPokemon }) {
  //const [postPokemon, setPostPokemon] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const clasStyle = useStyle();

//   useEffect(() => {
    
//       const savePokemon = (cartPokemon) => {
//         cartPokemon.forEach(async (element) => {
//           try {
//             const config = {
//               method: "post",
//               url: "https://6169c5c109e030001712c597.mockapi.io/pokemon",
//               data: element,
//             };
//             let res = await axios(config);
//             setPostPokemon(res.data);
//           } catch (error) {
//             console.log(error);
//           }
//         });
//       };
//       savePokemon();
    
//   }, [cartPokemon]);
 

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
        <Cart cartPokemon={cartPokemon}  />
      </Modal>
    </div>
  );
}

export default Navbar;
