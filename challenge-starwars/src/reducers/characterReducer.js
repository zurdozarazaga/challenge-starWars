import { SET_CHARACTER, SET_ERROR, TOGGLE_LOADING } from "../actions/types";
import { REMOVE_CHARACTER } from "../actions/types";
import { SEARCH_CHARACTER } from "../actions/types";
import { ADD_CHARACTER } from "../actions/types";

const initialState = {
  characters: [],
  loading: false,
  error: "",
};
// reducer of characters
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    // set characters
    case SET_CHARACTER:
      return {
        ...state,
        characters: action.payload,
      };
    // remove characters
    case REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (character) => character.name !== action.payload
        ),
      };
    // search characters
    case SEARCH_CHARACTER:
      const characterSearch = action.payload.toLowerCase();
      for (let character of state.characters) {
        if (character.name.toLowerCase().includes(characterSearch)) {
          return {
            ...state,
            characters: state.characters.filter((character) =>
              character.name.toLowerCase().includes(characterSearch)
            ),
          };
        } else {
          return {
            ...state,
            characters: ['no se encontro resultado'],
          };
        }
      }
      break;
    // add characters
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    // toggle loading
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    // set error
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
};

export default characterReducer;
