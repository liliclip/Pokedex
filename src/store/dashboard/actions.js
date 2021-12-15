import {
  SET_GET_POKEMONS,
  SUCCESS_GET_POKEMONS,
  ERROR_GET_POKEMONS,
  SET_OPEN_MODAL,
  SET_CLOSE_MODAL,
  ADD_POKEMONS,
  DELETE_POKEMONS,
  DELETE_ALL_POKEMONS,
  SET_SAVE_POKEMONS_IN_POKEDEX,
  SAVE_POKEMONS_IN_POKEDEX,
  ERROR_SAVE_POKEMONS_IN_POKEDEX,
  VIEW_DETAIL_POKEMONS,
  IS_IN_CART,
  OUT_CART,
  SET_GET_POKEDEX,
  ERROR_GET_POKEDEX,
  ERROR_VIEW_DETAIL_POKEMONS,
  SET_VIEW_DETAIL_POKEMONS,
} from "./actionTypes";

export const setGetPokemons = () => {
  return {
    type: SET_GET_POKEMONS,
  };
};

export const successGetPokemons = (payload) => {
  return {
    type: SUCCESS_GET_POKEMONS,
    payload,
  };
};

export const errorGetPokemons = (payload) => {
  return {
    type: ERROR_GET_POKEMONS,
    payload,
  };
};
export const setOpenModal = () => {
  return {
    type: SET_OPEN_MODAL,
  };
};
export const setCloseModal = () => {
  return {
    type: SET_CLOSE_MODAL,
  };
};
export const addPokemon = (payload) => {
  return {
    type: ADD_POKEMONS,
    payload,
  };
};

export const deletePokemon = (payload) => {
  return {
    type: DELETE_POKEMONS,
    payload,
  };
};

export const deleteAllPokemons = () => {
  return {
    type: DELETE_ALL_POKEMONS,
  };
};
export const SetSavePokemonsInPokedex = (payload) => {
  return {
    type: SET_SAVE_POKEMONS_IN_POKEDEX,
    payload,
  };
};

export const savePokemonsInPokedex = (payload) => {
  return {
    type: SAVE_POKEMONS_IN_POKEDEX,
    payload,
  };
};

export const errorSavePokemonsInPokedex = (payload) => {
  return {
    type: ERROR_SAVE_POKEMONS_IN_POKEDEX,
    payload,
  };
};
export const setViewDetailPokemon = () => {
  return {
    type: SET_VIEW_DETAIL_POKEMONS,
  };
};
export const viewDetailPokemons = (payload) => {
  console.log("ACTION ===>", payload);
  return {
    type: VIEW_DETAIL_POKEMONS,
    payload,
  };
};
export const errorViewDetailPokemons = (payload) => {
  return {
    type: ERROR_VIEW_DETAIL_POKEMONS,
    payload,
  };
};

export const IsInCart = () => {
  return {
    type: IS_IN_CART,
  };
};
export const OutCart = () => {
  return {
    type: OUT_CART,
  };
};

export const setGetPokedex = () => {
  return {
    type: SET_GET_POKEDEX,
  };
};
export const errorGetPokedex = () => {
  return {
    type: ERROR_GET_POKEDEX,
  };
};
