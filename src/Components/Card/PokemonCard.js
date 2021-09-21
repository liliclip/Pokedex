import React from "react";
import Card from "@material-ui/core/Card/Card";
import Button from '@material-ui/core/Button/Button';



const PokemonCard = ({ name, index, image }) => {
  return (
    <Card>
      <img src={image} alt={index} />
      <p key={index}>{name}</p>
      <Button variant="outlined">Detalle</Button>
    </Card>
  );
};
export default PokemonCard;
