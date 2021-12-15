import { useStore } from "./reducer";

import {
  setGetPokemons,
  successGetPokemons,
  errorGetPokemons,
  addPokemon,
  deletePokemon,
  deleteAllPokemons,
  setCloseModal,
  setOpenModal,
  savePokemonsInPokedex,
  IsInCart,
  OutCart,
  SetSavePokemonsInPokedex,
  errorSavePokemonsInPokedex,
  errorGetPokedex,
  setGetPokedex,
  viewDetailPokemons,
  setViewDetailPokemon,
  errorViewDetailPokemons,
} from "./actions";

export const useOwnContext = () => {
  const { state, dispatch } = useStore();
  return {
    loading: state.loading,
    error: state.error,
    pokemon: state.pokemon,
    cartPokemon: state.cartPokemon,
    pokedex: state.pokedex,
    open: state.open,
    inCart: state.inCart,
    detail: state.detail,
    setGetPokemons: () => dispatch(setGetPokemons()),
    successGetPokemons: (payload) => dispatch(successGetPokemons(payload)),
    errorGetPokemons: (payload) => dispatch(errorGetPokemons(payload)),
    addPokemon: (payload) => dispatch(addPokemon(payload)),
    deletePokemon: (payload) => dispatch(deletePokemon(payload)),
    deleteAllPokemons: () => dispatch(deleteAllPokemons()),
    setCloseModal: () => dispatch(setCloseModal()),
    setOpenModal: () => dispatch(setOpenModal()),
    savePokemonsInPokedex: (payload) =>
      dispatch(savePokemonsInPokedex(payload)),
    IsInCart: () => dispatch(IsInCart()),
    OutCart: () => dispatch(OutCart()),
    SetSavePokemonsInPokedex: () => dispatch(SetSavePokemonsInPokedex()),
    errorSavePokemonsInPokedex: (payload) =>
      dispatch(errorSavePokemonsInPokedex(payload)),
    errorGetPokedex: (payload) => dispatch(errorGetPokedex(payload)),
    setGetPokedex: () => dispatch(setGetPokedex()),

    viewDetailPokemons: (payload) => dispatch(viewDetailPokemons(payload)),
    errorViewDetailPokemons: (payload) =>
      dispatch(errorViewDetailPokemons(payload)),
    setViewDetailPokemon: () => dispatch(setViewDetailPokemon()),
  };
};
