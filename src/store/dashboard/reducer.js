import { useReducer, useContext } from "react";
import Context from "./Context";
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
  SET_VIEW_DETAIL_POKEMONS,
  VIEW_DETAIL_POKEMONS,
  ERROR_VIEW_DETAIL_POKEMONS,
  IS_IN_CART,
  OUT_CART,
  SET_GET_POKEDEX,
  ERROR_GET_POKEDEX,
} from "./actionTypes";

export const INITIAL_STATE = {
  loading: false,
  error: null,
  pokemon: [],
  cartPokemon: [],
  pokedex: [],
  open: false,
  inCart: false,
  detail: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_GET_POKEMONS:
      return {
        ...state,
        loading: true,
        error: null,
        open: false,
      };
    case SUCCESS_GET_POKEMONS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };
    case ERROR_GET_POKEMONS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_OPEN_MODAL:
      return {
        ...state,
        open: true,
      };
    case SET_CLOSE_MODAL:
      return {
        ...state,
        open: false,
      };
    case ADD_POKEMONS:
      return {
        ...state,
        cartPokemon: [
          ...state.cartPokemon,
          {
            id: action.payload.id,
            name: action.payload.name,
            image: action.payload.image,
            url: action.payload.url,
          },
        ],
      };
    case DELETE_POKEMONS:
      return {
        ...state,
        cartPokemon: state.cartPokemon.filter(
          (item) => item.name !== action.payload.name
        ),
      };

    case DELETE_ALL_POKEMONS:
      return {
        ...state,
        cartPokemon: [],
      };

    case SET_SAVE_POKEMONS_IN_POKEDEX:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SAVE_POKEMONS_IN_POKEDEX:
      return {
        ...state,
        loading: false,
        pokedex: action.payload,
      };
    case ERROR_SAVE_POKEMONS_IN_POKEDEX:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_VIEW_DETAIL_POKEMONS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case VIEW_DETAIL_POKEMONS:
      return {
        ...state,
        loading: false,
        detail: action.payload,
      };
    case ERROR_VIEW_DETAIL_POKEMONS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case IS_IN_CART:
      return {
        ...state,
        isInCart: true,
      };
    case OUT_CART:
      return {
        ...state,
        isInCart: false,
      };
    case SET_GET_POKEDEX:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR_GET_POKEDEX:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useStore = () => useContext(Context);
