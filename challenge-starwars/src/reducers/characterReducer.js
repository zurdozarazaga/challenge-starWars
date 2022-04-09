import {SET_CHARACTER }from '../actions/types';
import {REMOVE_CHARACTER }from '../actions/types';

const initialState = {
  characters: [],
};
console.log(initialState);
// reducer of characters
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER:
      return {
        ...state,
        characters: action.payload,
      };
    case REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(character => character.name !== action.payload),
      };
      
    default:
      return state;
  }
};

export default characterReducer;