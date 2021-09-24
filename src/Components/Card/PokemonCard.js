import React from "react";
import Card from "@material-ui/core/Card/Card";
import Button from "@material-ui/core/Button/Button";
import { makeStyles } from "@material-ui/core/styles/";
import "./PokemonCard.css";

const useStyle = makeStyles({
  detailPokemon: {
    borderRadious: 3,
    backgroundColor: "#35cdfc",
    color: "white",
    marginBottom: "20px",
    width:"120px",
  },

  card:{
    backgroundColor:"#DCDCDC"
  }
});



const PokemonCard = ({ name, image }) => {
  const clasStyle = useStyle();
  return (
    <Card className={clasStyle.card}>
      <img className="poke-image" src={image} alt={name} />
      <p>{name}</p>
      <Button className={clasStyle.detailPokemon}>Detalle</Button>
    </Card>
  );
};
export default PokemonCard;
