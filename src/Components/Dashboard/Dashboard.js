import React, { useState, useEffect } from "react";
import PokemonCard from "../Card/PokemonCard";
import "./Dashboard.css";
import axios from "axios";
const api = "https://pokeapi.co/api/v2/pokemon?limit=600";

const Dashboard = () => {
  const [pokemon, setPokemon] = useState([]);

  //Petición asíncrona
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(api).then((response) => {
          return response.data;
        });
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  

  //Traer imagen y nombre

  const getUrl = pokemon.map((poke) => poke.url);

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
    <div className="container-cards">
      {getImage.map((image, index) => (
      <PokemonCard className="card"index={index} image={image} />
      ))}
     

    </div>
    </>
  );
};
export default Dashboard;
