import { getCharacter } from "../api/getCharacter";
import {SET_CHARACTER, REMOVE_CHARACTER}  from "./types";

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
  console.log('se ejecuto removeFromCharacter');
  return (dispatch) => {
    dispatch(deleteCharacter(payload));
  };
};

export {setCharacter, getCharacterAction, removeFromCharacter};