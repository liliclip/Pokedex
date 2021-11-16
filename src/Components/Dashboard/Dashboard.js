import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../List/List";
import "./Dashboard.css";
import Loader from "../Loader/Loader";
import Navbar from "../Elements/Navbar";

const api = "https://pokeapi.co/api/v2/pokemon?limit=900";
const pokedexApi = "https://6169c5c109e030001712c597.mockapi.io/pokemon";

const Dashboard = ({ modeMockApi }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartPokemon, setCartPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  //Petición 600 pokemon

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await axios.get(api).then((response) => {
        return response.data;
      });
      setPokemon(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Ocurrio un error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Función para enviar pokemon a mockApi

  const savePokemon = async (cartPokemon, setPokedex) => {
    setLoading(true);
    setError(null);
    try {
      for await (const res of cartPokemon.map((i) => i)) {
        await axios.post(
          "https://6169c5c109e030001712c597.mockapi.io/pokemon",
          res
        );
      }
      getPokedex(setPokedex);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Ocurrio un error");
    }
  };

  //Obtener pokemon de pokedex
  const getPokedex = async (setPokedex) => {
    setLoading(true);
    setError(null);
    try {
      const data = await axios
        .get(pokedexApi)
        .then((response) => response.data);

      setPokedex(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Ocurrio un error");
    }
  };

  useEffect(() => {
    getPokedex(setPokedex);
  }, [setPokedex]);

  //Función para borrar pokemon de pokedex
  const deletePokedex = async (objectId) => {
    try {
      await axios
        .delete(
          `https://6169c5c109e030001712c597.mockapi.io/pokemon/${objectId}`
        )
        .then((response) => {
          
        });
      getPokedex(setPokedex);
    } catch (error) {
      console.log(error);
    }
  };

  //Función para el contador

  const handleAddPokemon = (pokemon, image, id) => {
    const pokemonIndex = cartPokemon.findIndex(
      (item) => item.name === pokemon.name
    );
    if (pokemonIndex !== -1) {
      return;
    } else {
      const copyCard = [...cartPokemon];
      setCartPokemon([
        ...copyCard,
        { ...pokemon, isInCart: true, image: image, id: id },
      ]);
    }
    console.log("Funcion añadir pokemon", cartPokemon);
  };

  // Función para eliminar el pokemon que ya estaba seleccionado
  const handleDeletePokemon = (name) => {
    setCartPokemon(cartPokemon.filter((poke) => poke.name !== name));
  };

  //Función para limpiar el array
  const handleCancelCart = () => {
    setCartPokemon([]);
  };

  return (
    <div className="dashboard">
      <Navbar
        cartPokemon={cartPokemon}
        pokedex={pokedex}
        handleCancelCart={handleCancelCart}
        loading={loading}
        error={error}
        setPokedex={setPokedex}
        savePokemon={savePokemon}
        modeMockApi={modeMockApi}
      />
      {loading && <Loader />}
      {pokemon.length === 0 && !error && !loading && <h1>No hay pokemon</h1>}
      {modeMockApi && pokedex.length === 0 && !error && !loading && (
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
            ? pokedex.map((item) => (
                <List
                  key={item.name}
                  pokemon={item}
                  pokedex={pokedex}
                  modeMockApi={modeMockApi}
                  objectId={item.objectId}
                  deletePokedex={deletePokedex}
                />
              ))
            : pokemon.map((item) => (
                <List
                  key={item.name}
                  pokemon={item}
                  cartPokemon={cartPokemon}
                  handleAddPokemon={handleAddPokemon}
                  handleDeletePokemon={handleDeletePokemon}
                  pokedex={pokedex}
                  setCartPokemon={setCartPokemon}
                />
              ))}
        </div>
      )}
    </div>
  );
};
export default Dashboard;
