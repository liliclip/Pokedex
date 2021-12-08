import React, { useEffect, useReducer } from "react";
import axios from "axios";
import List from "../List/List";
import "./Dashboard.css";
import Loader from "../Loader/Loader";
import Navbar from "../Elements/Navbar";
import reducer, { INITIAL_STATE } from "../../store/dashboard/reducer";
import {
  setGetPokemons,
  successGetPokemons,
  errorGetPokemons,
  addPokemon,
  deletePokemon,
  deleteAllPokemons,
  setCloseModal,
  setOpenModal,
  savePokemonsInPokedex,
  IsInCart,
  OutCart,
  SetSavePokemonsInPokedex,
  errorSavePokemonsInPokedex,
  errorGetPokedex,
  setGetPokedex,
} from "../../store/dashboard/actions";

const api = "https://pokeapi.co/api/v2/pokemon?limit=12";
const pokedexApi = "https://6169c5c109e030001712c597.mockapi.io/pokemon";

const Dashboard = ({ modeMockApi }) => {
  // usando useReducer
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { loading, error, pokemon, cartPokemon, pokedex, open, inCart } = state;

  //Petición 600 pokemon

  const fetchData = async () => {
    dispatch(setGetPokemons());

    try {
      const data = await axios.get(api).then((response) => {
        return response.data;
      });

      dispatch(successGetPokemons(data.results));
    } catch (error) {
      dispatch(errorGetPokemons(error));
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Función para enviar pokemon a mockApi

  const savePokemon = async (cartPokemon) => {
    dispatch(SetSavePokemonsInPokedex());
    try {
      for await (const res of cartPokemon.map((i) => i)) {
        await axios.post(
          "https://6169c5c109e030001712c597.mockapi.io/pokemon",
          res
        );
      }
      getPokedex();
    } catch (error) {
      dispatch(errorSavePokemonsInPokedex(error));
    }
  };

  //Obtener pokemon de pokedex
  const getPokedex = async () => {
    dispatch(setGetPokedex());
    try {
      const data = await axios
        .get(pokedexApi)
        .then((response) => response.data);
      dispatch(savePokemonsInPokedex(data));
    } catch (error) {
      console.log(error);
      dispatch(errorGetPokedex(error));
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

  const handleOpen = () => dispatch(setOpenModal());
  const handleClose = () => dispatch(setCloseModal());

  //Función para cambio de botón
  const handleIsInCart = () => dispatch(IsInCart());
  const handleOutCart = () => dispatch(OutCart());

  //Función para el contador

  const handleAddPokemon = (name, image, url, id) => {
    dispatch(addPokemon({ name, image, url, id }));
  };

  //Función para eliminar pokemon seleccionado
  const handleDeletePokemon = (name) => {
    dispatch(deletePokemon({ name }));
    console.log(name);
  };
  const handleCancelCart = () => {
    dispatch(deleteAllPokemons());
  };

  console.log(pokedex);
  return (
    <div className="dashboard">
      <Navbar
        cartPokemon={cartPokemon}
        handleCancelCart={handleCancelCart}
        loading={loading}
        error={error}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        pokedex={pokedex}
        savePokemon={savePokemon}
        modeMockApi={modeMockApi}
        IsInCart={inCart}
      />
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
                  name={item.name}
                  url={item.url}
                  id={item.id}
                  pokemon={item}
                  pokedex={state.pokedex}
                  modeMockApi={modeMockApi}
                  objectId={item.objectId}
                  deletePokedex={deletePokedex}
                />
              ))
            : pokemon?.map((item) => (
                <List
                  key={item.name}
                  url={item.url}
                  name={item.name}
                  pokemon={state.pokemon}
                  cartPokemon={cartPokemon}
                  handleAddPokemon={handleAddPokemon}
                  handleDeletePokemon={handleDeletePokemon}
                  pokedex={pokedex}
                  handleIsInCart={handleIsInCart}
                  handleOutCart={handleOutCart}
                  addPokemon={addPokemon}
                  inCart={inCart}
                />
              ))}
        </div>
      )}
    </div>
  );
};
export default Dashboard;
