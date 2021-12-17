import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card/Card";
import Button from "@material-ui/core/Button/Button";
import { makeStyles } from "@material-ui/core/styles/";
import "./PokemonCard.css";
import AddButton from "../AddButton/AddButton";
import ButtonDelete from "../ButtonDelete/ButtonDelete";


import { useOwnContext } from "../../store/dashboard/storeApiPokedex";

const useStyle = makeStyles({
  detailPokemon: {
    borderRadious: 3,
    backgroundColor: "#808283",
    color: "white",
    marginBottom: "35px",
    width: "100px",
    marginRight: "20px",
    marginTop: "20px",
  },

  card: {
    background:"linear-gradient(top,#F5F5F5,#AAAAAA)"
  },
  number: {
    color: "#d30101",
    fontSize:"25px"
  },
  save: {
    backgroundColor: "#DFFCF2",
  },
  messageSave: {
    color: "#7CD1B3",
    fontFamily: "Audiowide",
    fontSize: "20px",
  },
  blockButton: {
    display: "flex",
  },
});

const PokemonCard = ({ pokemon, id, image, modeMockApi,deletePokedex }) => {
  const { pokedex, cartPokemon, addPokemon, deletePokemon, IsInCart, OutCart } =
    useOwnContext();
  const clasStyle = useStyle();
  

  const stylesCard = () => {
    let save;
    inPokedex ? (save = clasStyle.save) : (save = clasStyle.card);
    return save;
  };

  //Función para cambio de botón
  const handleIsInCart = () => IsInCart();
  const handleOutCart = () => OutCart();

  //Función para el contador

  const handleAddPokemon = (name, image, url, id) => {
    addPokemon({ name, image, url, id });
  };

  //Función para eliminar pokemon seleccionado
  const handleDeletePokemon = (name) => {
    deletePokemon({ name });
    console.log(name);
  };
 
  //Función para cambiar el boton

  const isInCart = cartPokemon?.find((item) => item.id === id);

  const switchButton = (isInCart) => {
    if (isInCart) {
      return (
        <ButtonDelete
          onClick={() => callDeleteButton()}
          disabled={!!inPokedex}
        />
      );
    } else {
      return (
        <AddButton onClick={() => callAddButton()} disabled={!!inPokedex} />
      );
    }
  };
 

  //cambio de ruta para ver el detalle

  let history = useHistory();
  const handlerClick = () => {
    history.push(`/detail/${id}`);
  };
  
  // funcion para añadir el pokemon y hacer switch de botones

  const callAddButton = () => {
    handleAddPokemon(pokemon.name, image, pokemon.url, id);
    handleIsInCart();
  };
  const callDeleteButton = () => {
    handleDeletePokemon(pokemon.name);
    handleOutCart();
  };

  const inPokedex = pokedex?.find((item) => item.id === id);
  const deletePokemonInPokedex = () => {
    deletePokedex(pokemon.objectId);
    console.log(pokemon.objectId)
  };
 
  return (
    <Card className={stylesCard()}>
      {modeMockApi ? (
        <>
          <p className={clasStyle.number}>{`#${id}`}</p>
          <img className="poke-image" src={image} alt={pokemon.name} />
          <p>{`${pokemon.name}`}</p>{" "}
        </>
      ) : (
        <>
          <p className={clasStyle.number}>{`#${id}`}</p>
          <img className="poke-image" src={image} alt={pokemon.name} />
          <p>{`${pokemon.name}`}</p>
        </>
      )}

      {inPokedex && !modeMockApi && (
        <h4 className={clasStyle.messageSave}>GUARDADO</h4>
      )}

      {modeMockApi ? (
        <div className="blockButton">
          <Button className={clasStyle.detailPokemon} onClick={handlerClick}>
            Detalle
          </Button>
          <ButtonDelete onClick={() => deletePokemonInPokedex()} />
        </div>
      ) : (
        <div className="blockButton">
          <Button className={clasStyle.detailPokemon} onClick={handlerClick}>
            Detalle
          </Button>
          {switchButton(isInCart)}
        </div>
      )}
    </Card>
  );
};
export default PokemonCard;
