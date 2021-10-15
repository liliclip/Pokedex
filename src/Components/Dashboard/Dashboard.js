import React, { useState, useEffect } from "react";
import List from "../List/List";
import "./Dashboard.css";
import axios from "axios";
import Loader from "../Loader/Loader";
import Navbar from "../Elements/Navbar";

const api = "https://pokeapi.co/api/v2/pokemon?limit=600";

const Dashboard = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartPokemon, setCartPokemon] = useState([]);

  //Petición asíncrona
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

  // const handleAddPokemon = (pokemon) => {
  //   //constante que permite saber si el producto ya esta dentro del carrito
  //   const pokemonExist = cartPokemon.find((item) => item.name === pokemon.name);
  //   // si el producto ya existe
  //   if (pokemonExist) {
  //     setCartPokemon(
  //       cartPokemon.map((item) =>
  //         item.name === pokemon.name
  //           ? { ...pokemonExist, quantity: pokemonExist.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCartPokemon([...cartPokemon, {...pokemon,quantity:1}])
  //   }
  // };

  const handleAddPokemon = (pokemon) => {
    const pokemonIndex = cartPokemon.findIndex((item) => item.name === pokemon.name);
    if (pokemonIndex !== -1) {
      return 
      
    } else {
      const copyCard = [...cartPokemon];
      setCartPokemon([...copyCard,{...pokemon,isInCart:true}]);
    }
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
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Dashboard;
