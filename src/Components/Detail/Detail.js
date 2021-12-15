import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";
import "./Detail.css";

import { useOwnContext } from "../../store/dashboard/storeApiPokedex";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const Detail = ({ modeMockApi }) => {
  const {
    loading,
    error,
    detail,
    viewDetailPokemons,
    errorViewDetailPokemons,
    setViewDetailPokemon,
  } = useOwnContext();

  const { id } = useParams();

  const fetchData = async () => {
    setViewDetailPokemon();

    try {
      const response = await axios.get(`${apiUrl}${id}`);
      console.log(response.data);
      viewDetailPokemons(response.data);
    } catch (error) {
      console.log(error);
      errorViewDetailPokemons(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="Detail">
      
      {detail.length === 0 && !error && !loading && (
        <div>¡Ohh no! no hay resultados</div>
      )}
      {!error ? (
        <CardDetail
          key={detail.name}
          pokemon={detail}
          id={id}
          modeMockApi={modeMockApi}
        />
      ) : (
        <div className="message-error">
          <p> Ha ocurrido un error </p>
        </div>
      )}
     
    </div>
  );
};
export default Detail;
