import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";
import Loader from "../Loader/Loader";
import "./Detail.css";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
//const apiUrl = "https://pokeapi/api/v2/pokemon/";

const Detail = () => {
  const [url, setUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${apiUrl}${id}`);
        console.log(response.data);
        setUrl(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="detail-pokemon">
      {loading && <Loader />}
      {url.length === 0 && !error && !loading && (
        <div>¡Ohh no! no hay resultados</div>
      )}
      {!error ? (
        <CardDetail key={url.name} pokemon={url} id={id}/>
      ) : (
        <div className="message-error">
          <p> Ha ocurrido un error </p>
        </div>
      )}
    </div>
  );
};
export default Detail;
