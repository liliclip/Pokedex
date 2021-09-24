import React, { useState, useEffect } from "react";
import List from "../List/List";
import "./Dashboard.css";
import axios from "axios";
import Loader from "../Loader/Loader";
import pokeball from "../../Assets/small-pokeball-icon-4.jpeg"

const api = "https://pokeapi.co/api/v2/pokemon?limit=3000";

const Dashboard = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <>
    <div className="pokedex">
    <img src={pokeball} alt="pokeball" />
    <h1>Pokedex</h1>
    
    </div>
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
            <List key={item.name} pokemon={item} />
          ))}
        </div>
      )}
    </>
  );
};
export default Dashboard;
