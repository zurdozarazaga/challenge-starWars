import { getCharacter } from "../api/getCharacter";
import {
  SET_CHARACTER,
  REMOVE_CHARACTER,
  SEARCH_CHARACTER,
  ADD_CHARACTER,
  TOGGLE_LOADING,
  SET_ERROR,
} from "./types";

// action of setting characters
const setCharacter = (payload) => {
  return {
    type: SET_CHARACTER,
    payload,
  };
};
//delete character action
const deleteCharacter = (payload) => {
  return {
    type: REMOVE_CHARACTER,
    payload,
  };
};
//search character action
const searchCharacter = (payload) => {
  return {
    type: SEARCH_CHARACTER,
    payload,
  };
};
//add character action
const addCharacter = (payload) => {
  return {
    type: ADD_CHARACTER,
    payload,
  };
};
// toggle loading action
const toggleLoading = () => {
  return {
    type: TOGGLE_LOADING,
  };
};
// action of setting error
export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

// action creator of getting characters
const getCharacterAction = (page) => {
  return (dispatch) => {
    try {
      dispatch(toggleLoading());
      getCharacter(page).then((res) => {
        dispatch(setCharacter(res.results));
        dispatch(toggleLoading());
      });
    } catch (err) {
      dispatch(setError({ message: "Ocurrió un error" }));
      console.log(err);
    }
  };
};
// remove character action creator
const removeFromCharacter = (payload) => {
  return (dispatch) => {
    dispatch(deleteCharacter(payload));
  };
};
// search character action creator
const searchCharacterAction = (payload) => {
  return (dispatch) => {
    dispatch(searchCharacter(payload));
  };
};
// add character action creator
const addCharacterAction = (payload) => {
  return (dispatch) => {
    dispatch(addCharacter(payload));
  };
};

export {
  setCharacter,
  getCharacterAction,
  removeFromCharacter,
  searchCharacterAction,
  searchCharacter,
  addCharacterAction,
  toggleLoading,
};
