import React, { useState, useEffect } from "react";
import PokemonCard from "../Card/PokemonCard";
import "./Dashboard.css";
import axios from "axios";
import Loader from "../Loader/Loader";
const api = "https://pokeapi.co/api/v2/pokemon?limit=600";

const Dashboard = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  //Petición asíncrona
  useEffect(() => {
    
   
      const fetchData = async () => {
        setLoading(true);
        try {
          
          const data = await axios.get(api).then((response) => {
            return response.data;
          });
          setPokemon(data.results);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
        
      };
      fetchData();
    
  }, []);

  //Traer imagen y nombre

  const getUrl = pokemon.map((poke) => poke.url);
  const getName = pokemon.map((poke) => poke.name);
  const name = getName.map((poke) => poke);

  const getId = getUrl.map((urlPokemon) => {
    let url = urlPokemon;
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
    const id = url.replace(apiUrl, "").replace("/", "");
    return id;
  });
  const getImage = getId.map((id) => {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return image;
  });

  return (
    <>
      <h2>Pokedex</h2>
      {loading && <Loader />}
      <div className="container-cards">
        {pokemon.length !== 0 ? (
          getImage.map((image, index) => (
            <PokemonCard index={index} image={image} name={name} />
          ))
        ) : (
          <div className="message-error">
            <p> Ha ocurrido un error </p>
          </div>
        )}
      </div>
    </>
  );
};
export default Dashboard;
