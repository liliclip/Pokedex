import React, { useEffect, useState } from "react";
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
    display:"flex",
  },
 
});

const PokemonCard = ({
  name,
  image,
  id,
  data,
  handleAddPokemon,
  cartPokemon,
  handleDeletePokemon,
  pokedex,
  modeMockApi,
  objectId,
  deletePokedex,
}) => {
  const [isInCart, setIsInCart] = useState(false);
  const clasStyle = useStyle();

  const stylesCard = () => {
    let save;
    inPokedex ? (save = clasStyle.save) : (save = clasStyle.card);
    return save;
  };

  //Función para cambiar el boton
  
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
    handleAddPokemon(data, image, id);
    setIsInCart(true);
  };
  const callDeleteButton = () => {
    handleDeletePokemon(name);
    setIsInCart(false);
  };

  //Funcion para eliminar el pokemon de la pokedex
  const deletePokemonPokedex = () => {
    deletePokedex(objectId);
  };
  const inPokedex = pokedex.find((item) => item.id === id);

  useEffect(() => {
    if (inPokedex) {
      setIsInCart(false);
    }
  }, [inPokedex]);
  // Quitar el boton de eliminar siempre que cartPokemon este en cero
  useEffect(() => {
    if (cartPokemon?.length === 0) {
      setIsInCart(false);
    }
  }, [cartPokemon]);

  return (
    <Card className={stylesCard()}>
      <p className={clasStyle.number}>{`#${id}`}</p>
      <img className="poke-image" src={image} alt={name} />
      <p>{`${name}`}</p>

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
          {switchButton(isInCart)}
        </div>
      )}
    </Card>
  );
};
export default PokemonCard;
