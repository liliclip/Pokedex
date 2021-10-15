import Button from "@material-ui/core/Button/Button";
import { makeStyles } from "@material-ui/core/styles/";
import React from "react";

const useStyle = makeStyles({
    detailPokemon: {
      borderRadious: 3,
      backgroundColor: "#F00448",
      color: "white",
      marginBottom: "20px",
      width: "100px",
      marginRight:"20px",
      marginTop:"20px"
    },
  });

function ButtonDelete() {
    const clasStyle = useStyle();
  return (
    <div>
      <Button className={clasStyle.detailPokemon} >
        Eliminar
      </Button>
    </div>
  );
}

export default ButtonDelete;
