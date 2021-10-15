import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles/";
import Button from "@material-ui/core/Button/Button";
import "./CardDetail.css";
import Loader from "../Loader/Loader"

const CardDetail = ({ pokemon , id }) => {
  const useStyle = makeStyles({
    detailPokemon: {
      borderRadious: 3,
      backgroundColor: "#35cdfc",
      color: "white",
      marginBottom: "20px",
      marginTop: "20px",
      width: "120px",
      marginLeft:"30px"
    },

    card: {
      backgroundColor: "#DCDCDC",
    },
  });
  const clasStyle = useStyle();
  let history = useHistory();
  const handlerClick = () => {
    history.push("/Dashboard");
  };

  const {
    name,
    sprites,
    abilities,
    base_experience,
    height,
    weight,
    species,
    types,
  } = pokemon;

  return (
    <>
      {sprites === undefined ? (
        <Loader/>
      ) : (
        <div className="Detail-container-card">
          <div className="Detail-container-card-left">
            <h2 className="titles">Nombre</h2>
            <h3>{`#${id}-${name}`}</h3>
            <div className="background-image">
              <img src={sprites.front_default} alt={name}></img>
              <img src={sprites.back_default} alt={name}></img>
            </div>
            <h2 className="titles">Habilidades</h2>
            {abilities.map((item) => {
              const {
                ability: { name },
              } = item;
              return <h3 className="types">{name}</h3>
            })}
          </div>
          <div className="Detail-container-card-rigth">
            <h2 className="titles">Experiencia</h2>
            <h3>{base_experience}</h3>

            <h2 className="titles">Altura</h2>
            <h3>{height}</h3>
            <h2 className="titles">peso</h2>
            <h3>{weight}</h3>

            <h2 className="titles">Especie</h2>
            <h3>{species.name}</h3>
           <div className="types-inline">
            <h2 className="titles">Tipo</h2>
            {types.map((item) => {
              const {
                type: { name },
              } = item;
              return <h3 className="types">{name}</h3>
            })}
            </div>

            <Button className={clasStyle.detailPokemon} onClick={handlerClick}>
              regresar
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
export default CardDetail;
