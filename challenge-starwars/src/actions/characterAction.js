import { getCharacter } from "../api/getCharacter";
import {SET_CHARACTER, REMOVE_CHARACTER, SEARCH_CHARACTER, ADD_CHARACTER}  from "./types";

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

const addCharacter = (payload) => {
  return {
    type: ADD_CHARACTER,
    payload
  }
};

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

const addCharacterAction = (payload) => {
  return (dispatch) => {
    dispatch(addCharacter(payload));
  };
};

export {setCharacter, getCharacterAction, removeFromCharacter,searchCharacterAction, searchCharacter, addCharacterAction };