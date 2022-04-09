import SET_CHARACTER from '../actions/types';

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
    // case 'REMOVE_CHARACTER':
    //   const newState = { ...state };
    //   delete newState[action.character.id];
    //   return newState;
    default:
      return state;
  }
};

export default characterReducer;