import React from "react";
import Card from "@material-ui/core/Card/Card";
import Button from '@material-ui/core/Button/Button';
import "./PokemonCard.css"



const PokemonCard = ({ name,  image }) => {
  return (
    <Card className="card">
      <img src={image} alt={name} />
      <p >{name}</p>
      <Button  variant="outlined">Detalle</Button>
    </Card>
  );
};
export default PokemonCard;
