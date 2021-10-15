import React, { useState } from "react";
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
  },

  card: {
    backgroundColor: "#DCDCDC",
  },
  addPokemon: {
    borderRadious: 3,
    backgroundColor: "#8583FF",
    color: "white",
    marginBottom: "20px",
    width: "100px",
    marginTop: "20px",
  },
});

const PokemonCard = ({
  name,
  image,
  id,
  data,
  handleAddPokemon,
  cartPokemon,
}) => {
  let history = useHistory();
  const handlerClick = () => {
    history.push(`/Detail/${id}`);
  };

  const callDashboard = () => {
    handleAddPokemon(data)
    setIsInCart(true)
  }

  const clasStyle = useStyle();
  const [isInCart, setIsInCart] = useState(false);

  const SwitchButtom = () => {
    
    switch (isInCart) {
      case true: {
        return <ButtonDelete />;
      }
      case false: {
        return <AddButton onClick={() => callDashboard()} />;
      }
      default: 
        return "ahora no la cagamos"
    }
  
  };

  return (
    <Card className={clasStyle.card}>
      <img className="poke-image" src={image} alt={name} />
      <p>{`# ${id}-${name}`}</p>

      <Button className={clasStyle.detailPokemon} onClick={handlerClick}>
        Detalle
      </Button>
      <SwitchButtom
        data={data}
        handleAddPokemon={handleAddPokemon}
        cartPokemon={cartPokemon}
      />
    </Card>
  );
};
export default PokemonCard;
