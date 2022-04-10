import {SET_CHARACTER, SET_ERROR, TOGGLE_LOADING }from '../actions/types';
import {REMOVE_CHARACTER }from '../actions/types';
import { SEARCH_CHARACTER } from '../actions/types';
import { ADD_CHARACTER } from '../actions/types';


const initialState = {
  characters: [],
  loading: false,
  error: '',
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
      console.log('characteres in reducer',characters[0]);
      if(characters[0] === undefined) {
        console.log('characteres in reducer if',characters[0]);
       return{
        ...state,
        characters: [],
       }
    }else{
      console.log('characteres in reducer else',characters);

      return {
        ...state,
        characters: characters,
      };

    }
      case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload]
      };
      case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading
      };
      case SET_ERROR:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
};

export default characterReducer;