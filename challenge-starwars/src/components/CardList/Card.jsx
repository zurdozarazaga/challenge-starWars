import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCharacter } from "../../actions/characterAction";

const Card = ({ character }) => {
  const dispatch = useDispatch();
  //delete handler
  const deleteCharacter = (name) => {
    dispatch(removeFromCharacter(name));
  };

  return (
    <section className="flex justify-between border-2 rounded-lg pl-4 border-gray-300 shadow-md m-3">
      <div className="">
        <div>
          <h2 className="text-lg mb-2 mt-2">{character.name}</h2>
          <h3 className="text-sm mb-2">{character.height}</h3>
          <h3 className="text-sm mb-2">{character.birth_year}</h3>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            deleteCharacter(character.name);
          }}
          className="border rounded-lg  p-1 m-2 mr-6 bg-red-600 text-white"
        >
          Eliminar
        </button>
      </div>
    </section>
  );
};

export default Card;
