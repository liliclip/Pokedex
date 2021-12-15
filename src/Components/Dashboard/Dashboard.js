import React, { useEffect } from "react";
import axios from "axios";
import List from "../List/List";
import "./Dashboard.css";
import Loader from "../Loader/Loader";
import Navbar from "../Elements/Navbar";

import { useOwnContext } from "../../store/dashboard/storeApiPokedex";

const api = "https://pokeapi.co/api/v2/pokemon?limit=12";
const pokedexApi = "https://6169c5c109e030001712c597.mockapi.io/pokemon";

const Dashboard = ({ modeMockApi }) => {
  const {
    loading,
    pokemon,
    error,
    pokedex,
    setGetPokemons,
    successGetPokemons,
    errorGetPokemons,
    SetSavePokemonsInPokedex,
    errorSavePokemonsInPokedex,
    setGetPokedex,
    savePokemonsInPokedex,
    errorGetPokedex,
  } = useOwnContext();

  //Petición 600 pokemon

  const fetchData = async () => {
    setGetPokemons();

    try {
      const data = await axios.get(api).then((response) => {
        return response.data;
      });

      successGetPokemons(data.results);
    } catch (error) {
      errorGetPokemons("Ocurrio un error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Función para enviar pokemon a mockApi

  const savePokemon = async (cartPokemon) => {
    SetSavePokemonsInPokedex();
    try {
      for await (const res of cartPokemon.map((i) => i)) {
        await axios.post(
          "https://6169c5c109e030001712c597.mockapi.io/pokemon",
          res
        );
      }
      getPokedex();
    } catch (error) {
      errorSavePokemonsInPokedex(error);
    }
  };

  // //Obtener pokemon de pokedex
  const getPokedex = async () => {
    setGetPokedex();
    try {
      const data = await axios
        .get(pokedexApi)
        .then((response) => response.data);
      savePokemonsInPokedex(data);
    } catch (error) {
      console.log(error);
      errorGetPokedex(error);
    }
  };

  useEffect(() => {
    getPokedex();
  }, []);
 

  // //Función para borrar pokemon de pokedex
  const deletePokedex = async (objectId) => {
    try {
      await axios
        .delete(
          `https://6169c5c109e030001712c597.mockapi.io/pokemon/${objectId}`
        )
        .then((response) => {});
      getPokedex();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard">
      <Navbar savePokemon={savePokemon} modeMockApi={modeMockApi} />
      {loading && <Loader />}
      {pokemon?.length === 0 && !error && !loading && <h1>No hay pokemon</h1>}
      {modeMockApi && pokedex?.length === 0 && !error && !loading && (
        <div>
          <h1>Sin pokemon en la pokedex</h1>
          <img
            src="https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif"
            alt="pikachu-cry"
          ></img>
        </div>
      )}
      {error && (
        <div className="message-error">
          <p> Ha ocurrido un error </p>
        </div>
      )}
      {!error && (
        <div className="container-cards">
          {modeMockApi
            ? pokedex?.map((item) => (
                <List
                  key={item.name}
                  pokemon={item}
                  deletePokedex={deletePokedex}
                  modeMockApi={modeMockApi}
                />
              ))
            : pokemon?.map((item) => <List key={item.name} pokemon={item} />)}
        </div>
      )}
    </div>
  );
};
export default Dashboard;
