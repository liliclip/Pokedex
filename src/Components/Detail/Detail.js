import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";
import "./Detail.css";
import {
  viewDetailPokemons,
  errorViewDetailPokemons,
  setViewDetailPokemon,
} from "../../store/dashboard/actions";
import reducer, { INITIAL_STATE } from "../../store/dashboard/reducer";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
//const apiUrl = "https://pokeapi/api/v2/pokemon/";

const Detail = ({ modeMockApi }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { detail, loading, error } = state;

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setViewDetailPokemon());

      try {
        const response = await axios.get(`${apiUrl}${id}`);
        console.log(response.data);
        dispatch(viewDetailPokemons(response.data));
      } catch (error) {
        console.log(error);
        dispatch(errorViewDetailPokemons(error));
      }
    };

    fetchData();
  }, [id]);
  console.log("DETAIL ===>", detail);
  return (
    <div className="detail-pokemon">
      {detail.length === 0 && !error && !loading && (
        <div>¡Ohh no! no hay resultados</div>
      )}
      {!error ? (
        <CardDetail
          key={state.detail.name}
          pokemon={state.detail}
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
