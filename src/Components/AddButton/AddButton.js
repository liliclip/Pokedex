import React from "react";
import Button from "@material-ui/core/Button/Button";
import { makeStyles } from "@material-ui/core/styles/";

const useStyle = makeStyles({
  addPokemon: {
    borderRadious: 3,
    backgroundColor: "#9589FE",
    color: "white",
    marginBottom: "20px",
    width: "100px",
    marginRight: "20px",
    marginTop: "20px",
  },
});

function AddButton({onClick}) {
  const clasStyle = useStyle();
  return <Button className={clasStyle.addPokemon} onClick={onClick}>Agregar</Button>;
}

export default AddButton;
