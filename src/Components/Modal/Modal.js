import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Modal() {
  const api = "https://pokeapi.co/api/v2/pokemon?limit=600";
  const [pokemon, setPokemon] = useState([]);
  

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

  const getUrl = pokemon.map((poke) => poke.url);
  console.log(getUrl)

 

  return <div></div>;
}
