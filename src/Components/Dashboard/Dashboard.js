import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../List/List";
import "./Dashboard.css";
import Loader from "../Loader/Loader";
import Navbar from "../Elements/Navbar";

const api = "https://pokeapi.co/api/v2/pokemon?limit=600";
const pokedexApi = "https://6169c5c109e030001712c597.mockapi.io/pokemon";

const Dashboard = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartPokemon, setCartPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  //Petición asíncrona 600 pokemon
  useEffect(() => {
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
    fetchData();
  }, []);
  // Obtener pokemon de pokedex

  useEffect(() => {
    const getPokedex = async () => {
      try {
        const data = await axios.get(pokedexApi).then((response) => response.data);
        console.log("pokedex ",data)
        setPokedex(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPokedex();
  }, []);

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
  };
  const handleDeletePokemon = (name) => {
    setCartPokemon(cartPokemon.filter((poke) => poke.name !== name));
  };

  return (
    <>
      <Navbar pokemon={pokemon} cartPokemon={cartPokemon} />
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
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Dashboard;
