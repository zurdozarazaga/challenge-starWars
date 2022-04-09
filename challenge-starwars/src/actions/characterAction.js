import SET_CHARACTER  from "./types";

// action of setting characters
const setCharacter = (payload) => {
  return {
    type: SET_CHARACTER,
    payload
  }
}

export default setCharacter;