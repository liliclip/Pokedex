import axios from "axios";
const pokedexApi = "https://6169c5c109e030001712c597.mockapi.io/pokemon";

const savePokemon = async (cartPokemon,setPokedex) => {
  try {
    for await (const res of cartPokemon.map((i) => i)) {
      await axios.post(
        "https://6169c5c109e030001712c597.mockapi.io/pokemon",
        res
      );
    }
    getPokedex(setPokedex);
  } catch (error) {
    console.log(error);
  }
};

export  const getPokedex = async (setPokedex) => {
  try {
    const data = await axios.get(pokedexApi).then((response) => response.data);
    setPokedex(data);
  } catch (error) {
    console.log(error);
  }
};

export default savePokemon;
