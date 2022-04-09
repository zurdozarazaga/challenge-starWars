import { getCharacter } from "../api/getCharacter";
import {SET_CHARACTER, REMOVE_CHARACTER, SEARCH_CHARACTER}  from "./types";

// action of setting characters
const setCharacter = (payload) => {
  return {
    type: SET_CHARACTER,
    payload
  }
}

const deleteCharacter = (payload) => {
  return {
    type: REMOVE_CHARACTER,
    payload
  }
}

const searchCharacter = (payload) => {
  return {
    type: SEARCH_CHARACTER,
    payload
  }
}

// action creator of getting characters
const getCharacterAction = () => {
  return (dispatch) => {
    getCharacter(1)
      .then(res => {
        dispatch(setCharacter(res.results));
      
      })
    
    
  }
};
// remove character action
const removeFromCharacter = (payload) => {
  return (dispatch) => {
    dispatch(deleteCharacter(payload));
  };
};

const searchCharacterAction = (payload) => {
  return (dispatch) => {
    dispatch(searchCharacter(payload));
  };
};

export {setCharacter, getCharacterAction, removeFromCharacter,searchCharacterAction, searchCharacter };