import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../List/List";
import "./Dashboard.css";
import Loader from "../Loader/Loader";
import Navbar from "../Elements/Navbar";

const api = "https://pokeapi.co/api/v2/pokemon?limit=50";
const pokedexApi = "https://6169c5c109e030001712c597.mockapi.io/pokemon";

const Dashboard = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartPokemon, setCartPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  //Petición asíncrona 600 pokemon

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

  //Obtener pokemon de pokedex
  const getPokedex = async () => {
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
    getPokedex();
  }, [cartPokemon]);

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

  // Función para eliminar el pokemon que ya estaba selccionado
  const handleDeletePokemon = (name) => {
    setCartPokemon(cartPokemon.filter((poke) => poke.name !== name));
  };

  //Función para limpiar el array
  const handleCancelCart = () => {
    setCartPokemon([]);
  };

  return (
    <>
      <Navbar
        pokemon={pokemon}
        cartPokemon={cartPokemon}
        pokedex={pokedex}
        handleCancelCart={handleCancelCart}
        loading={loading}
        error={error}
        setCartPokemon={setCartPokemon}
        setPokedex={setPokedex}
      />
      {loading && <Loader />}
      {pokemon.length === 0 && !error && !loading && <h1>No hay pokemon</h1>}
      {error && (
        <div className="message-error">
          <p> Ha ocurrido un error </p>
        </div>
      )}
      {!error && (
        <div className="container-cards">
          {pokemon.map((item) => (
            <List
              key={item.name}
              pokemon={item}
              data={pokemon}
              cartPokemon={cartPokemon}
              handleAddPokemon={handleAddPokemon}
              handleDeletePokemon={handleDeletePokemon}
              pokedex={pokedex}
              setCartPokemon={setCartPokemon}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Dashboard;
