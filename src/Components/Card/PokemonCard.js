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
    backgroundColor: "#35cdfc",
    color: "white",
    marginBottom: "20px",
    width: "100px",
    marginRight: "20px",
    marginTop: "20px",
    disabled: {
      backgroundColor: "green",
    },
  },

  card: {
    backgroundColor: "#DCDCDC",
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
}) => {
  const [isInCart, setIsInCart] = useState(false);
  const clasStyle = useStyle();
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

  const inPokedex = pokedex.find((item) => item.id === id);
 
 
  useEffect(() => {
    if(inPokedex){
      setIsInCart(false);
    }
  }, [inPokedex]);

  useEffect(() => {
    if(cartPokemon.length === 0){
      setIsInCart(false);
    }
  }, [cartPokemon]);


  // componente para hacer el switch de botones
  const SwitchButtom = () => {
    switch (isInCart) {
      case true: {
        return (
          <ButtonDelete
            onClick={() => callDeleteButton()}
            disabled={!!inPokedex}
          />
        );
      }
      case false: {
        return (
          <AddButton onClick={() => callAddButton()} disabled={!!inPokedex} />
        );
      }
      default:
        return "error";
    }
  };

  return (
    <Card className={clasStyle.card}>
      <img className="poke-image" src={image} alt={name} />
      <p>{`# ${id}-${name}`}</p>

      {inPokedex && <h4 className="message-save">GUARDADO</h4>}

      <Button className={clasStyle.detailPokemon} onClick={handlerClick}>
        Detalle
      </Button>
      <SwitchButtom
        data={data}
        handleAddPokemon={handleAddPokemon}
        cartPokemon={cartPokemon}
        handleDeletePokemon={handleDeletePokemon}
        id={id}
      />
    </Card>
  );
};
export default PokemonCard;
