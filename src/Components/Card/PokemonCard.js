import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card/Card";
import Button from "@material-ui/core/Button/Button";
import { makeStyles } from "@material-ui/core/styles/";
import "./PokemonCard.css";
import AddButton from "../AddButton/AddButton";
import ButtonDelete from "../ButtonDelete/ButtonDelete";

const useStyle = makeStyles({
  detailPokemon: {
    borderRadious: 3,
    backgroundColor: "#4094F9",
    color: "white",
    marginBottom: "20px",
    width: "100px",
    marginRight: "20px",
    marginTop: "20px",
  },

  card: {
    backgroundColor: "#DCDCDC",
  },
  number: {
    color: "#d30101",
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

const PokemonCard = ({
  name,
  image,
  id,
  url,
  handleAddPokemon,
  cartPokemon,
  handleDeletePokemon,
  pokedex,
  modeMockApi,
  objectId,
  deletePokedex,
  handleIsInCart,
  handleOutCart,
}) => {
  const clasStyle = useStyle();

  const stylesCard = () => {
    let save;
    inPokedex ? (save = clasStyle.save) : (save = clasStyle.card);
    return save;
  };

  //Función para cambiar el boton

  const inCart = cartPokemon?.find((item) => item.id === id);

  const switchButton = (inCart) => {
    if (inCart) {
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
  console.log(pokedex);
  //cambio de ruta para ver el detalle

  let history = useHistory();
  const handlerClick = () => {
    history.push(`/detail/${id}`);
  };

  // funcion para añadir el pokemon y hacer switch de botones

  const callAddButton = () => {
    handleAddPokemon(name, image, url, id);
    handleIsInCart();
  };
  const callDeleteButton = () => {
    handleDeletePokemon(name);
    handleOutCart();
  };

  //Funcion para eliminar el pokemon de la pokedex
  const deletePokemonPokedex = () => {
    deletePokedex(objectId);
  };
  console.log(pokedex, "=====> pokemonCard");
  const inPokedex = pokedex?.find((item) => item.id === id);

  return (
    <Card className={stylesCard()}>
      {modeMockApi ? (
        <>
          <p className={clasStyle.number}>{`#${id}`}</p>
          <img className="poke-image" src={image} alt={name} />
          <p>{`${name}`}</p>{" "}
        </>
      ) : (
        <>
          <p className={clasStyle.number}>{`#${id}`}</p>
          <img className="poke-image" src={image} alt={name} />
          <p>{`${name}`}</p>
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
          <ButtonDelete onClick={() => deletePokemonPokedex()} />
        </div>
      ) : (
        <div className="blockButton">
          <Button className={clasStyle.detailPokemon} onClick={handlerClick}>
            Detalle
          </Button>
          {switchButton(inCart)}
        </div>
      )}
    </Card>
  );
};
export default PokemonCard;
