import {SET_CHARACTER }from '../actions/types';
import {REMOVE_CHARACTER }from '../actions/types';
import { SEARCH_CHARACTER } from '../actions/types';
import { ADD_CHARACTER } from '../actions/types';


const initialState = {
  characters: [],
};
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
    case SEARCH_CHARACTER:
      const characterObject = state.characters.find(character => character.name === action.payload);
      const characters = [characterObject];
      return {
        ...state,
        characters: characters
      };
      case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload]
      };
    default:
      return state;
  }
};

export default characterReducer;